<template>
    <div class="timeline" :style="{width:width,height:height}">
        <h5>{{title}}</h5>
        <ul class="timelineTree">
            <span class="bigCircle">
                <span class="bigCircleChildren"></span>
            </span>
            <li class="timelineItem">
                <span class="smallCircle">
                    <span class="smallCircleChildren"></span>
                </span>
                123123</li>
            <li class="timelineItem">
                <span class="smallCircle">
                    <span class="smallCircleChildren"></span>
                </span>
                123123</li>
            <li class="timelineItem">
                <span class="smallCircle">
                    <span class="smallCircleChildren"></span>
                </span>123123</li>
            <li class="timelineItem">
                <span class="smallCircle">
                    <span class="smallCircleChildren"></span>
                </span>123123</li>
            <li class="timelineItem">
                <span class="smallCircle">
                    <span class="smallCircleChildren"></span>
                </span>123123</li>
            <li class="timelineItem">
                <span class="smallCircle">
                    <span class="smallCircleChildren"></span>
                </span>123123</li>
        </ul>
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
.mixinCircle() {
    display: inline-block;
    border-radius: 50%;
}

.bigCircle {
    width: 23px;
    height: 23px;
    text-align: center;
    line-height: 25px;
    box-shadow: 2px 1px #888888;
    .mixinCircle();
    .bigCircleChildren {
        width: 13px;
        height: 13px;
        .mixinCircle();
        background: #6ecaf5;
    }
}


.timelineTree {
    list-style: none;
    .timelineItem:after {
        position: absolute;
        left: 0;
        background: #6ecaf5;
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
        width: 17px;
        height: 17px;
        text-align: center;
        line-height: 17px;
        box-shadow: 1px 1px 1px 1px #888888;
        position: absolute;
        background: #fff;
        left: -7px;
        z-index: 1;
        .mixinCircle();
        .smallCircleChildren {
            width: 10px;
            height: 10px;
            .mixinCircle();
            background: #6ecaf5;
        }
    }
}
</style>