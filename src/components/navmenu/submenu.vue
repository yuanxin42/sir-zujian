<template>
    <li class="submenu" :style="sirStyle" @mouseenter="sirenter" @mouseleave="sirleave">
        <slot></slot>
        <div class="submenuAfter" :style="{background:color}"></div>
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
        },
        color: {
            default: '#fe9600',
            type: String
        }
    },
    computed: {
        sirStyle() {
            return {
                width: this.width,
                height: this.height,
                lineHeight: this.height,
                color: this.sircolor
            }
        }
    },
    methods:{
        sirenter(){
            this.sircolor = this.color
        },
        sirleave(){
            this.sircolor = '#666'
        }
    },
    data() {
        return {
            sircolor:'#666'
        }
    },
    created() {
    }
}
</script>
<style lang="less" scoped>
p {
    background: red;
}

.submenu {
    float: left;
    margin-right: 10px;
    color: #666;
    position: relative;
    overflow: hidden;
    &:hover {
        .submenuAfter{
            left: 0;
        }
    }
    .submenuAfter {
        content: "";
        display: block;
        position: absolute;
        bottom: 0px;
        left: -105%;
        height: 6px;
        width: 100%;
        transition: all 0.5s ease;
    }
}

li {
    list-style: none;
}
</style>