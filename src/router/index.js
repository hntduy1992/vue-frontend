import {createMemoryHistory, createRouter} from "vue-router";
import DashboardPage from "../pages/DashboardPage.vue";
import UsersPage from "../pages/Users/UsersPage.vue";
import CreateUserPage from "../pages/Users/CreateUserPage.vue";

const routes = [
    {path: '/', component: DashboardPage},
    {path: '/users', component: UsersPage},
    {path: '/user/new', component: CreateUserPage},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})