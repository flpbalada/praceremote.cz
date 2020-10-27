<template>
  <div class="my-4">
    <label :for="`${name}+${id}`">
      {{ label }}
      <span v-if="required"> *</span>
      <span v-else> (nepovinné)</span>
    </label>
    <textarea
      :id="`${name}+${id}`"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event.target.value)"
      :class="
        `p-2 ${
          stateMessage.state == true
            ? 'textareaSuccess'
            : stateMessage.state == null
            ? ''
            : 'textareaError'
        }`
      "
    >
    </textarea>
    <div class="tooltip">
      {{ tooltip }}
    </div>
    <div v-if="stateMessage.state == false" class="textareaErrorBox">
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
    placeholder: String,
    stateMessage: {
      type: Object,
      default: () => {
        return {
          state: null,
          message: ""
        };
      }
    },
    tooltip: String,
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    markdown: () => [
        {
          str: "\n# ",
          carretPositionReverse: 0,
          icon: ["fas", "heading"]
        },
        {
          str: "****",
          carretPositionReverse: 2,
          icon: ["fas", "bold"]
        },
        {
          str: "**",
          carretPositionReverse: 1,
          icon: ["fas", "italic"]
        }
      ]
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    setCaretPosition(el, position) {
      el.focus();1
      el.setSelectionRange(position, position);
    },
    getCaretPosition(el) {
      el.focus();
      el.getSelectionRange
    },
    AddStringAndSetCarretPosition(str, carretPositionReverse) {
      let el = document.getElementById(`${this.name}+${this.id}`);
      if(el.value.length == 0 && str[0] == '\n'){
        str = str.substring(1);
      }

      el.value = `${el.value}${str}`;

      this.$emit("input", el.value);
      this.setCaretPosition(el, el.value.length - carretPositionReverse);
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/css/_variables.scss";

.markdownIcon{
  cursor: pointer;
}

.tooltip {
  padding-left: 1rem;
  padding-top: 0.25rem;
  font-size: 0.75rem;
}

.textareaErrorBox {
  color: $error;
  padding-left: 1rem;
  padding-top: 0.25rem;
  font-size: 0.75rem;
}

.textareaError {
  border: solid 1px $error !important;
}

.textareaSuccess {
  border: solid 1px $success !important;
}

label {
  margin-bottom: 4px;
}

textarea {
  position: relative;
  margin-top: 4px;
  background-color: $bg;
  height: $height;
  border: solid 1px $border;
  border-radius: $radius;
  width: 100%;
  min-height: 20rem;
  font-family: "Neue Haas Grotesk Display Pro";
  font-weight: 500;
  font-size: 1rem;
  resize: vertical;
}
textarea:hover {
  -webkit-box-shadow: 0 0 0.125rem $dark;
  -moz-box-shadow: 0 0 0.125rem $dark;
  box-shadow: 0 0 0.125rem $dark;
}

textarea:focus {
  outline: none !important;
  -webkit-box-shadow: 0 0 0.125rem $dark;
  -moz-box-shadow: 0 0 0.125rem $dark;
  box-shadow: 0 0 0.125rem $dark;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $placeholder;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: $placeholder;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: $placeholder;
}
</style>
