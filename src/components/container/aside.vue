<template>
    <div class="aside" :style="{width:width,height:height}">
        <slot></slot>
    </div>
</template>
<script>
export default {
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
.aside {
    background: #d3dce6;
    width: 100%;
}
</style>