<template>
  <div class="right">
    <news-tabs :news="rightNews" />
  </div>
</template>

<script>
import NewsTabs from "@/components/NewsTabs";
export default {
  data() {
    return {
      rightNews: [
        {
          label: "图片",
          top: [
            {
              img: "//n.sinaimg.cn/news/transform/200/w100h100/20210516/8270-kpzzqna5585989.jpg",
              name: "大学生时装周",
              link: "http://slide.news.sina.com.cn/slide_1_86058_514840.html",
            },
            {
              img: "//n.sinaimg.cn/sports/transform/175/w105h70/20210515/1f99-kpzzqna5468546.jpg",
              name: "中超-青岛绝杀重庆",
              link: "http://slide.sports.sina.com.cn/n_j/slide_2_789_266629.html",
            },
            {
              img: "//n.sinaimg.cn/ent/transform/175/w105h70/20210514/fa11-kpzzqna0706439.jpg",
              name: "张雪迎姐姐道歉",
              link: "https://video.sina.com.cn/p/ent/2021-05-13/detail-ikmxzfmm2239217.d.html",
            },
          ],
          body: [
            {
              title: "起底线上代考:瞄准想进“大厂”年轻人 一小时收费300",
              link: "https://finance.sina.com.cn/chanjing/cyxw/2021-05-14/doc-ikmxzfmm2449840.shtml",
            },
            {
              title: "起底线上代考:瞄准想进“大厂”年轻人 一小时收费300",
              link: "https://finance.sina.com.cn/chanjing/cyxw/2021-05-14/doc-ikmxzfmm2449840.shtml",
            },
            {
              title: "起底线上代考:瞄准想进“大厂”年轻人 一小时收费300",
              link: "https://finance.sina.com.cn/chanjing/cyxw/2021-05-14/doc-ikmxzfmm2449840.shtml",
            },
          ],
        },
        {
          label: "专栏",
          top: [
            {
              img: "//n.sinaimg.cn/weibo_pub/175/w105h70/20210514/5f80-kpzzqna1408185.jpg",
              name: "西藏史诗级美景",
              link: "http://slide.news.sina.com.cn/slide_1_86058_514840.html",
            },
            {
              img: "//n.sinaimg.cn/weibo_pub/175/w105h70/20210514/2811-kpzzqna1410427.jpg",
              name: "家常手撕杏鲍菇",
              link: "http://slide.sports.sina.com.cn/n_j/slide_2_789_266629.html",
            },
            {
              img: "//n.sinaimg.cn/weibo_pub/175/w105h70/20210514/715e-kpzzqna1414375.jpg",
              name: "穿越秘境大湘西",
              link: "https://video.sina.com.cn/p/ent/2021-05-13/detail-ikmxzfmm2239217.d.html",
            },
          ],
          body: [
            {
              title: "选秀17年，是时候刹车了",
              link: "https://k.sina.com.cn/article_5985890044_164c96efc01900znj0.html?from=ent&subch=oent",
            },
            {
              title: "AI演技第3代传人出现了",
              link: "https://k.sina.com.cn/article_1837074624_6d7f88c0019012wyi.html?from=ent&subch=oent",
            },
            {
              title: "铿锵玫瑰在战斗中学会战斗",
              link: "https://sports.sina.com.cn/china/womenfootballs/2021-04-08/doc-ikmyaawa8559870.shtml",
            },
          ],
        },
      ],
    };
  },
  components: {
    NewsTabs,
  },
};
</script>

<style>
.right {
  padding: 0 0.2rem;
}
</style>
