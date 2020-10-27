<template>
  <Container>
    <div class="bg rounded p-4">
      <h1>O PráceRemote.cz</h1>
      <p class="lead">
        Všichni jsme zažili switch v roce 2020, kdy se každodenní život stočil o
        180 stupňů z důsledků covid-19 pandemie. Někteří v tom viděli možnosti,
        jak zbohatnou prodejem roušek s aktivním stříbrem, my jsme si všimli, že
        se na českém trhu práce tvoří nová příležitost. Stavíme digitální
        marketplace pro náboráře a zkušené odborníky, jejichž práce nemusí být
        nutně 8 hodin a pět dní v týdnu v kanclu. Jdeme po vzoru zahraničních
        implementací jako jsou weworkremotely.com, remoteok.io nebo nodesk.co a
        našim cílem je být v budoucnu jejich celosvětovými konkurenty.
      </p>
    </div>
  </Container>
</template>
<script>
import Container from "~/components/Container.vue";

export default {
  scrollToTop: true,
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "other" });
  },
  head() {
    let url = `https://praceremote.cz${this.$route.path}/`;

    return {
      title: "O PráceRemote.cz",
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
            "Všichni jsme zažili switch v roce 2020, kdy se každodenní život stočil o 180 stupňů z důsledků covid-19 pandemie."
        },
        {
          property: "og:title",
          content: "O PráceRemote.cz"
        },
        {
          property: "og:url",
          content: url
        },
        {
          property: "og:description",
          content:
            "Všichni jsme zažili switch v roce 2020, kdy se každodenní život stočil o 180 stupňů z důsledků covid-19 pandemie."
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
  components: {
    Container
  }
};
</script>
