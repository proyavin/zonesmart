<script>
import { RouterView } from 'vue-router'
import AuthLayoutNavbar from '@/components/layout/auth/Navbar.vue'
export default {
    name: "AuthLayout",
    components: {
        RouterView,
        AuthLayoutNavbar
    }
}
</script>
<template lang="pug">
    AuthLayoutNavbar
    main.auth-layout
        RouterView
</template>
<style lang="scss">
.auth-layout {
    padding-top: 130px;
}
</style>