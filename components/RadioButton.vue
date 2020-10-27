<template>
  <label class="container">
    <span class="title"> {{ title }}</span>
    <input
      type="radio"
      :id="id"
      :name="name"
      :checked="checked"
      @input="updateValue($event.target.id)"
      class="radio mb-1"
    />
    <span class="checkmark"></span>
  </label>
</template>
<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    checked: {
      type: Boolean
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 56px;
  padding-top: 12px;
  margin: 8px 0;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: solid 1px $border;
  height: 48px;
  border-radius: $radius;
  font-weight: 500;
}

.container:hover {
  transition: 0.16s;
  transition-timing-function: ease-in-out;
  -webkit-box-shadow: -2px 0px 4px 0px $shadow;
  -moz-box-shadow: -2px 0px 4px 0px $shadow;
  box-shadow: -2px 0px 4px 0px $shadow;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 10px;
  left: 16px;
  height: 24px;
  width: 24px;
  background-color: $bg-light;
  border-radius: 50%;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: $dark;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 8px;
  left: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
