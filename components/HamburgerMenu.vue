<template>
  <div>
    <div class="forDesktop">
      <slot> </slot>
    </div>
    <div class="forMobileTablet">
      <div :id="id" class="drawer" @click="close()">
        <div class="drawerHeader p-2" @click="close()">
          <span class="px-1 text-bold"> Zavřít </span>
          <font-awesome-icon :icon="['fas', 'times-circle']" />
        </div>
        <div class="p-6">
          <slot> </slot>
        </div>
      </div>
      <div @click="open()" class="drawerButton">
        <span class="p-1 text-bold">MENU</span>
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
    </div>
  </div>
</template>
<script>
import Link from "~/components/Link.vue";

export default {
  components: {
    Link
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    open() {
      document.getElementById(this.id).style.width = "20rem";
    },
    close() {
      document.getElementById(this.id).style.width = "0rem";
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/css/_variables.scss";

@media (max-width: $bp-desktop) {
  .forDesktop {
    display: none;
  }
  .forMobileTablet {
    display: block;
  }
}

@media (min-width: $bp-desktop) {
  .forDesktop {
    display: block;
  }
  .forMobileTablet {
    display: none;
  }
}

.boxDesktop {
  display: flex;
}

.drawerButton {
  cursor: pointer;
}

.drawerHeader {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
}

.drawer {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: $bg;
  overflow-x: hidden;
  transition: 0.2s;
  transition-timing-function: ease-in;
  -webkit-box-shadow: -8px 0px 32px 0px $shadow;
  -moz-box-shadow: -8px 0px 32px 0px $shadow;
  box-shadow: -8px 0px 32px 0px $shadow;
}

.drawer .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>
