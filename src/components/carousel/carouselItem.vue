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
        }
    },
    computed: {
        sirStyle() {
            return {
                width: this.width,
                height: this.height,
                opacity: this.isopacity,
                transition: `all ${this.seconds}s ease`
            }
        }
    },
    methods: {
    },
    data() {
        return {
            carouselItem: '123',
            isopacity: 1,
            seconds: '1.5'
        }
    },
    created() {
        if (this.$parent.$props.time) {
            this.seconds = this.$parent.$props.time / 1000
            console.log(this.$parent.$props.time, 'this.$parents')
        } else {
            console.log('组件使用不正确')
        }

    }
}
</script>
<style lang="less" scoped>
.sir-carouselItem {
    position: absolute;
    img {
        width: 100%;
        height: 100%;
    }
    overflow: hidden;
}
</style>