import { createStore } from 'vuex'
import axios from '@/utils/axios.js'
import localstorage from '@/utils/localstorage.js'
import { ACCESS_NAME } from '@/store/auth.store.js'

const productsStore = createStore({
    state: () => ({
        products: []
    }),
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        }
    },
    actions: {
        async getProducts(context) {
            const { data } = await axios.get('product/', {
                headers: {
                    Authorization: `JWT ${localstorage.get(ACCESS_NAME)}`
                }
            })

            context.commit("SET_PRODUCTS", data?.results || [])
        }
    }
})

export default productsStore