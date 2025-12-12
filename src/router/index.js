import {createRouter, createWebHistory} from "vue-router";
import DashboardPage from "../pages/DashboardPage.vue";
import UsersPage from "../pages/Users/UsersPage.vue";
import CreateUserPage from "../pages/Users/CreateUserPage.vue";
import LoginPage from "../pages/Authenticate/LoginPage.vue";
import {AuthService} from "../stores/AuthService.js";

const routes = [
    {path: '/login', component: LoginPage, meta: {requireAuth: false}, name: 'Login'},
    {path: '/users', component: UsersPage, meta: {requireAuth: true}, name: 'UserIndex'},
    {path: '/user/new', component: CreateUserPage, meta: {requireAuth: true}, name: 'UserCreate'},
    {path: '/', component: DashboardPage, meta: {requireAuth: true}, name: 'Dashboard'},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    const authService = AuthService()
    if (to.meta.requireAuth && !authService.isAuthenticated)
        return {
            name: 'Login',
            query: {
                redirect: to.fullPath
            }
        }

    if (authService.isAuthenticated && to.name === 'Login')
        return {
            name: 'Dashboard'
        }
});
export default router