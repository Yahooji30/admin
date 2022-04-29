import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";
import router from "./router/index";

createApp(App).use(router).mount("#app");
