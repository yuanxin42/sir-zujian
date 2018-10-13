<template>
    <div :class="{container:true,headerorfooter:isheaderorfooter}" :style="{width:width+'px',height:height+'px'}">
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
            isheaderorfooter:false
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            if (vm.$options.name === 'sir-header'||vm.$options.name === 'sir-footer') {
                this.isheaderorfooter = true
            }
        })
    }
}
</script>
<style lang="less" scoped>
.container {
    background: purple;
    display: flex; // flex-direction: column-reverse;
}
.headerorfooter{
    flex-direction:column;
    width: 100%;
}
</style>