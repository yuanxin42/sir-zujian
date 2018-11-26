<template>
    <div class="sirTimelineTree">
        <div class="timelineTitle" :style="{width:titlewidth}">{{title}}&nbsp</div>
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
        titlewidth: {
            default: '60px',
            type: String | Number
        },
        title: {
            default: '',
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