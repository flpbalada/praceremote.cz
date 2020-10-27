<template>
  <div>
    <form v-show="!submited" @submit="submit()">
      <h3>
        <font-awesome-icon :icon="['fas', 'paper-plane']" /> - Zažádat o tuto
        nabídku
      </h3>
      <Input
        id="0"
        name="fullName"
        type="text"
        label="Jméno a příjmení"
        placeholder="Martin Programátor"
        v-model="form.fullName"
        required
        :stateMessage="inputState.fullName"
        @input="promiseHandler(notEmptyStrState(form.fullName), 'fullName')"
      />

      <Input
        id="1"
        name="email"
        type="email"
        label="E-mail"
        placeholder="martin@email.cz"
        v-model="form.email"
        required
        :stateMessage="inputState.email"
        @input="promiseHandler(setEmailState(form.email), 'email')"
      />

      <Input
        id="2"
        name="tel"
        type="tel"
        label="Telefonní číslo"
        placeholder="+420 602 123 456"
        v-model="form.tel"
        required
        :stateMessage="inputState.tel"
        @input="promiseHandler(setPhoneNumberState(form.tel), 'tel')"
      />

      <Input
        id="3"
        name="linkedin"
        type="text"
        label="Odkaz na LinkedIn"
        placeholder="https://www.linkedin.com/in/martin-programator"
        v-model="form.linkedin"
        :stateMessage="inputState.linkedin"
        @input="promiseHandler(notEmptyStrState(form.linkedin), 'linkedin')"
      />

      <TextArea
        id="4"
        name="motivation"
        required
        label="Proč bych měl tuto práci dělat já?"
        placeholder=""
        v-model="form.motivation"
        :stateMessage="inputState.motivation"
        @input="promiseHandler(notEmptyStrState(form.motivation), 'motivation')"
      />

      <Button
        value="Odeslat žádost"
        type="submit"
        title="Odeslat žádost"
        block
        :disabled="submitDisabled()"
      />
    </form>
    <div v-show="submited" class="p-4 border-dark rounded">
      <h3>Úspěšně odesláno. 🎉</h3>
      <p class="lead mb-4">
        Odpoveď většinou příjde do pár dní do vaší e-mailové schránky.
      </p>
    </div>
  </div>
</template>
<script>
//components
import Button from "~/components/Button.vue";
import ButtonLink from "~/components/ButtonLink.vue";
import Input from "~/components/Input.vue";
import TextArea from "~/components/TextArea.vue";
import Radio from "~/components/Radio.vue";
import Link from "~/components/Link.vue";

import { mapActions } from "vuex";

import axios from "axios";

export default {
  components: {
    Button,
    ButtonLink,
    Input,
    Radio,
    Link,
    TextArea
  },
  props: {
    companySessionId: String,
    companyName: String,
    jobSessionId: String,
    positionName: String
  },
  data() {
    return {
      submited: false,

      inputState: {
        fullName: { state: null, message: "" },
        email: { state: null, message: "" },
        tel: { state: null, message: "" },
        linkedin: { state: null, message: "" },
        motivation: { state: null, message: "" }
      },
      form: {
        fullName: null,
        email: null,
        tel: null,
        linkedin: null,
        motivation: null
      }
    };
  },
  methods: {
    async submit() {
      event.preventDefault();
      //if sessions does not exist then create new one a save post data.
      //if session exists then renew its id and save post data.
      if (!this.$session.exists()) {
        this.$session.start();
      }

      this.$session.set("jobApply", this.companySessionId);

      let sessionId = this.$session.id().slice(5);

      let contact = await axios
        .post(
          "https://us-central1-praceremote.cloudfunctions.net/getContactById",
          {
            sessionId: this.jobSessionId
          }
        )
        .then(res => {
          return res.data;
        });

      let aplication = {
        companySessionId: this.companySessionId,
        companyName: this.companyName,
        companyEmail: contact.email,
        positionName: this.positionName,
        email: this.form.email,
        fullName: this.form.fullName,
        fullSlug: this.$router.currentRoute.fullPath,
        jobSessionId: this.jobSessionId,
        linkedin: this.form.linkedin,
        motivation: this.form.motivation,
        sessionId: this.$session.id().slice(5),
        tel: this.form.tel,
        uid: ""
      };

      let data = {
        uid: "nGIPYIktofPwEBj1rS3gisqGphS2",
        sessionId: sessionId,
        aplication: aplication
      };

      console.log(data);

      await axios
        .post(
          "https://us-central1-praceremote.cloudfunctions.net/createOrUpdateAplication",
          data
        )
        .then(res => {
          return res.data;
        });

      //send email to company
      this.$session.destroy();
      this.submited = true;
    },
    submitDisabled() {
      let fullName = this.inputState.fullName.state;
      let email = this.inputState.email.state;
      let tel = this.inputState.tel.state;
      let motivation = this.inputState.motivation.state;

      if (fullName && email && tel && motivation) {
        return false;
      }
      return true;
    },
    async promiseHandler(promise, inputKey) {
      let value = await promise;

      this.inputState[inputKey] = value;
    },
    ...mapActions({
      notEmptyStrState: "form/notEmptyStrState",
      setEmailState: "form/setEmailState",
      setPhoneNumberState: "form/setPhoneNumberState"
    })
  }
};
</script>
