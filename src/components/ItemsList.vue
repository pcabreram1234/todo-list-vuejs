<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemsListVue",
  props: { items: Array },
  data() {
    return {
      searchedValue: "",
    };
  },
  methods: {
    deleteItem(id) {
      console.log(id);
      this.$emit("deleteItem", id);
    },
    setItemToEdit(item) {
      this.$emit("setItemToEdition", item);
    },
    saveItem() {
      console.log("Item saved");
    },
    searchItem(e) {
      const dataInput = e.target.value;
      // console.log(this.$data.searchedValue);
      this.$emit("searchItem", dataInput.toString());
    },
  },
});
</script>

<template>
  <div class="col">
    <h3 class="blockquote text-center">Tasks added</h3>
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">
        <i class="bi bi-search" />
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Todo to search"
        aria-label="Todo"
        aria-describedby="basic-addon1"
        @input="searchItem"
      />
    </div>
    <div class="mt-3">
      <div
        v-for="(item, i) of items"
        class="card"
        style="width: 18rem"
        key="item.id"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ item.title }}
          </h5>
          <p class="card-text">{{ item.description }}</p>

          <div class="col d-flex justify-content-evenly">
            <button
              class="btn btn-outline-info"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#EditFormModal"
              @click="setItemToEdit(item)"
            >
              <i class="bi bi-pen-fill" color="red">Edit</i>
            </button>
            <button
              class="btn btn-outline-danger"
              @click="
                {
                  deleteItem(item.id);
                }
              "
            >
              <i class="bi bi-trash-fill" color="blue">Delete</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
