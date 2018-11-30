<template>
    <div class="sirTimelineTree">
        <span class="timelineTitle" :style="{width:titleParentWidth}">{{title}}&nbsp</span>
        <!-- 因为没给它设置高度，也不知道设置多少合适，索性让一个空格撑起来把  -->
        <ul :style="{width:width,height:height}" class="timelineTree">
            <li class="timelineItem">
                <span class="bigCircle">
                    <span class="bigCircleChildren"></span>
                </span>
            </li>
            <slot></slot>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        width: String | Number,
        height: String | Number,
        title: {
            default: '',
            type: String | Number
        }
    },
    computed: {
        titleParentWidth() {
            return this.$parent.titlewidth
        }
    },
    data() {
        return {
        }
    },
    created() {
        console.log(this.$options.name, '我是它的父级啊')
    }
}
</script>
<style lang="less" scoped>
.sirTimelineTree {
    .mixinCircle() {
        display: inline-block;
        border-radius: 50%;
    }

    .bigCircle {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 21px;
        left: -9px;
        border: 1px solid #ccc;
        .mixinCircle();
        .bigCircleChildren {
            width: 13px;
            height: 13px;
            .mixinCircle();
            background: #00bbff;
        }
    }

    .timelineTitle {
        display: block;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .timelineTree {
        float: left;
        list-style: none;
        margin: 0;
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
        .bigCircle {
            position: absolute;
            background: #fff;
            z-index: 1;
        }
    }
}

.sirTimelineTree:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
}
</style>