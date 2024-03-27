<script>
import LogoImage from "@/assets/images/logo.svg"
import WhatsAppIcon from "@/assets/icons/social/whatsapp.svg"
import TelegramIcon from "@/assets/icons/social/telegram.svg"
export default {
    name: "AuthLayoutNavbar",
    components: {
        LogoImage,
        WhatsAppIcon,
        TelegramIcon
    }
}
</script>
<template lang="pug">
    header.auth-navbar
        .auth-navbar__inner
            .auth-navbar__left
                LogoImage
            .auth-navbar__right
                ul
                    li Поддержка
                    li
                        a(href="#")
                            WhatsAppIcon
                    li
                        a(href="#")
                            TelegramIcon
</template>
<style lang="scss">
.auth-navbar {
    &__inner {
        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__right {
        ul {
            display: flex;
            align-items: center;
            li {
                margin-left: 10px;
                color: #999999;
            }
        }
    }
}
</style>