<template>
  <div class="my-4">
    <label :for="`${name}+${id}`" class="Label">
      {{ label }}
      <span v-if="required"> *</span>
      <span v-else> (nepovinné)</span>
    </label>
    <RadioButton
      v-for="(item, index) in radioButtons"
      :key="index"
      :id="item.id"
      :name="name"
      :title="item.title"
      :checked="item.checked"
      v-model="checkedButtonId"
      @input="updateValue()"
    />
  </div>
</template>
<script>
import RadioButton from "~/components/RadioButton.vue";

export default {
  data() {
    return {
      checkedButtonId: null
    };
  },
  methods: {
    updateValue() {
     this.$emit("input", this.checkedButtonId);
    }
  },
  components: {
    RadioButton
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: "Label"
    },
    required: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    radioButtons: {
      type: Array,
      required: true
    }
  }
};
</script>
