<template>
    <div>
        <div> {{ companyName}} </div>
        <div> {{ title }} </div>
        <div> {{ jobType}} </div>
        <div> {{ created }} </div>
        <div> {{ promoted }} </div>
    </div>
</template>
<script>
import Card from "~/components/Card.js";

export default {
    components: {
        Card
    },
    props: {
        companyName: String,
        title: String,
        jobType: String, 
        created: String,
        promoted: Boolean
    }
}
</script>