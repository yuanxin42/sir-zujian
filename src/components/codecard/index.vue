<template>
    <div class="codecard" :style="{width:width,height:height}">
        <sir-card>
            <div slot="cardHeader">
                <slot name="cardHeader"></slot>
            </div>
            <div :class="{cardFotter:true}" slot="cardFotter">
                <div :class="{cardFotterBlock:isshow, cardFotternone:!isshow}">
                    <pre>
                            <slot name='cardFotter' >
                            </slot>
                        </pre>
                </div>

                <div class="isshow">
                    <span class="codebtnblock">
                        <span :class="{codebtn:true}" v-if="isshow" @click="isshow=!isshow">隐藏代码</span>
                        <span :class="{codebtn:true}" v-else class="codebtn codebtn2" @click="isshow=!isshow">显示代码</span>
                    </span>

                </div>
            </div>
        </sir-card>
    </div>
</template>
<script>
export default {
    name: 'sir-codecard',
    props: {
        width: String | Number,
        height: {
            type: String | Number
        }
    },
    data() {
        return {
            isshow: true
        }
    },
    created() {
    }
}
</script>
<style lang="less" scoped>
.codecard {
    .cardFotter {
        border-top: 1px solid #e5e5e5;
        font-size: 18px;
        font-weight: normal;
        color: #2AAB51;
        font-family: "SF Mono", "Monaco", "Andale Mono", "Lucida Console", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
    }
    .cardFotterBlock {
        overflow: hidden;
        height: 100%;
    }
    .cardFotternone {
        height: 0;
        overflow: hidden;
    }
    .isshow {
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-top: 1px solid #e5e5e5;
        .codebtnblock {
            display: inline-block;
            width: 100px;
            height: 100%;
            .codebtn {
                color: #409eff;
                cursor: pointer;
                &:before {
                    content: '';
                    display: inline-block;
                    margin-right: 5px;
                    width: 0;
                    height: 0;
                    border-bottom: 10px solid #409eff;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                }
                &:hover {}
            }
            .codebtn2 {
                &:before {
                    border-bottom: 0;
                    border-top: 10px solid #409eff;
                }
            }
        }
    }
}
</style>