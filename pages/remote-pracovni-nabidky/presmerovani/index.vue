<template>
  <div>
    <Container>
      <Card>
        <h1 class="text-center">Budete přesměrovnání na web společnosti.</h1>
      </Card>
    </Container>
  </div>
</template>
<script>
import Container from "~/components/Container.vue";
import Card from "~/components/Card.vue";

export default {
  scrollToTop: true,
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "redirect" });
  },
  components: {
    Container,
    Card
  },
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "outbound" });
  },
  head() {
    return {
      title: "Probíhá přesměrování...",
      meta: [
        {
          name: "robots",
          hid: "robots",
          content: "noindex, nofollow"
        }
      ]
    };
  },
  beforeCreate() {
    let id = this.$route.query.id;
    let url = this.$route.query.url;
    let jobName = this.$route.query.job_name;

    let company = this.$route.query.company;

    if (url && process.client) {
      url =
        url +
        `?utm_source=praceremote.cz&utm_medium=referral&utm_campaign=job&utm_content=${jobName}`;

      window.location.href = url;
    }
  }
};
</script>
