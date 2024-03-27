<script>
import { RouterView } from 'vue-router'
import BaseLayoutNavbar from "@/components/layout/base/Navbar.vue"
export default {
    name: "AuthLayout",
    components: {
        RouterView,
        BaseLayoutNavbar
    }
}
</script>
<template lang="pug">
    BaseLayoutNavbar
    main.base-layout
        RouterView
</template>
<style>
.base-layout {
    padding: 0 50px;
}
</style>