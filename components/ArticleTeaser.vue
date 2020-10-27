<template>
  <div class="box bg rounded p-3">
    <div class="left">
      <nuxt-link :to="{ path: `/${fullSlug}` }" prefetch replace>
        <img
          :data-src="
            content.Image[0].filename.replace(
              'https://a.storyblok.com/',
              'https://img2.storyblok.com/350x0/filters:quality(40)/'
            )
          "
          :alt="content.Image[0].name"
          class="img"
          v-lazy-load
        />
      </nuxt-link>
    </div>
    <div class="right">
      <nuxt-link :to="{ path: `/${fullSlug}` }" prefetch replace>
        <h3 class="mt-2">{{ content.Headline }}</h3>
      </nuxt-link>
      <nuxt-link :to="{ path: `/${fullSlug}` }" prefetch replace>
        <p>
          {{ content.Description }}
        </p>
      </nuxt-link>
      <Link :href="`/${fullSlug}`" value="Přečíst článek 👉" />
    </div>
  </div>
</template>
<script>
import Link from "~/components/Link.vue";
export default {
  props: {
    content: Object,
    fullSlug: String
  },
  components: {
    Link
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.box {
  display: flex;
  margin-bottom: 1rem;
}

.left {
  width: 40%;
}

.right {
  width: 60%;
}
@media (max-width: $bp-phone) {
  .box {
    flex-direction: column;
  }
  .left {
    width: 100%;
  }

  .right {
    width: 100%;
  }
}
@media (min-width: $bp-phone) {
  .left {
    width: 40%;
    padding: 0 2rem 0 0;
  }

  .right {
    width: 60%;
  }
}

.img {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
}
</style>
