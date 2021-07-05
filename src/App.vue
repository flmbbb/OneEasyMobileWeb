<template>
  <div>
    <template v-if="navBarShow">
      <van-nav-bar
        class="myBar"
        :title="navBarTitle"
        left-text="返回"
        left-arrow
        fixed
        placeholder
        @click-left="onBack"
      />
    </template>
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive :include="tagsList">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>

    <template v-if="navBarShowFoot">
      <van-tabbar v-model="indexTabbar" @change="onChangeTabbar">
        <van-tabbar-item
          name="home"
          icon="wap-home-o"
          replace
          to="/"
          style="background-color: #00ccff; font-size: 16px"
          >主页</van-tabbar-item
        >
        <van-tabbar-item
          name="search"
          icon="friends-o"
          to="/StudentUser"
          style="background-color: #00ccff; font-size: 16px"
          >个人中心</van-tabbar-item
        >
      </van-tabbar>
    </template>
  </div>
</template>

<script  lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
import { THTTPRequest } from "@/baselib/helper/HTTPClient";
import store, { TTokenInfo } from "./store";
//配合着用
@Options({
  components: {},
  computed: {
    ...mapState(["isLoading", "navBarShow", "navBarTitle", "navBarShowFoot"]),
  },
})
export default class App extends Vue {
  private tagsList:string[]=["EduXMList","Home"];
  private indexTabbar: string = "home";
  public created() {
    document.title = this.$myGlobal.appTitle;
    var lTokenInfo = localStorage.getItem(TTokenInfo.storageName);
    if (lTokenInfo != null) {
      store.state.tokenInfo = JSON.parse(lTokenInfo);
    }
  }
  private onChangeTabbar(qIndexName: string) {
    this.indexTabbar = qIndexName;
  }
  private onBack() {
    this.$router.go(-1);
  }
  private onUserHome() {
    this.$router.push("/StudentUser");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
</style>
