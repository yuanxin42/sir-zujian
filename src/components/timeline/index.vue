<template>
    <div class="timeline" :style="{width:width,height:height}">
         <h5>{{title}}</h5>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        width: String | Number,
        height: String | Number,
        title: {
            default: '时间轴',
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
</style>