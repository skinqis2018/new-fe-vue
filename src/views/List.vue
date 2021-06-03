<template>
  <div class="list">
    <el-table
      :data="list"
      stripe
      size="small"
      v-loading="loading"
      empty-text="没有查询到对应的数据"
      @row-click="rowClickHandle"
      style="width: 100%; color: #2c3e50"
    >
      <el-table-column
        prop="type"
        header-align="center"
        align="center"
        label="频道"
        width="180"
      >
        <template slot-scope="scope">
          <el-tag size="small" type="primary">{{
            CHANELS[Number(scope.row.type)]
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="src" label="来源" width="80"></el-table-column>
    </el-table>
    <el-pagination
      class="list__pagination"
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>

<script>
import { CHANELS } from "@/assets/js/const";
export default {
  data() {
    return {
      list: [],
      loading: false,
      CHANELS,
      key: "",
      chanel: null,
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
    };
  },
  mounted() {
    this.load();
  },
  beforeRouteUpdate(to, from, next) {
    this.key = to.query.key;
    let chanel = to.params.chanel;
    if (chanel === "all") {
      chanel = null;
    }
    this.chanel = chanel;
    this.getDataList();
    next();
  },
  methods: {
    load() {
      let key = this.$route.query.key;
      if (key) {
        key = encodeURIComponent(key)
      }
      this.key = key
      let chanel = this.$route.params.chanel;
      if (chanel === "all") {
        chanel = null;
      }
      this.chanel = chanel;
      this.getDataList();
    },
    
    getDataList() {
      this.$http({
        url: this.$http.adornUrl(`/generator/news/search`),
        method: "get",
        params: this.$http.adornParams({
          page: this.pageIndex,
          limit: this.pageSize,
          flag: 0,
          key: this.key || null,
          chanel: this.chanel,
        }),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.list = data.page.list;
          this.totalPage = data.page.totalCount;
          this.loading = false;
        }
      });
    },
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    rowClickHandle(row, column, event) {
      this.clickHandle(row);
    },
  },
  inject: ["clickHandle"],
};
</script>

<style lang="less">
.list {
  width: 70%;
  margin: auto;
  margin-top: 1rem;
  &__pagination {
    margin-top: 0.4rem;
  }
}
</style>
