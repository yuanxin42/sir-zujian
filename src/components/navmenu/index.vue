<template>
    <div :class="sirClass" :style="sirColor" @mouseenter="sirenter" @mouseleave="sirleave">
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
        },
        color: {
            type: String,
            default: 'rgba(66, 139, 202, 1)'
        }
    },
    data() {
        return {
            sirTop: false,
            sirbac: 'transparent'
        }
    },
    computed: {
        sirColor() {
            return {
                width: this.width,
                height: this.height,
                lineHeight: this.height,
                background: this.sirbac
            }
        },
        sirClass() {
            return {
                navment: true,
                sirTop: this.sirTop
            }
        }
    },
    methods: {
        handleScroll() {
            let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scroll > 0) {
                this.sirTop = true;
                this.sirbac = this.color
            } else {
                this.sirTop = false;
                this.sirbac = 'transparent'
            }
        },
        sirenter() {
            this.sirbac = this.color
        },
        sirleave() {
            this.sirbac = 'transparent'
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="less" scoped>
.navment {
    position: fixed;
    top: 0;
    width: 100%;
    transition: all 0.5s ease;
    z-index: 10;
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