<template>
  <ul>
    <li v-for="(item, index) in items" :key="index" class="my-1">
      <font-awesome-icon :icon="['fas', item.icon]" />
      <div class="px-1">
        {{ item.title }}
      </div>
    </li>
  </ul>
</template>
<script>
//check-circle
export default {
  props: {
    items: Array
  }
};
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  display: flex;
}

</style>
