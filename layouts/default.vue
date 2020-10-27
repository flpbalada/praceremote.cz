<template>
  <div class="content">
    <Navbar />
    <div>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>
<style lang="scss" scoped>
.content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
