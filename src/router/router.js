import { createRouter, createWebHashHistory } from "vue-router";
import Services from "@/pages/Services.vue";
import UserForm from "@/components/UserForm.vue";
import App from "@/App.vue";

const routes = [
  { path: "/", component: App },
  { path: "/services", component: Services },
  { path: "/contact", component: UserForm },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth", offset: { top: 200 } };
    }
    return { top: 0 };
  },
});

export default router;
