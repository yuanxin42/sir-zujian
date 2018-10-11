<template>
    <div class="header" :style="{width:width+'px',height:height+'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'sir-header',
    props: {
        width: String | Number,
        height: String | Number
    },
    data() {
        return {
        }
    },
    created() {
    }
}
</script>
<style lang="less" scoped>
.header {
    background: red;
    width: 100%;
}
</style>