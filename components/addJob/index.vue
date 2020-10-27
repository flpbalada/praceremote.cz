<template>
  <div>
    <form @submit="submit" v-if="showForm">
      <h3>
        <font-awesome-icon :icon="['fas', 'briefcase']" /> - Detail pracovní
        pozice
      </h3>
      <Input
        id="0"
        name="jobDetailTitle"
        type="text"
        required
        label="Název pracovní pozice"
        placeholder="Product designer"
        v-model="post.jobDetail.title"
        :stateMessage="notEmptyStrState(post.jobDetail.title)"
      />
      <Wysiwyg
        label="Popis pracovní pozice"
        required
        :stateMessage="notEmptyStrState(post.jobDetail.description)"
        v-model="post.jobDetail.description"
      />
      <Radio
        id="2"
        label="Pracovní úvazek"
        name="jobDetailCommitment"
        required
        :radioButtons="jobDetailCommitmentObj"
        v-model="post.jobDetail.commitment"
      />
      <Radio
        id="3"
        label="Kategorie"
        name="jobDetailCategory"
        required
        :radioButtons="jobDetailCategoryObj"
        v-model="post.jobDetail.category"
      />

      <Radio
        id="4"
        label="Region"
        name="jobDetailRegion"
        required
        :radioButtons="jobDetailRegionObj"
        v-model="post.jobDetail.region"
      />

      <h3 class="mt-4">
        <font-awesome-icon :icon="['fa', 'building']" /> - Detail firmy
      </h3>
      <Input
        id="1"
        name="companyName"
        type="text"
        required
        label="Název Firmy"
        placeholder="PráceRemote.cz"
        @input="value => setCompany({ key: 'name', value: value })"
        v-model="post.company.name"
        :stateMessage="notEmptyStrState(post.company.name)"
      />
      <Wysiwyg
        label="Popis firmy"
        required
        :stateMessage="notEmptyStrState(post.jobDetail.description)"
        v-model="post.company.description"
      />
      <Input
        id="2"
        name="companyUrl"
        type="text"
        label="Webová stránka"
        placeholder="www.praceremote.cz"
        v-model="post.company.websiteUrl"
        required
        :stateMessage="notEmptyStrState(post.company.websiteUrl)"
      />

      <Input
        id="3"
        name="companyContactName"
        type="text"
        required
        label="Jméno a příjmení"
        placeholder="Filip Balada"
        v-model="post.company.contact.name"
        :stateMessage="notEmptyStrState(post.company.contact.name)"
        tooltip="Abychom věděli jak vás oslovit. Vaše jméno bude uživatelům portálu zakryto."
      />
      <Input
        id="4"
        name="companyContactTel"
        type="text"
        required
        label="Telefonní číslo"
        placeholder="602 123 456"
        v-model="post.company.contact.tel"
        :stateMessage="setPhoneNumberState(this.post.company.contact.tel)"
        tooltip="Abychom vás mohli kontaktovat v případě, že bude v inzerátu chyba. Telefonní číslo bude uživatelům portálu zakryto."
      />
      <Input
        id="5"
        name="companyContactEmail"
        type="text"
        required
        label="E-mail"
        placeholder="info@praceremote.cz"
        v-model="post.company.contact.email"
        :stateMessage="setEmailState(this.post.company.contact.email)"
        tooltip="Na e-mail vám budou zasílány žádosti o vaši pracovní pozici. "
      />
      <Button
        value="Odeslat nabídku ke schválení"
        type="submit"
        title="Odeslat nabídku ke schválení"
        block
        :disabled="!formDatasValidator(post)"
      />
    </form>
    <div v-if="showForm == false">
      <h2>
        Váš poslední inzerát byl úspěšně odeslán 🎉
      </h2>
      <p class="lead">
        Inzerát zkontrolujeme do jednoho pracovního dne a zveřejníme ho na našem
        portále, případně se vám ozveme telefonicky pro doupravení inzerátu.
      </p>
      <div v-html="$md.render(`${getPostInMD[0]}`)" class="md"></div>
      <div class="bordered rounded p-1 mb-2">
        <div v-html="getPostInMD[1]" class="md"></div>
      </div>
      <div v-html="$md.render(`${getPostInMD[2]}`)" class="md"></div>
      <div class="bordered rounded p-1 mb-2">
        <div v-html="getPostInMD[3]" class="md"></div>
      </div>
      <div v-html="$md.render(`${getPostInMD[4]}`)" class="md"></div>
      <Button
        value="Přidat nový inzerát"
        type="button"
        block
        title="Přidat nový inzerát"
        @click.native="
          removeSessionShowForm();
          updatePost();
        "
      />
      <div class="text-center p-2">
        <Link href="/" value="Přejít na hlavní stránku" />
      </div>
    </div>
  </div>
</template>
<script>
//components
import Button from "~/components/Button.vue";
import Input from "~/components/Input.vue";
import TextArea from "~/components/TextArea.vue";
import Radio from "~/components/Radio.vue";
import Link from "~/components/Link.vue";
import Card from "~/components/Card.vue";
import Wysiwyg from "~/components/Wysiwyg.vue";

import axios from "axios";

//methods
import { notEmptyStrState } from "./methods/notEmptyStrState.js";
import { formDatasValidator } from "./methods/formDatasValidator.js";
import { setPhoneNumberState } from "./methods/setPhoneNumberState.js";
import { setEmailState } from "./methods/setEmailState.js";
import { submit } from "./methods/submit.js";
import { updateFormDataShowForm } from "./methods/updateFormDataShowForm.js";
import { removeSessionShowForm } from "./methods/removeSessionShowForm.js";
import { updatePost } from "./methods/updatePost.js";
import { emailValidator } from "./methods/emailValidator.js"
import { phoneNumberValidator } from "./methods/phoneNumberValidator.js"


//computed
import { jobDetailCategoryObj } from "./computed/jobDetailCategoryObj.js";
import { jobDetailCommitmentObj } from "./computed/jobDetailCommitmentObj.js";
import { jobDetailRegionObj } from "./computed/jobDetailRegionObj.js";
import { getPostInMD } from "./computed/getPostInMD.js";

//store
import { mapActions } from "vuex";

export default {
  components: {
    TextArea,
    Button,
    Input,
    Radio,
    Link,
    Card,
    Wysiwyg
  },

  data() {
    return {
      submitDisabled: true,
      showForm: null,
      post: {
        jobDetail: {
          title: "",
          description: "",
          commitment: "0",
          category: "0",
          region: "0"
        },
        company: {
          name: "",
          description: "",
          websiteUrl: "",
          contact: {
            name: "",
            tel: "",
            email: ""
          },
          jobs: []
        },
        published: false
      }
    };
  },
  mounted() {
    if (this.$session) {
      if (this.$session.exists() && this.$session.has("lastSubmitedPostData")) {
        this.showForm = false;
      } else {
        this.showForm = true;
      }
    } else {
      this.showForm = true;
    }
  },

  methods: {
    notEmptyStrState,
    formDatasValidator,
    submit,
    setPhoneNumberState,
    setEmailState,
    removeSessionShowForm,
    updateFormDataShowForm,
    updatePost,

    ...mapActions({
      setJobDetail: "post/setJobDetail",
      getJobDetail: "post/getJobDetail",

      setCompany: "post/setCompany",
      getCompany: "post/getCompany",

      reset: "post/reset",
      update: "post/update"
    })
  },

  computed: {
    jobDetailRegionObj,
    jobDetailCategoryObj,
    jobDetailCommitmentObj,
    getPostInMD
  }
};
</script>
