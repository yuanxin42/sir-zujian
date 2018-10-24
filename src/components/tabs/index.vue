<template>
    <div :class="{tabs:true,tableft:tabPosition==='left'}" :style="tabstyle">
        <ul :class="{nav:true,navleft:tabPosition==='left'}">
            <li :style="{width:labelwidth}" :class="{sirli:true,navchose:tabname===val.name}" v-for="(val,index) in tablist" :key="index" @click="changetab(val.name)">{{val.label}}</li>
        </ul>
        <div class="contain">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    props: {
        width: {
            default: '100%',
            type: String | Number
        },
        height: String | Number,
        tabPosition: {
            default: 'top',
            type: String
        },
        labelwidth: String,
    },
    computed: {
        tabstyle() {
            return {
                width: this.width,
                height: this.height
            }
        }
    },
    data() {
        return {
            tablist: [],
            tabname: '',
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    created() {
    },
    methods: {
        changetab(val) {
            this.tabname = val;
            this.eventBus.$emit('update:selected', this.tabname)
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            if (vm.$options.name === 'sir-tab') {
                this.tablist.push(vm.$options.propsData)
            }
        })
        this.$nextTick(() => {
            if (this.tablist.length > 0) {
                this.tabname = this.tablist[0].name
                this.eventBus.$emit('update:selected', this.tabname)
            }
        })
    }
}
</script>
<style lang="less" scoped>
@import "../../assets/css/common.less";
.tabs {
    .nav {
        display: block;
        width: 100%;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        .sirli {
            font-size: 14px;
            margin: 0 10px;
            text-align: center;
            padding: 10px 0 10px 0;
            margin: 0 20px -11px 0;
            cursor: pointer;
        }
        .navchose {
            color: #409eff;
            border-bottom: 2px solid #409eff;
        }
    }
    .contain{
        width: 100%;
        margin: 20px;
    }
}

.tableft {
    display: flex;
    .navleft {
        width: auto;
        display: flex;
        flex-direction: column;
        border-bottom: 0;
        border-right: 1px solid #ccc;
        .sirli{
            width: auto;
            margin: 0px 0 10px 0;
            padding: 10px 10px 0px 10px;
            white-space:nowrap;
            padding-right: 10px;
        }
        .navchose{
            border-bottom: 0px;
            margin-right: -1px;
            padding-right: 29px;
            border-right: 2px solid #409eff;
        }
    }
}
</style>
