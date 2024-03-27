<script>
import InputText from '@/components/forms/InputText.vue'
import AppButton from '@/components/forms/Button.vue'
import authStore from '@/store/auth.store.js'
export default {
    name: 'LoginForm',
    components: {
        AppButton,
        InputText
    },
    emits: ["loggedIn"],
    data() {
        return {
            email: 'candid8@zonesmart.ru',
            password: '4815162342',
            disabledForm: false,
        }
    },
    computed: {
        formValid() {
            return this.email && this.password
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.disabledForm = true
                await authStore.dispatch("login", {
                    password: this.password,
                    email: this.email
                })
                this.$emit("loggedIn")
            } catch (err) {
                alert(err)
            } finally {
                this.disabledForm = false
            }
        }
    }
}
</script>
<template lang="pug">
    .card.login-form
        form.login-form__inner(
            @submit.prevent="handleSubmit"
        )
            h1 Вход
            p.register-caption Нет аккаунта?&nbsp;
                a(href="#") Зарегистрироваться
            .login-form__fields
                InputText(
                    id="email"
                    v-model="email"
                    label="Email"
                    placeholder="yourmail@mail.ru"
                    type="email"
                    :disabled="disabledForm"
                )
                InputText(
                    id="password"
                    v-model="password"
                    label="Пароль"
                    placeholder="Ваш пароль"
                    type="password"
                    :disabled="disabledForm"
                )
                a(href="#") Забыли пароль?
            AppButton(
                :disabled="!formValid || disabledForm"
                type="submit"
            ) Войти
</template>
<style lang="scss">
.login-form {
    width: 430px;
    min-width: 430px;
    &__inner {
        h1 {
            margin: 0 0 20px 0;
        }
        p.register-caption {
            margin: 20px 0;
        }
    }
    &__fields {
        margin-bottom: 40px;
        .input-text {
            &.is--email {
                margin-bottom: 20px;
            }
            &.is--password {
                margin-bottom: 10px;
            }
        }
    }
}
</style>