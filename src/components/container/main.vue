<template>
    <div class="main" :style="{width:width+'px',height:height+'px'}">
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
.main {
    padding: 20px;
    background: blue;
    width: 100%;
}
</style>