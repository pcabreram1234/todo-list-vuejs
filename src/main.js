import { createApp } from "vue";
/* Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.css";
/* Bootstrap Icons */
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
/* Bootstrap Js */
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "../src/style.css"

import App from "./App.vue";
const app = createApp(App);
app.mount("#app");
