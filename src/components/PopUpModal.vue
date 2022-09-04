<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PopUpModal",
  props: ["alertMessage"],
  mounted() {
    console.log(this.$props);
  },
});
</script>

<template>
  <div class="container alert alert-danger text-center">
    {{ alertMessage }}
  </div>
</template>
