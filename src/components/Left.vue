<template>
  <div class="left">
    <div class="left__top">
      <swiper class="left__swiper" :options="swiperOptions">
        <swiper-slide
          class="left__swiper_item"
          v-for="item in list"
          :key="item.newsId"
        >
          <img :src="item.url" />
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
  props: {
    list: {
      type: Array,
      default: () => [],
    },
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
