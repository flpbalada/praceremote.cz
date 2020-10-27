<template> </template>
<script>
export default {
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "other" });
  }
};
</script>
