<template>
  <Container>
    <h1 class="text-center">Blog PráceRemote.cz</h1>
    <ArticleList :stories="stories" />
  </Container>
</template>

<script>
import ArticleList from "~/components/ArticleList.vue";
import Container from "~/components/Container.vue";

export default {
  components: {
    ArticleList,
    Container,
  },
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "blog" });
  },
  head() {
    let url = `https://praceremote.cz${this.$route.path}/`;

    return {
      title: "Blog | PráceRemote.cz",
      meta: [
        {
          name: "author",
          hid: "author",
          content: "praceremote.cz"
        },
        {
          name: "description",
          hid: "description",
          content: "Novinky, rady a tipy nejen z oblasti remote práce. "
        },
        {
          property: "og:title",
          content: "Blog PráceRemote.cz"
        },
        {
          property: "og:url",
          content: url
        },
        {
          property: "og:description",
          content: "Novinky, rady a tipy nejen z oblasti remote práce. "
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
          content: "Blog PráceRemote.cz"
        },
        {
          name: "twitter:description",
          content: "Novinky, rady a tipy nejen z oblasti remote práce. "
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
  async asyncData(context) {
    let version = context.isDev ? "draft" : "published";

    let stories = await context.app.$storyapi
      .get(
        `cdn/stories?excluding_slugs=blog/&sort_by=first_published_at:desc&?per_page=10&page=1&version${version}`
      )
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          });
        } else {
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });

    return stories;
  }
};
</script>
