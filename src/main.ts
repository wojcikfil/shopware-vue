import { createApp } from "vue";

import App from "@/App.vue";
import { createPinia } from "pinia";
import { router } from "@/router";

import "bootstrap/scss/bootstrap.scss";

const app = createApp(App).use(router);
const pinia = createPinia();
app.use(pinia);
router.isReady().then(() => app.mount("#app"));

import "bootstrap/dist/js/bootstrap.js";
