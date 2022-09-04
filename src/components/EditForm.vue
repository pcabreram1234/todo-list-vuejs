<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditForm",
  props: { itemToEdit: Object },
  methods: {
    saveItem() {
      console.log("guardado");
      this.$emit("editItem", this.$props.itemToEdit);
      this.$refs.closeModal.click();
    },
    cancel() {
      console.log("Cancelado");
    },
  },

  updated() {
    console.log(this.$props);
    console.log("Datos actualizados");
  },
});
</script>

<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
    id="EditFormModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Edit Task</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row mt-1 mb-1">
            <div class="form-floating">
              <input
                class="form-control text-center"
                type="text"
                name="title"
                placeholder="Title"
                maxlength="15"
                v-model="itemToEdit.title"
              />
              <label for="title" class="m-1">Title</label>
            </div>
          </div>
          <div class="row mt-1 mb-1">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="description"
                name="description"
                style="height: 200px"
                v-model="itemToEdit.description"
                maxlength="50"
              ></textarea>
              <label for="title" class="m-1">Description</label>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-primary" type="button" @click="saveItem">
            <i class="bi bi-save"></i>
            Save
          </button>
          <button
            class="btn btn-secondary"
            type="button"
            @click="cancel"
            data-bs-dismiss="modal"
            ref="closeModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
