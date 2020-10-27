<template>
  <Container>
    <Jumbotron />
    <h2 class="text-center mt-4">Nejnovější pracovní pozice</h2>
    <div class="py-4">
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
    </div>
    <hr />
    <h2 class="text-center mt-4">Nejnovější články</h2>

    <div class="py-4">
      <ArticleList :stories="stories" />
    </div>
    <hr />

    <h2 class="text-center mt-4">Často kladené otázky</h2>
    <FAQ :faqs="faqs" class="py-4" />
  </Container>
</template>

<script>
import Container from "~/components/Container.vue";
import Card from "~/components/Card.vue";
import Jumbotron from "~/components/Jumbotron.vue";
import Box from "~/components/Box.vue";
import FAQ from "~/components/FAQ.vue";
import ArticleList from "~/components/ArticleList.vue";
import Link from "~/components/Link.vue";

import axios from "axios";

export default {
  scrollToTop: true,
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "homePage" });
  },
  head() {
    return {
      title: "Práce Remote | Česká online sbírka remote pracovních nabídek.",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Práce Remote je online portál pro všechny vývojáře, náboráře, developery, designery, cestovatele, ... prostě pro všechny, kteří chtějí žít work-life balance a chtějí pracovat na dálku."
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow"
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff"
        },
        {
          name: "msapplication-TileImage",
          content: "/ms-icon-144x144.png"
        },
        {
          name: "theme-color",
          content: "#ffffff"
        },
        {
          property: "og:title",
          content:
            "Práce Remote | 4 důvody proč si najít práci na dálku nebo z domova."
        },
        {
          property: "og:url",
          content: "https://praceremote.cz"
        },
        {
          property: "og:description",
          content:
            "Práce Remote je online portál pro všechny vývojáře, náboráře, developery, designery, cestovatele, ..."
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
          content:
            "Práce Remote | 4 důvody proč si najít práci na dálku nebo z domova."
        },
        {
          name: "twitter:description",
          content:
            "Práce Remote je online portál pro všechny vývojáře, náboráře, developery, designery, cestovatele, ... "
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
          href: "https://praceremote.cz"
        }
      ]
    };
  },
  jsonld() {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PráceRemote.cz",
        alternateName: "PráceRemote.cz",
        url: "https://praceremote.cz",
        logo: "https://praceremote.cz/logo.svg",
        sameAs: ["https://www.instagram.com/praceremote.cz/"]
      },
      {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "PráceRemote.cz",
        url: "https://praceremote.cz",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://praceremote.cz/vyhledat?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ];
  },
  components: {
    Container,
    Card,
    Jumbotron,
    Box,
    Container,
    FAQ,
    ArticleList,
    Link
  },
  methods: {
    getCompanyBySessionId(sessionId) {
      return this.companies.find(function(item) {
        return item.sessionId == sessionId;
      });
    },
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
  computed: {
    faqs() {
      return [
        {
          title: "Kolik firma ušetří díky homeoffice?",
          text:
            "Přesně to říct nemůžeme, protože každá firma, jiné výdaje. Firma každopádně ušetří za pronájem kanceláří, elektřinu, wifi, kávu,… a tyto částky často bývají v řádech statisíců měsíčně. "
        },
        {
          title: "Jak moc je v oblibě práce na dálku?",
          text:
            "V Las Angeles, zejména v Silicon Valey byla práce remote už před korona krizí na denním pořádků. Bylo to zejména z důvodu drahých nájmů a náročného dojíždění do kanceláří."
        },
        {
          title: "Co je to práce remote?",
          text:
            "Práce remote, neboli práce na dálku je nový trend způsobu vykonávání práce, kdy pracující není fixovaný na konkrétní místo, kam dochází práci vykonávat. Může tak například pracovat díky internetu například z domácí kanceláře, coworking centra, nebo ze své dodávky na pláži ve Španělsku. "
        },
        {
          title: "Co je to digitální nomád?",
          text:
            "Digitální nomád je člověk, který se dlouhodobě přesouvá z místa na místo a živí ho práce přes internet. Může přitom být jak freelancer, tak zaměstnanec či podnikatel. Například firma kiwi.com, má většinu svých zaměstnanců na práci remote díky tomu, že většina z nich jsou cestovatelé. "
        },
        {
          title: "Jaké jsou hlavní výhody práce z domu?",
          text:
            "Není nutné utrácet za předražené kanceláře – trend převoněných kanceláří pochybných startupů je snad již za námi. Zaměstnanec ušetří za dojíždění a věnuje práci nejproduktivnější části dne. Zároveň se více rovná work-life balance. Zjistili jsme, že díky remote práci jsou pracující více uklidnění a mají trochu více času věnovat se svým zálibám. "
        },
        {
          title: "Co je to práce remote?",
          text:
            "Práce remote, neboli práce na dálku je nový trend způsobu vykonávání práce, kdy pracující není fixovaný na konkrétní místo, kam dochází práci vykonávat. Může tak například pracovat díky internetu například z domácí kanceláře, coworking centra, nebo ze své dodávky na pláži ve Španělsku. "
        },

        {
          title: "Jak spolu komunikují vzdálené – remote týmy?",
          text:
            "Před pár lety by to byl Skype, nebo e-mail. Dnes jsou k dispozici výborné aplikace jako například Slack nebo Microsoft Teams, které se dají propojit s kalendáři. Online schůzky jsou už skoro bez výpadků a největší problém je většinou velké množství routerů v bytových jednotkách, které si navzájem ruší signál. "
        },
        {
          title: "Jak je náročné zůstat soustředěný na homeoffice?",
          text:
            "Je pravdou, že při práci na dálku na nás působí jisté spouštěče, které nás mohou odtahovat od práce. Můžou to být buď domácí práce, mazlíčci, rodina. Nadruhou stranu ve workspacu vás stále někdo vyrušuje od práce různými dotazy a požadavky, které vás z pracovní flow dokážou vytáhnout až na 40 minut. Předpokládáme, že při práci na dálku máte větší klid a tedy i větší focus na prováděnou práci.  "
        },
        {
          title: "Jsou opravdu pracovníci na homeoffice produktivní?",
          text:
            "Podle průzkumu u 3 000 pracovníků pouze sedm procent z nich uvedlo, že jim přijde více produktivní práce ve workspacu. Průzkum tvořil server FlowJobs."
        },
        {
          title: "Jak můžu zažádat o práci na dálku?",
          text:
            "Úplně stejně jako u těch ostatních. Vždycky oslovujete e-mailem nebo telefonicky náboráře, který pracovní pozici inzeruje. "
        },
        {
          title: "Jaké nástroje používat pro práci remote?",
          text: "Slack, Microsoft Teams, nástroje od Googlu, … "
        }
      ];
    }
  },
  async asyncData({ isDev, app, error, store }) {
    let jobs = [];

    jobs = await axios
      .post(
        "https://us-central1-praceremote.cloudfunctions.net/getPublishedJobs",
      )
      .then(res => {
        return res.data;
      });


    //get articles from storyblok
    let version = isDev ? "draft" : "published";

    let stories = await app.$storyapi
      .get(
        `cdn/stories?excluding_slugs=blog/&sort_by=first_published_at:desc&?per_page=10&page=1&version${version}`
      )
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          error(res);
          error({
            statusCode: 404,
            message: "Failed to receive content form api"
          });
        } else {
          error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });

    stories = stories.stories;

    return {
      jobs: jobs,
      stories
    };
  }
};
</script>
