<template>
  <div class="box">
    <div class="left p-3">
      <h1>Najděte si práci na dálku</h1>
      <List
        :items="[
          {
            icon: 'check-circle',
            title: 'Trend, který je již dnes v zahraničí standardem.'
          },
          {
            icon: 'check-circle',
            title: 'Přehledné, aktualizované a ověřené inzeráty.'
          },
          {
            icon: 'check-circle',
            title: 'Vše co potřebujete vědět o fungování remote.'
          },
          {
            icon: 'check-circle',
            title: 'Ideální nástroj pro náboráře zdarma.'
          }
        ]"
      />
      <div class="mt-4 mb-2 text-bold">
        <Link
          href="/pridat-pracovni-nabidku"
          value="👨‍🔧 Přidejte pracovní nabídku "
        />
      </div>
    </div>
    <div class="right">
      <img :src="require('~/assets/hero.webp')" :alt="'prace remote hero'" v-lazy-load/>
    </div>
  </div>
</template>
<script>
import List from "~/components/List.vue";
import Link from "~/components/Link.vue";

export default {
  components: {
    List,
    Link
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.box {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: $radius;
}

.right > img {
  border-radius: $radius;
}

@media (max-width: $bp-tablet) {
  .box {
    flex-direction: column-reverse;
  }
  .left {
    width: 100%;
  }

  .right {
    width: 100%;
  }
}

@media (min-width: $bp-tablet) {
  .box {
    flex-direction: row;
  }
  .left {
    width: 60%;
  }

  .right {
    width: 40%;
  }
}
</style>
>
