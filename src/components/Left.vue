<template>
  <div class="left">
    <div class="left__top">
      <swiper class="left__swiper" :options="swiperOptions">
        <swiper-slide
          class="left__swiper_item"
          v-for="item in topList"
          :key="item.poster"
        >
          <img :src="item.poster" />
          <span>{{ item.title }}</span>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper.less";

SwiperClass.use([Pagination, Mousewheel, Autoplay]);

const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
      },
      topList: [
        {
          poster:
            "//n.sinaimg.cn/baby/transform/590/w240h350/20210511/a070-kpuunne2288908.jpg",
          title: "孙莉晒与多多假期游玩合照",
          link: "http://slide.baby.sina.com.cn/mxx/slide_10_846_774384.html",
        },
        {
          poster:
            "//n.sinaimg.cn/fashion/590/w240h350/20210516/34df-kpzzqna6013955.jpg",
          title: "“编织单品”成为辣妹新欢",
          link: "//fashion.sina.com.cn/we/2021-05-16/0759/doc-ikmxzfmm1766221.shtml",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.left {
  width: 100%;
  padding: 0 0.2rem;
  &__top {
    height: 7rem;
  }
  &__swiper {
    width: 100%;
    height: 100%;
    &_item {
      height: 100%;
      line-height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 0 10px;
        width: 100%;
        height: 0.72rem;
        font-size: 14px;
        line-height: 0.72rem;
        text-align: center;
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>
