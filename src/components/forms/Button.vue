<script>
export default {
    name: "AppButton",
    props: {
        disabled: {
            required: false,
            type: Boolean,
            default: false
        },
        type: {
            required: false,
            type: String,
            default: "button"
        }
    }
}
</script>
<template lang="pug">
    button(
        :disabled="disabled"
        :type="type"
    )
        slot
</template>
<style lang="scss" scoped>
button {
    padding: 17px 30px;
    cursor: pointer;
    border: none;
    background: #2ED2BA;
    border-radius: 6px;
    font-weight: 600;
    font-size: 15px;
    line-height: 15px;
    color: #fff;
    outline: none;
    transition: .25s all ease;
    height: 50px;
    &:hover {
        background: darken(#2ED2BA, 5);
    }
    &:active {
        background: darken(#2ED2BA, 10);
    }
    &:disabled {
        background: #F2F1F3;
        cursor: default;
        color: #CECECF;
    }
}
</style>