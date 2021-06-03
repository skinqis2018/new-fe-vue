<template>
  <div>
    <Content :leftList="leftList" :midList="midList" :rightList="rightList" />
  </div>
</template>

<script>
import Content from "@/components/Content";
export default {
  name: "Home",
  data() {
    return {
      leftList: [],
      midList: [],
      rightList: [],
    };
  },
  components: {
    Content,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http({
        url: this.$http.adornUrl(
          `/generator/news/list?page=1&limit=30&flag=1&userid=${this.userId}`
        ),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 0) {
          let list = data.page.list;
          this.leftList = list.slice(0, 4);
          this.midList = list.slice(4, 16);
          this.rightList = list.slice(16, 28);
        } else {
          this.$message.error(data.msg);
        }
      });
    },
  },
  computed: {
    userId: {
      get() {
        return this.$store.state.user.id;
      },
      set(val) {
        this.$store.commit("user/updateId", val);
      },
    },
  },
};
</script>
