<template>
  <Container>
    <div class="bg rounded p-4">
    <h1>Kontakt</h1>
    <p class="lead">
      <ul> 
        <li>Jméno a příjmení: Filip Balada </li>
        <li>Telefonní číslo: +420 602 123 456</li>
        <li>E-mail: info@praceremote.cz</li>
        <li>Ičo: 07602456 </li>
      </ul>
    </p>
    </div>
  </Container>
</template>
<script>
import Container from "~/components/Container.vue";

export default {
  components: {
    Container
  },
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "other" });
  }
};
</script>
