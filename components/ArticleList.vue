<template>
  <div>
      <ArticleTeaser v-for="item in stories" :key="item.id" :content="item.content" :fullSlug="item.full_slug" />
  </div>
</template>
<script>
import ArticleTeaser from "~/components/ArticleTeaser.vue";
import Card from "~/components/Card.vue";
import Container from "~/components/Container.vue";

export default {
  components: {
    ArticleTeaser,
    Card,
    Container
  },
  props: {
      stories: Array
  }
};
</script>
