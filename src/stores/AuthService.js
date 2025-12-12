import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const AuthService = defineStore('auth', () => {
    const key = import.meta.env.TOKEN_KEY
    const loading = ref(false)
    const isAuthenticated = computed(() => {
        //has key
        const token = getToken()
        return token !== null
        //check expire
    })

    function getToken() {
        return localStorage.getItem(key) ?? null
    }

    function login(username,password){

    }

    return {
        loading,
        isAuthenticated,
        login
    }
})