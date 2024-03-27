<script>
import ChevronIcon from "@/assets/icons/chevron.svg"
export default {
    components: {
        ChevronIcon
    }
}
</script>
<template lang="pug">
    .select
        slot
        ChevronIcon
</template>
<style lang="scss">
.select {
    display: flex;
    align-items: center;
}
</style>