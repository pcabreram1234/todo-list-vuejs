<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormVue",
  props: {
    title: String,
    description: String,
  },
  methods: {
    handleInput(e) {
      this.$emit(`update:${e.target.name}`, e.target.value);
    },
    addItem() {
      this.$emit("addItem", {
        title: this.title,
        description: this.description,
      });
      this.$refs.titleInput.focus();
    },
    cancel() {
      this.$emit("cancel", "");
    },
    submit(e) {
      e.preventDefault();
      this.addItem();
    },
  },
});
</script>

<template>
  <div class="col">
    <h3 class="blockquote text-center">Add new task</h3>
    <form class="form-control" @submit="submit">
      <div class="row mt-1 mb-1">
        <div class="form-floating">
          <input
            class="form-control text-center"
            placeholder="Title"
            type="text"
            name="title"
            maxlength="15"
            :value="title"
            @input="handleInput"
            ref="titleInput"
          />
          <label for="title" class="m-1">Title</label>
        </div>
      </div>
      <div class="row mt-1 mb-1">
        <div class="form-floating">
          <textarea
            class="form-control"
            name="description"
            placeholder="description"
            maxlength="50"
            style="height: 200px"
            @input="handleInput"
            :value="description"
          ></textarea>
          <label for="description" class="m-1">Description</label>
        </div>
      </div>

      <div class="row mt-1 mb-1 text-center">
        <div class="col">
          <button class="btn btn-primary" type="button" @click="addItem">
            <i class="bi bi-save"> Save</i>
          </button>
        </div>
        <div class="col">
          <button class="btn btn-secondary" type="button" @click="cancel">
            <i class="bi bi-x-circle"> Cancel</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
body {
  background-color: var(--bs-body-bg);
}
</style>
