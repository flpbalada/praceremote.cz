<template>
  <div>
    <form @submit="submit" v-show="!form.submited">
      <component
        v-for="item in form.inputs"
        :key="item.id"
        :is="item.component"
        :id="item.id"
        :name="item.name"
        :type="item.type"
        :required="item.required"
        :label="item.label"
        :placeholder="item.placeholder"
        :radioButtons="item.radioButtons"
        :tooltip="item.tooltip"
        v-model="item.data"
        @input="item.handleEvent"
        :stateMessage="item.getErrorMessage ? item.getErrorMessage() : null"
      />

      <Button
        value="Pokračovat na porovnání"
        type="submit"
        title="Pokračovat na porovnání"
        block
        :disabled="buttonDisabled()"
      />
    </form>
    <div v-show="form.submited && formSubmitedOnSession()" class="p-4 border-dark rounded">
      <h3>Úspěšně odesláno. 🎉</h3>
      <p class="lead mb-4">
        Informace o tom, zda berete více nebo méně jsem vám zaslali na e-mail.
      </p>
      <ButtonLink href="/" value="Přejít na hlavní stránku" />
      <Button
        value="Upravit a odeslat znovu"
        type="button"
        title="Upravit a odeslat znovu"
        outline
        block
        @click.native="updateFormDataShowForm()"
      />
    </div>
  </div>
</template>
<script>
//components
import Button from "~/components/Button.vue";
import ButtonLink from "~/components/ButtonLink.vue";
import Input from "~/components/Input.vue";
import Radio from "~/components/Radio.vue";
import Link from "~/components/Link.vue";

//methods
import { submit } from "./methods/submit.js";
import { buttonDisabled } from "./methods/buttonDisabled.js";

import { data } from "./data.js";

export default {
  components: {
    Button,
    ButtonLink,
    Input,
    Radio,
    Link
  },
  data,
  methods: {
    submit,
    buttonDisabled,
    formSubmitedOnSession() {
      return this.$session
        ? this.$session.has("submitedCompareIncomeData")
        : false;
    },
    updateFormDataShowForm() {
      this.$session.remove("submitedCompareIncomeData")
      this.form.submited = false;
    }
  }
};
</script>
