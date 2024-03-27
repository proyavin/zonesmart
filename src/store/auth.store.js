import { createStore } from 'vuex'
import axios from '@/utils/axios.js'
import localstorage from '@/utils/localstorage.js'

export const ACCESS_NAME = "accessToken"
const REFRESH_NAME = "refreshToken"

const authStore = createStore({
    state: () => ({
        access: localstorage.get(ACCESS_NAME),
        refresh: localstorage.get(REFRESH_NAME)
    }),
    mutations: {
        SET_AUTH_USER(state, tokens) {
            const {access, refresh} = tokens
            state.access = access
            state.refresh = refresh
            localstorage.set(ACCESS_NAME, access)
            localstorage.set(REFRESH_NAME, refresh)
        },
        REMOVE_AUTH_USER(state) {
            state.access = null
            state.refresh = null
            localstorage.remove(ACCESS_NAME)
            localstorage.remove(REFRESH_NAME)
        }
    },
    actions: {
        async login(context, credentials) {
            const { data } = await axios.post('user/jwt/create/', {
                email: credentials?.email,
                password: credentials?.password
            })
            context.commit("SET_AUTH_USER", data)
        },
        logOut(context) {
            context.commit("REMOVE_AUTH_USER")
        }
    }
})

export default authStore