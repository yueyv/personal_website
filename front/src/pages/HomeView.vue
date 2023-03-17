<template>
  <a-layout style="height: 100vh">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <HeaderComponent class="a-layout-header"></HeaderComponent>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '72vh' }">
          内容区
          <RouterView></RouterView>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <a
          style="color: #000"
          href="https://github.com/yueyv/website.git"
          target="_blank"
        >
          https://github.com/yueyv/website.git</a
        >
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, onMounted } from "vue";
import HeaderComponent from "../components/header/HeaderComponent.vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HeaderComponent,
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      // console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      // console.log(broken);
    };

    return {
      selectedKeys: ref<string[]>(["1"]),
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>
<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
.ant-layout {
  background: rgb(247, 203, 211) !important;
}
.ant-layout-sider,
.ant-menu {
  /* background-color: rgb(246, 118, 139) !important; */
  background: rgb(248, 204, 211) !important;
}
.ant-menu-item-selected {
  background-color: rgb(253, 233, 239) !important;
}
.ant-layout-header,
.ant-layout-footer {
<<<<<<< Updated upstream
  background: linear-gradient(
    to right,
    rgb(249, 198, 198),
    rgb(252, 172, 186)
  ) !important;
=======
  background: rgb(248, 207, 207) !important;
}

::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
}

/* 隐藏滑块 */
::-webkit-scrollbar-thumb {
  background-color: transparent;
}
.ant-layout-sider-trigger {
  background: rgb(253, 230, 230) !important;
  font-weight: 900;
  color: rgb(190, 190, 249) !important;
  height: 50px !important;
}
/* .content-wrap {
  background: rgb(240, 115, 196);
  padding: 10px;
} */
.ant-page-header {
  border: 0 !important;
>>>>>>> Stashed changes
}
</style>
