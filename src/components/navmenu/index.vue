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
        sirbac: {  //  默认的导航菜单背景
            type: String,
            default: '#267439'
        },
        declinecolor: { // 下滑和鼠标移入时背景色
            type: String,
            default: 'rgba(66, 139, 202, 1)'
        },
        issetlocation: {  // 是否固定顶部
            type: Boolean,
            default: true
        },
        isdeclinebackground: {  // 鼠标下滑颜色是否改变
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            sirTop: false,
            navmenuBac:''
        }
    },
    computed: {
        sirColor() {
            return {
                width: this.width,
                height: this.height,
                lineHeight: this.height,
                background: this.navmenuBac || this.sirbac
            }
        },
        sirClass() {
            return {
                navment: true,
                sirTop: this.sirTop,
                islocation: this.issetlocation
            }
        }
    },
    methods: {
        handleScroll() {
            let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scroll > 0 && this.isdeclinebackground) {
                this.sirTop = true;
                this.navmenuBac = this.declinecolor
            } else {
                this.sirTop = false;
                this.navmenuBac = this.sirbac
            }
        },
        sirenter() {
            this.navmenuBac = this.declinecolor
        },
        sirleave() {
            this.navmenuBac = this.sirbac
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="less" scoped>
.navment {
    width: 100%;
    transition: all 0.5s ease;
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

.islocation {
    position: fixed;
    top: 0;
    z-index: 10;
}
</style>