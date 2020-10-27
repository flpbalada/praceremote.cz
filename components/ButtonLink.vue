<template>
  <nuxt-link :to="href" prefetch :title="value" class="buttonLink my-2"> 
    {{ value }}
  </nuxt-link>
</template>
<script>
export default {
  props: {
    href: String,
    value: String
  }
};
</script>
<style lang="scss" >
@import "~/assets/css/_variables.scss";

.buttonLink {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;

  text-decoration: none;
  color: initial;
}

.buttonLink {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  height: $height;
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
  border: none;
  border-radius: $radius;
  width: 100%;
  color: white;
  font-family: "Neue Haas Grotesk Display Pro";
  font-size: 1rem;
}

.buttonLink:hover {
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

.buttonLink:active {
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

.buttonLink:focus {
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
</style>
