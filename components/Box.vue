<template>
  <div class="box mb-2">
    <div class="intro">
      <div class="my-2"><font-awesome-icon :icon="['fas', 'calendar-day']"/><span class="px-1">{{ posted }}</span></div>
      <h2 class="text-bold mb-1 jobName">{{ jobName }}</h2>
    </div>
    <div class="list">
      <List
        :items="[
          { icon: 'globe-europe', title: region },
          { icon: 'folder', title: category },
          { icon: 'file-signature', title: commitment }
        ]"
      />
    </div>
    <div class="action">
      <buttonLink :href="href" value="Pokračovat" />
    </div>
  </div>
</template>
<script>
import ButtonLink from "~/components/ButtonLink.vue";
import List from "~/components/List.vue";

export default {
  components: {
    ButtonLink,
    List
  },
  props: {
    posted: String,
    jobName: String,
    region: String,
    category: String,
    commitment: String,
    href: String
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.jobName {
  font-size: 1.5rem !important;
}

.box {
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: flex-start;
  background-color: $bg;
  border-radius: $radius;
}

.intro > .pills > span {
  background: $light;
  color: $dark;
  font-size: 0.85rem;
  margin-right: 0.25rem;
  padding: 0 4px;
  border-radius: $radius;
}

.intro,
.action,
.list {
  padding: 0 0.5rem;
}

@media (max-width: $bp-phone) {
  .box {
    flex-direction: column;
  }
  .intro {
    width: 100%;
  }
  .list {
    width: 100%;
  }
  .action {
    width: 100%;
    margin-top: 1rem;
  }
}

@media (min-width: $bp-phone) {
  .box {
    flex-direction: row;
  }
  .intro {
    width: 50%;
  }
  .list {
    width: 30%;
  }
  .action {
    width: 20%;
  }
}
</style>
