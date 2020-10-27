<template>
    <div>
        <img v-for="(item, index) in items" :key="index" :data-src="item.src" :alt="item.name" v-lazy-load/>
    </div>
</template>
<script>
export default {
    props: {
        items: Array,
    }
}
</script>