<template>
    <li class="submenu" :style="{width:width,height:height,lineHeight:height}">
        <slot></slot>
    </li>
</template>
<script>
export default {
    props: {
        width: {
            default: 'auto',
            type: String | Number
        },
        height: {
            default: 'auto',
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
p{
    background: red;
}
.submenu {
    float: left;
    margin-right: 10px;
    color: #666;
    position: relative;
    overflow: hidden;
    &:hover {
        background: #fff;
        &:after{
            left: 0;
        }
    }
    &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0px;
        left: -100%;
        height: 6px;
        background: #fe9600;
        width: 100%;
        transition: all 0.5s ease;
    }
}

li {
    list-style: none;
}
</style>