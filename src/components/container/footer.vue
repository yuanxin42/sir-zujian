<template>
    <div class="footer" :style="{width:width,height:height,lineHeight:height}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'sir-header',
    props: {
        width: String | Number,
        height: {
            default: '60px',
            type: String | Number
        }
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
    background: purple;
    width: 100%;
    padding-left: 20px;
}
</style>