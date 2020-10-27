<template>
  <div>
    <Container>
      <h1 class="text-center">{{ job.title }}</h1>
      <Card>
        <h2>O společnosti {{ company.name }}</h2>
        <div v-html="company.description"></div>
        <div>
          <nuxt-link
            :to="
              `./presmerovani/?id=${company.sessionId}&url=${company.websiteUrl}&company=${company.name}&job_name=${job.title}`
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ `Prohlédnout web ${company.name}` }}
          </nuxt-link>
        </div>
        <hr class="my-6" />
        <div v-html="job.description" class="mb-4"></div>
        <hr class="my-6" />
        <List
          :items="[
            { icon: 'building', title: company.name },
            { icon: 'link', title: company.websiteUrl },
            { icon: 'globe-europe', title: getRegion(job.region) },
            { icon: 'folder', title: getCategory(job.category) },
            { icon: 'file-signature', title: getCommitment(job.commitment) },
            { icon: 'clock', title: job.posted }
          ]"
        />
        <hr class="my-6" />
        <jobApply
          :companySessionId="company.sessionId"
          :jobSessionId="job.sessionId"
          :companyName="company.name"
          :positionName="job.title"
        />
      </Card>
    </Container>
  </div>
</template>
<script>
import Container from "~/components/Container.vue";
import Card from "~/components/Card.vue";
import ButtonLink from "~/components/ButtonLink.vue";
import List from "~/components/List.vue";
import jobApply from "~/components/jobApply";
import axios from "axios";

export default {
  scrollToTop: true,
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "jobOffer" });
  },
  head() {
    let url = `https://praceremote.cz${this.$route.path}/`;

    return {
      title: this.job.title,
      meta: [
        {
          name: "author",
          hid: "author",
          content: this.company.name
        },
        {
          name: "description",
          hid: "description",
          content: this.company.description
        },
        {
          property: "og:title",
          content: this.job.title
        },
        {
          property: "og:url",
          content: url
        },
        {
          property: "og:description",
          content: this.company.description
        },
        {
          property: "og:image",
          content: "https://praceremote.cz/bg.jpg"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: url
        }
      ]
    };
  },
  jsonld() {
    let obj = {
      "@type": "JobPosting",
      title: this.job.title,
      description: this.job.description,
      datePosted: this.job.posted,
      validThrough: this.job.posted,
      hiringOrganization: {
        "@type": "Organization",
        name: this.company.name,
        logo: this.company.logo
      },
      employmentType: [this.getCommitment(this.job.commitment)],
      jobLocation: [
        {
          "@type": "Place",
          address: { addressLocality: this.getRegion(this.job.region) }
        }
      ]
    };
    return obj;
  },
  components: {
    Container,
    Card,
    ButtonLink,
    List,
    jobApply
  },
  methods: {
    getCommitment(num) {
      let arr = [
        "Plný úvazek",
        "Poloviční úvazek",
        "Krátkodobý projekt",
        "Dlouhodobý projekt"
      ];
      return arr[num];
    },
    getCategory(num) {
      let arr = [
        "Design",
        "Analytika",
        "IT",
        "Sales a Marketing",
        "Business",
        "jiné"
      ];
      return arr[num];
    },
    getRegion(num) {
      let arr = [
        "Praha a Střední Čechy",
        "Východní Čechy",
        "Západní Čechy",
        "Severní Čechy",
        "Jižní Čechy",
        "Morava a Slezsko"
      ];
      return arr[num];
    }
  },
  async asyncData({ params, error }) {
    let jobId = params.id;
    jobId = params.id.split("-")[0];

    let job = {};
    let company = {};
    let post = {};

    job = await axios
      .post("https://us-central1-praceremote.cloudfunctions.net/getJobBySlug", {
        slug: `/${params.id}`
      })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });

    company = await axios
      .post(
        "https://us-central1-praceremote.cloudfunctions.net/getCompanyById",
        {
          sessionId: jobId
        }
      )
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });

    return {
      company: company,
      job: job
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.actual {
  color: $secondary;
  font-weight: 500;
  font-size: 1rem;
}
</style>
