<template>
  <div>
    <label>
      {{ label }}
      <span v-if="required"> *</span>
      <span v-else> (nepovinné)</span>
    </label>
    <client-only>
      <editor-menu-bar :editor="editor" v-slot="{ commands }" class="py-2">
        <div class="editor-menu">
          <div>
            <font-awesome-icon
              :icon="['fas', 'heading']"
              @click="commands.heading({ level: 3 })"
              class="mx-1"
            />
            <font-awesome-icon
              :icon="['fas', 'list']"
              @click="commands.bullet_list"
              class="mx-1"
            />
            <font-awesome-icon
              :icon="['fas', 'bold']"
              @click="commands.bold"
              class="mx-1"
            />
            <font-awesome-icon
              :icon="['fas', 'underline']"
              @click="commands.underline"
              class="mx-1"
            />

            <font-awesome-icon
              :icon="['fas', 'italic']"
              @click="commands.italic"
              class="mx-1"
            />
          </div>

          <font-awesome-icon
            :icon="['fas', 'undo']"
            @click="commands.undo"
            class="mx-1"
          />
        </div>
      </editor-menu-bar>
      <editor-content
        :editor="editor"
        useBuiltInExtensions
        :class="
          `editor ${
            stateMessage.state == true
              ? 'textareaSuccess'
              : stateMessage.state == null
              ? ''
              : 'textareaError'
          }`
        "
        :onUpdate="updateValue()"
      />
    </client-only>
    <div class="tooltip">
      {{ tooltip }}
    </div>
    <div v-if="stateMessage.state == false" class="textareaErrorBox">
      {{ stateMessage.message }}
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";

import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";

export default {
  components: {
    EditorMenuBar,
    EditorContent
  },
  props: {
    label: {
      type: String,
      default: "Label"
    },
    required: {
      type: Boolean,
      default: false
    },
    stateMessage: {
      type: Object,
      default: () => {
        return {
          state: null,
          message: ""
        };
      }
    },
    tooltip: String
  },

  created() {
    if (process.client) {
      this.editor = new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content:
          "<h3>Nadpis</h3><p>Dlouhý popisek na <br>na více řádků při <br>stisknutí CTRL + ENTER<br></p><p><strong>Tučné písmo díky ctrl+b <br><u>Podtržené</u><br><em>Se sklonem</em></strong></p><ul><li><p>Odrážky</p></li><li><p>pro lepší</p></li><li><p>čtení</p></li></ul><p>Díky ctlr + z můžu vrátit akci zpět</p>"
      });
    }
  },
  data() {
    return {
      editor: null
    };
  },
  methods: {
    updateValue: function() {
      if (this.editor) {
        this.$emit("input", this.editor.getHTML());
      }
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>
<style lang="scss">
@import "~/assets/css/_variables.scss";
.ProseMirror:focus {
  outline: none;
}
</style>
<style lang="scss" scoped>
@import "~/assets/css/_variables.scss";

.editor-menu {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.editor-menu svg {
  cursor: pointer;
}

.editor {
  background: $bg;
  border-radius: $radius;
  border: solid 1px $border;
  padding: 1rem;
}

label {
  margin-bottom: 4px;
}

.textareaError {
  border: solid 1px $error !important;
}

.textareaSuccess {
  border: solid 1px $success !important;
}
</style>
