import { reactive } from "vue";

import ModalView from "./src/ModalView.vue";

export default {
  install: (app) => {
    app.component("ModalView", ModalView);
  },
};
