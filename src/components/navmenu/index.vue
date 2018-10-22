<template>
    <div class="navment" :style="{width:width,height:height,lineHeight:height}">
        <div class="navtop">
            <slot name="navtop"></slot>
        </div>
        <ul class="navmenu">
            <slot name="allsubmenu"></slot>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        width: String | Number,
        height: {
            type: String | Number,
            default: '70px'
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
.navment {
    position: fixed;
    top: 0;
    width: 100%;
    transition: all 0.5s ease;
    &:hover{
        background: #fff;
    }
    .navtop {
        float: left;
        margin-left: 20px;
        a {
            text-decoration: none;
            color: #333;
        }
    }
    .navmenu {
        margin: 0;
        padding: 0;
        margin-right: 20px;
        float: right;
    }
}
</style>