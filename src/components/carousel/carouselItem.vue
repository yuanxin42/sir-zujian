<template>
    <div class="sir-carouselItem" :style="sirStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'sir-carouselItem',
    props: {
        width: {
            default: '100%',
            type: String | Number
        },
        height: {
            default: '100%',
            type: String | Number
        },
        src: String,
        alt: String
    },
    computed: {
        sirStyle() {
            return {
                width: this.width,
                height: this.height,
            }
        }
    },
    methods: {
    },
    data() {
        return {
            carouselItem:'123'
        }
    },
    created() {
    }
}
</script>
<style lang="less" scoped>
    .sir-carouselItem{
        position: absolute;
        img{
            width: 100%;
            height: 100%;
        }
        overflow: hidden;
    }
</style>