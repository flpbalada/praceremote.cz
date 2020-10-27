<template>
  <div>
    <Container class="text-center">
      <Card>
        <h1>404. Požadovaná stránka nebyla nalezena.</h1>
        <p class="lead">Zkontrolujte, zdali jste správně zadali adresu.</p>
      </Card>
    </Container>
  </div>
</template>
<script>
import Container from "~/components/Container.vue";
import Card from "~/components/Card.vue";

export default {
  components: {
    Container,
    Card
  }
};
</script>
