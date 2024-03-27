<script>
import EyeHiddenIcon from "@/assets/icons/eye-hidden.svg"
export default {
    name: "InputText",
    components: {
        EyeHiddenIcon
    },
    props: {
        id: {
            required: true,
            type: String  
        },
        label: {
            required: false,
            type: String,
            default: ''
        },
        placeholder: {
            required: false,
            type: String,
            default: ''
        },
        type: {
            required: false,
            type: String,
            default: "text"
        },
        modelValue: {
            required: false,
            type: String || undefined,
            default: undefined
        },
        value: {
            required: false,
            type: String || undefined,
            default: undefined
        },
        disabled: {
            required: false,
            type: Boolean,
            default: false
        },
        modifiers: {
            required: false,
            type: Array,
            default: () => []
        }
    },
    emits: ["update:modelValue"],
    data() {
        return {
            passwordVisible: false,
            modelValueRef: this.modelValue || this.value,
        }
    },
    computed: {
        type_ref() {
            if (this.type === "password") {
                return this.passwordVisible ? "text" : this.type
            }
            return this.type
        },
        classes() {
            return [
                `is--${this.id}`,
                ...this.modifiers
            ]
        }
    },
    methods: {
        togglePasswordType() {
            this.passwordVisible = !this.passwordVisible
        },
        handleChange() {
            this.$emit("update:modelValue", this.modelValueRef)
        }
    }
}
</script>
<template lang="pug">
    .input-text(:class="classes")
        label.caption(
            v-if="label"
        ) {{ label }}
        .input-text__inner
            input(
                :id="id",
                v-model="modelValueRef",
                :name="id"
                :placeholder="placeholder"
                :type="type_ref"
                :disabled="disabled"
                @input="handleChange"
            )
            button.password-visibility-button(
                v-if="type === 'password'"
                type="button"
                @click="togglePasswordType"
            )
                EyeHiddenIcon
</template>
<style lang="scss">
.input-text {
    &__inner {
        position: relative;
    }
    label {
        display: block;
        margin-bottom: 8px;
    }
    input {
        &[type="text"],
        &[type="email"],
        &[type="password"] {
            background: #F2F1F3;
            box-shadow: 0 1px 2px 0 #00000040 inset;
            border: none;
            padding: 0 20px;
            outline: none;
            border-radius: 6px;
            font-size: 15px;
            width: 100%;
            transition: .25s all ease;
            height: 50px;
            &::placeholder {
                color: #999999;
            }
            &:disabled {
                box-shadow: 0px 1px 2px 0px #00000014 inset;
            }
        }
        &[type="password"] {
            padding-right: 60px;
        }
    }
    button.password-visibility-button {
        position: absolute;
        height: 100%;
        top: 0;
        right: 20px;
        cursor: pointer;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    &.is--small {
        input {
            &[type="text"],
            &[type="email"],
            &[type="password"] {
                padding: 0 10px;
                height: 30px;
            }
        }
    }
}
</style>