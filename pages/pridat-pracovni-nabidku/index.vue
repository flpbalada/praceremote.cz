<template>
  <Container>
    <h1 class="text-center">Přidat pracovní nabídku 📝</h1>
    <Card shadow>
      <AddJob />
    </Card>
  </Container>
</template>
<script>
import Container from "~/components/Container.vue";
import Card from "~/components/Card.vue";

export default {
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "form" });
  },
  head() {
    let url = `https://praceremote.cz${this.$route.path}/`;

    return {
      title: "Přidejte pracovní nabídku na portál PráceRemote.cz",
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
            "Přidejte pracovní nabídku na náš portál a nechte se oslovit zájemci o vaši pozici."
        },
        {
          property: "og:title",
          content: "Přidejte pracovní nabídku na portál PráceRemote.cz"
        },
        {
          property: "og:url",
          content: url
        },
        {
          property: "og:description",
          content:
            "Přidejte pracovní nabídku na náš portál a nechte se oslovit zájemci o vaši pozici."
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
          content: "Přidejte pracovní nabídku na portál PráceRemote.cz"
        },
        {
          name: "twitter:description",
          content: "Přidejte pracovní nabídku na náš portál a nechte se oslovit zájemci o vaši pozici."
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
    Container,
    Card
  }
};
</script>
