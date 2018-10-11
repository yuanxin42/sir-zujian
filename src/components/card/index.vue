<template>
    <div class="card" :style="{width:width+'px',height:height+'px'}">
        <div class="cardBlockHeader">
            <slot name="cardHeader"></slot>
        </div>
        <div class="cardBlockFotter">
            <slot name='cardFotter'></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        width: {
            default: '290',
            type: String | Number
        },
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
@import "../../assets/css/common.less";
.card {
    border: 1px solid #e5e5e5;
    .cardBlockHeader {
        overflow: hidden;
        width: 100%;
        .cardHover {
            display: block;
            width: 100%;
            transition: all 0.5s ease;
        }
        .cardHover:hover {
            transform: scale(1.06);
        }
    }
    .cardBlockFotter {
        .cardTitle {
            margin: 12px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
                display: inline-block;
                height: 20px;
                line-height: 20px;    
                text-align: center;
                font-size: 14px;
            }
        }
    }
}
</style>
