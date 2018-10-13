<template>
    <div class="tabs" :style="tabstyle">
        <ul class="nav">
            <li v-for="(val,index) in tablist" :key="index" @click="changetab(val.name)">{{val.label}}</li>
        </ul>
        <slot></slot>

    </div>
</template>
<script>
import Vue from 'vue'
export default {
    props: {
        width: {
            default: '290px',
            type: String | Number
        },
        height: String | Number
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
            tabname: 'first1',
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
</style>
