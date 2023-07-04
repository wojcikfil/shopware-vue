import { createRouter, createWebHistory } from "vue-router";

const baseUrl = import.meta.env.VITE_BUILD_ADDRESS;

export const routes = [
  {
    path: `${baseUrl}/`,
    component: () => import("@/layouts/ProductList.vue"),
    children: [
      {
        path: "",
        name: "ProductList",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
