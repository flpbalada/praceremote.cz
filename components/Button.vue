<template>
  <div class="buttonBoarder">
    <button
      :title="title"
      :disabled="disabled"
      :type="type"
      :outline="outline"
      :class="`my-2 ${outline ? 'outline' : ''} ${block ? 'buttonBlock' : ''}`"
    >
      {{ value }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
    title: String,
    outline: Boolean,
    disabled: Boolean,
    block: Boolean,
    type: {
      type: String,
      default: "button",
      validator: value => ["button", "submit", "reset"].indexOf(value) !== -1
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/css/_variables.scss";

.buttonBlock {
  width: 100%;
}

button {
  position: relative;
  height: $height;
  background: darken($secondary, 15%);
  background: -moz-linear-gradient(
    90deg,
    darken($secondary, 5%),
    darken($secondary, 15%)
  );
  background: -webkit-linear-gradient( 

    darken($secondary, 15%)
  );
  background: linear-gradient(
    90deg,
    darken($secondary, 5%),
    darken($secondary, 15%)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= darken($secondary, 5%),endColorstr=darken($secondary, 15%),GradientType=1);
  border: none;
  border-radius: $radius;
  padding: 0 1rem;
  color: white;
  font-family: "Neue Haas Grotesk Display Pro";
  font-size: 1rem;
}

.outline {
  background: none !important;
  border: solid 1px $dark !important;
  color: $dark;
}

.outline:hover {
  background: $bg !important;
}

button:hover {
  background-image: linear-gradient(
    darken($secondary, 5%),
    darken($secondary, 15%)
  );
  background: darken($secondary, 15%);
  background: -moz-linear-gradient(
    90deg,
    darken($secondary, 5%),
    darken($secondary, 15%)
  );
  background: -webkit-linear-gradient(
    90deg,
    darken($secondary, 5%),
    darken($secondary, 15%)
  );
  background: linear-gradient(
    90deg,
    darken($secondary, 5%),
    darken($secondary, 15%)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= darken($secondary, 5%),endColorstr=darken($secondary, 15%),GradientType=1);

  -webkit-box-shadow: 0 0 0.125rem $light;
  -moz-box-shadow: 0 0 0.125rem $light;
  box-shadow: 0 0 0.125rem $light;
  cursor: pointer;
}

button:active {
  background: darken($secondary, 15%);
  background: -moz-linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  background: -webkit-linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  background: linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= darken($secondary, 15%),endColorstr=darken($secondary, 20%),GradientType=1);
  outline: none !important;
}

button:focus {
  background: darken($secondary, 15%);
  background: -moz-linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  background: -webkit-linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  background: linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= darken($secondary, 15%),endColorstr=darken($secondary, 20%),GradientType=1);
  outline: none !important;
}

button:disabled {
  opacity: 0.32;
  background: darken($secondary, 15%);
  background: -moz-linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  background: -webkit-linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  background: linear-gradient(
    90deg,
    darken($secondary, 15%),
    darken($secondary, 20%)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= darken($secondary, 15%),endColorstr=darken($secondary, 20%),GradientType=1);
  cursor: not-allowed;
}
</style>
