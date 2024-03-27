<script>
import QuestionIcon from '@/assets/icons/question.svg'
import InputText from '@/components/forms/InputText.vue'
import AppButton from '@/components/forms/Button.vue'
import AppSelect from '@/components/forms/Select.vue'
export default {
    components: {
        AppSelect,
        AppButton,
        InputText,
        QuestionIcon
    },
    props: {
        products: {
            required: true,
            type: Array,
            default: () => []
        }  
    }
}
</script>
<template lang="pug">
    .products-table.card
        .products-table__inner
            .products-table__header
                h2 Мои товары
                QuestionIcon
                span 4 из 30
            p Добавьте товары вашего магазина из одной товарной и ценовой категории (разница цены не больше 15%)
            p Для добавления нескольких товаров введите несколько артикулов через запятую или используя клавишу Enter
        form.products-table__form-new(@submit.prevent)
            .products-table__form-new__field
                InputText(
                    id="art"
                    label="Добавление товаров"
                    placeholder="Введите артикул продавца, артикул WB или ссылку на товар"
                )
                AppButton(
                    :disabled="true"
                    type="submit"
                ) Добавить
            p Например ваши товары:&nbsp;
                span 119203059,&nbsp;
                span 124366343,&nbsp;
                span 59801844
        .products-table__list
            table
                thead
                    tr
                        th 1
                        th Фото
                        th Артикул продавца
                        th Бренд
                        th Название
                        th
                            AppSelect Остаток, шт.
                        th
                            AppSelect Текущая цена
                        th
                            AppSelect Минимальная цена
                        th
                            AppSelect Максимальная цена
                        th Удалить
                tbody
                    tr(
                        v-for="(item, index) in products"
                        :key="index"
                    )
                        td 1
                        td
                            span.products-table__list__item-photo(
                                v-if="item.images?.length"
                                :style="{backgroundImage: `url(${item.images[0]})`}"
                            )
                        td {{ item?.remote_id }}
                        td.is--brand(
                            :title="item?.brand_name"
                        ) {{ item?.brand_name }}
                        td.is--title(
                            :title="item?.title"
                        ) {{ item?.title }}
                        td {{ item.quantity }}
                        td {{ item.price }}
                        td
                            InputText(
                                id="min_price"
                                placeholder="0"
                                :value="min_price"
                                :modifiers="['is--small']"
                            )
                        td
                            InputText(
                                id="max_price"
                                placeholder="0"
                                :value="max_price"
                                :modifiers="['is--small']"
                            )
                        td 1

</template>
<style lang="scss">
.products-table {
    max-width: 1600px;
    margin: 0 auto;
    &__header {
        display: flex;
        align-items: flex-end;
        margin-bottom: 30px;
        h2 {
            margin: 0;
        }
        svg {
            margin: 0 20px 0 10px;
        }
        span {
            color: #999999;
        }
    }
    &__form-new {
        margin-top: 30px;
        &__field {
            display: flex;
            width: 100%;
            align-items: flex-end;
            .input-text {
                width: 100%;
                max-width: 750px;
                margin-right: 20px;
            }
        }
        p {
            margin: 4px 0 0 0;
            color: #999999;
            font-size: 12px;
            line-height: 16px;
            span {
                border-bottom: 1px dashed #999999;
                cursor: pointer;
            }
        }
    }
    &__list {
        margin-top: 30px;
        table {
            width: 100%;
            border-collapse: collapse;
            tr {
                th,
                td {
                    padding: 15px 10px;
                    border-bottom: 1px solid rgba(#00000033, .20);
                    &.is--brand,
                    &.is--title {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    &.is--brand {
                        max-width: 125px;
                    }
                    &.is--title {
                        max-width: 360px;
                    }
                }
                th {
                    color: #999999;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 25px;
                    white-space: nowrap;
                }
            }
        }
        &__item {
            &-photo {
                width: 50px;
                height: 50px;
                display: block;
                background-size: cover;
                background-position: center;
            }
        }
    }
}
</style>