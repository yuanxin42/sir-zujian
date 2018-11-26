<template>
    <li :style="{width:width,height:height}" class="timelineItem">
        <span class="smallCircle">
            <span class="smallCircleChildren"></span>
        </span>
        <slot></slot>
    </li>
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
.mixinCircle() {
    display: inline-block;
    border-radius: 50%;
}


.timelineItem:after {
    position: absolute;
    left: 0;
    background: #00bbff;
    width: 4px;
    height: 100%;
    content: "";
    top: 0px;
}

.timelineItem {
    position: relative;
    padding-left: 20px;
    min-height: 30px;
}

.smallCircle {
    position: absolute;
    background: #fff;
    z-index: 1;
}

.smallCircle {
    width: 14px;
    height: 14px;
    text-align: center;
    line-height: 12px;
    left: -6.5px;
    border: 1px solid #ccc;
    .mixinCircle();
    .smallCircleChildren {
        width: 10px;
        height: 10px;
        .mixinCircle();
        background: #00bbff;
    }
}
</style>