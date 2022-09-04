<script>
import { defineComponent } from "vue";
import FormVue from "./components/Form.vue";
import ItemsListVue from "./components/ItemsList.vue";
import EditForm from "./components/EditForm.vue";
import PopUpModalVue from "./components/PopUpModal.vue";

export default defineComponent({
  components: {
    FormVue,
    ItemsListVue,
    EditForm,
    PopUpModalVue,
  },
  data() {
    return {
      dataForm: { id: 0, title: "", description: "" },
      dataSaved: [],
      itemToEdit: { id: 0, title: "", description: "" },
      dataToShow: [],
      showAlert: false,
      taskDuplicate: false,
      alertMessage: [
        "The title or the description field can not be empty",
        "Already exist a task with the title you attempt to save",
      ],
    };
  },
  methods: {
    addItem({ title, description }) {
      if (title !== "" && description !== "") {
        const searchedTitle = this.isTaskDuplicate(title);
        if (searchedTitle.length === 0) {
          this.$data.dataForm.id++;
          this.$data.dataSaved.push({
            id: this.$data.dataForm.id,
            title,
            description,
          });
          this.cancel();
          this.showAlert = false;
          this.taskDuplicate = false;
        } else {
          this.showAlert = true;
          this.taskDuplicate = true;
        }
      } else {
        this.showAlert = true;
      }
      this.setDataToShow();
    },
    cancel() {
      this.$data.dataForm.title = "";
      this.$data.dataForm.description = "";
      this.showAlert = false;
    },
    deleteItem(id) {
      this.$data.dataSaved = this.$data.dataSaved.filter(
        (item) => item.id !== id
      );
      this.setDataToShow();
    },
    setItemToEdition({ id, title, description }) {
      this.itemToEdit.description = description;
      this.itemToEdit.id = id;
      this.itemToEdit.title = title;
      this.showModal = true;
    },
    editItem({ id, title, description }) {
      this.dataSaved.forEach((item) => {
        if (item.id === id) {
          item.title = title;
          item.description = description;
        }
      });
      this.setDataToShow();
    },
    searchItem(title) {
      if (title) {
        this.dataToShow = this.dataSaved.filter(
          (item) => item.title.toLowerCase().indexOf(title) !== -1
        );
      } else {
        this.setDataToShow();
        console.log(this.dataToShow);
      }
    },
    setDataToShow() {
      this.dataToShow = this.dataSaved;
    },
    isTaskDuplicate(title) {
      if (this.$data.dataSaved !== []) {
        const result = this.$data.dataSaved.filter(
          (item) => item.title === title
        );
        return result;
      }
    },
  },
});
</script>

<template>
  <figure class="text-center mt-2">
    <blockquote class="blockquote">
      <p>PTL - Pocho's Todo List</p>
    </blockquote>
  </figure>
  <div class="row p-4">
    <template v-if="showAlert">
      <PopUpModalVue
        :alertMessage="taskDuplicate ? alertMessage[1] : alertMessage[0]"
      />
    </template>
    <FormVue
      v-model:title="dataForm.title"
      v-model:description="dataForm.description"
      @cancel="cancel"
      @addItem="addItem"
    />
    <ItemsListVue
      :items="dataToShow"
      @deleteItem="deleteItem"
      @setItemToEdition="setItemToEdition"
      @searchItem="searchItem"
    />
  </div>
  <EditForm :itemToEdit="itemToEdit" @editItem="editItem" />
</template>
