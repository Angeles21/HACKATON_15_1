import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/singers/:id",
		name: "Singer",
		component: () => import(/* webpackChunkName: "about" */ "../views/Singer.vue"),
	},
	{
		path: "/singers",
		name: "Singers",
		component: () => import(/* webpackChunkName: "about" */ "../views/Singers.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
