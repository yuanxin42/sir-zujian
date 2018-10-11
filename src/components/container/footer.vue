<template>
    <div class="footer" :style="{width:width+'px',height:height+'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'sir-footer',
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
.footer {
    background: #999341;
    width: 100%;
}
</style>