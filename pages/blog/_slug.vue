<template>
  <Container>
    <article>
      <header>
        <h1 v-html="headline" class="text-center mb-2"></h1>
      </header>
      <Card>
        <section class="bg rounded p-4">
          <div>
            <img
              :srcset="responsiveImage(img.src)"
              :src="img.src"
              :alt="img.name"
              class="articleImage"
              v-lazy-load
            />
            <p>{{ img.alt }}</p>
          </div>
          <div v-html="articleBody"></div>
          <hr class="mb-3" />
          <div>Autor: {{ author }}</div>
          <div>Zveřejněno: {{ published }}</div>
        </section>
      </Card>
    </article>
  </Container>
</template>

<script>
import marked from "marked";
import Card from "~/components/Card.vue";
import Container from "~/components/Container.vue";

export default {
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "blog" });
  },
  components: {
    Card,
    Container
  },
  head() {
    let url = `https://praceremote.cz/${this.story.full_slug}/`;
    let obj = {
      title: this.story.content.Headline,
      meta: [
        {
          name: "author",
          hid: "author",
          content: this.story.content.Author
        },
        {
          name: "description",
          hid: "description",
          content: this.story.content.Description
        },
        {
          property: "og:title",
          content: this.story.content.Headline
        },
        {
          property: "og:url",
          content: url
        },
        {
          property: "og:description",
          content: this.story.content.Description
        },
        {
          property: "og:image",
          content: this.story.content.Image[0].filename
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
          content: `${this.story.content.Headline} | PráceRemote.cz`
        },
        {
          name: "twitter:description",
          content: this.story.content.Description
        },
        {
          name: "twitter:image",
          content: this.story.content.Image[0].filename
        },
        {
          name: "twitter:image:alt",
          content: this.story.content.Image[0].name
        }
      ],
      link: [
        {
          rel: "canonical",
          href: url
        }
      ]
    };

    return obj;
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: this.story.content.Headline,
      alternativeHeadline: this.story.content.AlternativeHeadline,
      image: this.story.content.Image[0].filename,
      author: this.story.content.Author,
      award: this.story.content.Award,
      editor: this.story.content.Author,
      genre: this.story.content.Gender,
      keywords: this.story.content.Keywords,
      wordcount: "2500",
      publisher: {
        "@type": "Organization",
        name: "PráceRemote.cz",
        logo: {
          "@type": "ImageObject",
          url: "https://praceremote.cz/logo.png"
        }
      },
      url: "https://praceremote.cz/",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://praceremote.cz/${this.story.full_slug}`
      },
      datePublished: this.dateToGoogleDate(this.story.first_published_at),
      dateCreated: this.dateToGoogleDate(this.story.created_at),
      dateModified: this.dateToGoogleDate(this.story.published_at),
      description: this.story.content.Description,
      articleBody: this.$storyapi.richTextResolver.render(
        this.story.content.ArticleBody
      )
    };
  },
  methods: {
    responsiveImage(src) {
      let strings = [];

      src = src.replace(
        "https://a.storyblok.com/",
        "https://img2.storyblok.com/1200x720/filters:quality(40)/"
      );

      let i = 1;

      for (i; i <= 10; i++) {
        strings.push(
          src.replace(
            "/1200x720/",
            `/${Math.round(1200 / i)}x${Math.round(720 / i)}/`
          )
        );
      }

      return strings.toString().replace(/,/g, ", \n");
    },
    dateToGoogleDate(str) {
      let date = new Date(str);
      let parsed = "";

      if (date) {
        parsed = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      }
      return parsed;
    }
  },
  computed: {
    img() {
      return {
        name: this.story.content.Image[0].name,
        src: this.story.content.Image[0].filename
      };
    },
    published() {
      if (this.story.published_at) {
        let date = this.story.published_at;
        let published = new Date(date);
        published = `${published.getDate()}. ${published.getMonth() +
          1}. ${published.getFullYear()}`;
        return published;
      } else {
        return "Ještě není zveřejněno.";
      }
      return "";
    },
    author() {
      return this.story.content.Author;
    },
    headline() {
      return marked(this.story.content.Headline);
    },
    articleBody() {
      let html = this.$storyapi.richTextResolver.render(
        this.story.content.ArticleBody
      );

      //set all external links to nofollow
      html = html.replace(
        /target="_blank"/g,
        'target="_blank" rel="nofollow noopener noreferrer" '
      );

      let srcToReplace = (html = html.replace(
        /https:\/\/a\.storyblok\.com\//g,
        "https://img2.storyblok.com/1200x0/filters:quality(40)/"
      ));

      return html;
    }
  },
  async asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";

    let story = await context.app.$storyapi
      .get(`cdn/stories/blog/${context.params.slug}?version=${version}`)
      .then(res => {
        return res.data;
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      });

    return story;
  }
};
</script>
<style lang="scss" scoped>
.articleImage {
  width: 100%;
}
</style>
