<template>
    <div :class="{scroll:true,scrolldown:isdown}">
        <a :href="sirSrc" class="scrollA">
            <img class="scrollPic" :src="scrollImg" alt="">
        </a>
    </div>
</template>
<script>
export default {
    props: {
        width: String | Number,
        height: String | Number,
        scrollTop: {
            default: '400px',
            type: String | Number
        },
        sirSrc: {
            default: 'https://www.baidu.com',
            type: String
        },
        scrollImg: {
            default: 'https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png',
            type: String
        }
    },
    data() {
        return {
            isdown: false
        }
    },
    methods: {
        handleScroll() {
            let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let todown = +this.scrollTop.slice(0, this.scrollTop.match(/px$/).index)
            if (scroll > todown) {
                this.isdown = true;
            } else {
                this.isdown = false;
            }
        }
    },
    created() {
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="less" scoped>
.scroll {
    height: 500px;
    overflow: hidden;
    position: fixed;
    right: 0px;
    top: -500px;
    z-index: 9;
    transition: all 0.5s ease;
    .scrollA {
        .scrollPic {
            margin-top: -400px;
        }
    }
}

.scrolldown {
    top: 0;
}
</style>