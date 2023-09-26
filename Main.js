import {createApp} from "vue";
import App from "./App.vue";
import {createRounter, createWebHasHistory} from "vue-router";

const router = VueRouter.createRounter({
    history:VueRouter.createWebHasHistory(),
    routes,
});
App.use(router);
createApp(App).mount("App");