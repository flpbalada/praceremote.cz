<template>
  <nuxt-link :to="href" title="value" class="link  my-2">
    {{ value }}
  </nuxt-link>
</template>
<script>
export default {
  props: {
    href: String,
    value: String
  }
};
</script>
<style lang="scss">
.link {
  text-align: center;
  text-decoration: none;
  color: initial;
}

.link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
