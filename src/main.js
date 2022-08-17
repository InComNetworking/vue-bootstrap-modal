import { createApp } from "vue";

import App from "./App.vue";

window.APP = createApp(App);

import ModalComponent from "../index";

window.APP.use(ModalComponent);

window.APP.mount("#app");
