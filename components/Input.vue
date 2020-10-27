<template>
  <div class="my-4">
    <label :for="`${name}+${id}`" class="Label">
      {{ label }}
      <span v-if="required"> *</span>
      <span v-else> (nepovinné)</span>
    </label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :value="value"
      @input="updateValue($event.target.value)"
      :class="
        `px-2 Input ${
          stateMessage.state == true
            ? 'inputSuccess'
            : stateMessage.state == null
            ? ''
            : 'inputError'
        }`
      "
    />
    <div class="tooltip">
      {{ tooltip }}
    </div>
    <div v-if="stateMessage.state == false" class="inputErrorBox">
      {{ stateMessage.message }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    value: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: "Label"
    },
    type: {
      type: String,
      default: "text",
      validator: value =>
        ["text", "email", "tel", "password", "number", "url"].indexOf(value) !== -1
    },
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    },
    tooltip: String,
    stateMessage: {
      type: Object,
      default: () => {
        return {
          state: null,
          message: ""
        };
      }
    },
    min: Number,
    max: Number
  },
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";
.tooltip {
  padding-left: 1rem;
  padding-top: 0.25rem;
  font-size: 0.75rem;
}

.inputErrorBox {
  color: $error;
  padding-left: 1rem;
  padding-top: 0.25rem;
  font-size: 0.75rem;
}

.inputError {
  border: solid 1px $error !important;
}

.inputSuccess {
  border: solid 1px $success !important;
}

.Input {
  margin-top: 4px;
  background-color: $bg;
  height: $height;
  border: solid 1px $border;
  border-radius: $radius;
  width: 100%;
  font-family: "Neue Haas Grotesk Display Pro";
  font-weight: 500;
  font-size: 1rem;
}
.Input:hover {
  -webkit-box-shadow: 0 0 0.125rem $shadow;
  -moz-box-shadow: 0 0 0.125rem $shadow;
  box-shadow: 0 0 0.125rem $shadow;
}

.Input:focus {
  outline: none !important;
  -webkit-box-shadow: 0 0 0.125rem $dark;
  -moz-box-shadow: 0 0 0.125rem $dark;
  box-shadow: 0 0 0.125rem $dark;
}

.Input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $placeholder;
  opacity: 1; /* Firefox */
}

.Input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: $placeholder;
}

.Input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: $placeholder;
}
</style>
