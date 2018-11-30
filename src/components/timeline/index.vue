<template>
    <div class="timeline" :style="{width:width,height:height}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'timeline',
    props: {
        width: {
            default: 'auto',
            type: String | Number
        },
        height: {
            default: 'auto',
            type: String | Number
        },
        title: {
            default: '时间轴',
            type: String | Number
        },
        titlewidth: {
            default: '60px',
            type: String | Number
        },
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

</style>