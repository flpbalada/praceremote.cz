<template>
  <nav class="mb-4 bg box-shadow">
    <Container>
      <div class="navbar p-2">
        <Brand />
        <HamburgerMenu id="nav">
          <Navitems />
        </HamburgerMenu>
      </div>
    </Container>
  </nav>
</template>
<script>
import Card from "~/components/Card.vue";
import Brand from "~/components/Brand.vue";
import HamburgerMenu from "~/components/HamburgerMenu.vue";

export default {
  components: {
    Card,
    Brand,
    HamburgerMenu
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: black;
}
.navbar {
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
}

</style>
