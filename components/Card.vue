<template>
  <client-only>
    <div :class="`card p-3 m-a ${shadow ? 'cardShadow' : ''}`">
      <slot> </slot>
    </div>
  </client-only>
</template>
<script>
export default {
  props: {
    shadow: Boolean
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";
.cardShadow {
  -webkit-box-shadow: -8px 0px 32px 0px $shadow;
  -moz-box-shadow: -8px 0px 32px 0px $shadow;
  box-shadow: -8px 0px 32px 0px $shadow;
}

.card {
  background-color: $bg;
  border-radius: $radius;
  max-width: 720px;
  width: 100%;
}
</style>
