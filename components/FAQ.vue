<template>
  <div>
    <div class="row bg rounded">
      <div class="col p-4" v-for="(item, index) in faqs" :key="index">
        <h3>{{ item.title }}</h3>
        <p>
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "~/components/Card.vue";

export default {  
  components: {
    Card
  },
  jsonld() {
    let faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: []
    };

    this.faqs.forEach(element => {
      let obj = {
        "@type": "Question",
        name: element.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: element.text
        }
      };
      faq.mainEntity.push(obj);
    });

    return faq;
  },
  props: {
    faqs: Array
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  width: 50%;
}

@media only screen and (max-width: $bp-phone) {
  .row {
    flex-direction: column;
  }

  .col {
    width: 100%;
    margin: 0;
  }
}
</style>
