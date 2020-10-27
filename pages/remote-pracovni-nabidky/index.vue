<template>
  <Container>
    <h1 class="text-center">Remote pracovní nabídky</h1>
    <Box
      v-for="item in jobs"
      :key="item.sessionId"
      :posted="item.posted"
      :jobName="item.title"
      :region="getRegion(item.region)"
      :category="getCategory(item.category)"
      :commitment="getommitment(item.commitment)"
      :href="`./remote-pracovni-nabidky${item.slug}`"
    />
  </Container>
</template>
<script>
import Box from "~/components/Box.vue";
import Container from "~/components/Container.vue";

import axios from "axios";

export default {
  scrollToTop: true,
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "landingPage" });
  },
  head() {
    let url = `https://praceremote.cz${this.$route.path}/`;

    return {
      title: "Srovnání remote pracovních nabídek online",
      meta: [
        {
          name: "author",
          hid: "author",
          content: "praceremote.cz"
        },
        {
          name: "description",
          hid: "description",
          content:
            "Prohlédněte si srovnané pracovní nabídky pro práci remote. Pracovní nabídky pro frontend, backend, fullstack developery. Dále pro designery, grafiky, či manažery."
        },
        {
          property: "og:title",
          content: "Srovnání remote pracovních nabídek online"
        },
        {
          property: "og:url",
          content: url
        },
        {
          property: "og:description",
          content:
            "Prohlédněte si srovnané pracovní nabídky pro práci remote. Pracovní nabídky pro frontend, backend, fullstack developery. Dále pro designery, grafiky, či manažery."
        },
        {
          property: "og:image",
          content: "https://praceremote.cz/bg.jpg"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:site",
          content: "https://praceremote.cz"
        },
        {
          name: "twitter:title",
          content: "Srovnání remote pracovních nabídek online"
        },
        {
          name: "twitter:description",
          content:
            "Prohlédněte si srovnané pracovní nabídky pro práci remote. Pracovní nabídky pro frontend, backend, fullstack developery. Dále pro designery, grafiky, či manažery."
        },
        {
          name: "twitter:image",
          content: "https://praceremote.cz/bg.jpg"
        },
        {
          name: "twitter:image:alt",
          content: "Práceremote.cz"
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
  components: {
    Box,
    Container
  },
  methods: {
    getommitment(num) {
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
  computed: {},
  async asyncData({ error }) {
    let jobs = {};
    let signedIn = false;

    //only published job
    jobs = await axios
      .post(
        "https://us-central1-praceremote.cloudfunctions.net/getPublishedJobs"
      )
      .then(res => {
        return res.data;
      });

    return {
      jobs: jobs
    };
  }
};
</script>
