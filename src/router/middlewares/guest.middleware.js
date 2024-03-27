import authStore from '@/store/auth.store.js'

export default async function(to, from, next) {
    if (!authStore.state.access) {
        return next()
    }

    return next({
        name: "home"
    })
}