<template>
  <div>
    <Container>
      <h1 class="text-center">Kalkulačka platu a mzdy 💰</h1>
      <Card>
        <h3>
          <font-awesome-icon :icon="['fas', 'money-bill-wave']" /> - Zadejte
          údaje o své současné práci
        </h3>
        <compareIncome />
      </Card>
    </Container>
  </div> 
</template>
<script>
import compareIncome from "~/components/compareIncome";
import Container from "~/components/Container.vue";
import Card from "~/components/Card.vue";

export default {
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "form" });
  },
  components: {
    compareIncome,
    Container,
    Card
  }
};
</script>
