<template>
  <div class="navItems">
    <Link href="/pridat-pracovni-nabidku" value="Přidat nabídku" class="px-1" />
    <Link href="/remote-pracovni-nabidky" value="Nabídky práce" class="px-1" />
    <Link href="/porovnat-mzdu-nebo-plat" value="Porovnat plat" class="px-1" />
    <Link href="/o-nas" value="O nás" class="px-1" />
    <Link href="/blog" value="Blog" class="px-1" />
    <Link href="/kontakt" value="Kontakt" class="px-1" />
  </div>
</template>
<script>
import Link from "~/components/Link.vue";
import ButtonLink from "~/components/ButtonLink.vue";

export default {
  components: {
    Link,
    ButtonLink
  }
};
</script>
<style lang="scss">
@import "~/assets/css/main.scss";

.navItems {
  min-width: 200px;
  display: flex;
}

@media (max-width: $bp-desktop) {
  .navItems {
    flex-direction: column;
  }
}
@media (min-width: $bp-desktop) {
  .navItems {
    flex-direction: row;
  }
}
</style>
