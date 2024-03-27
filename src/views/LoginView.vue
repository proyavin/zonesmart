<script>
import LoginForm from '@/components/login/LoginForm.vue'
export default {
    name: "LoginView",
    components: {
        LoginForm
    },
    methods: {
        handleLogin() {
            console.log("login handle")
            this.$router.push({ name: 'home' })
        }
    }
}
</script>
<template lang="pug">
    .login-form__container
        .login-form__container__inner
            LoginForm(@logged-in="handleLogin")
</template>
<style lang="scss">
.login-form__container {
    &__inner {
        display: flex;
        justify-content: center;
    }
}
</style>