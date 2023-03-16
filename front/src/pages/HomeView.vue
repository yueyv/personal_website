<template>
  <a-layout style="height: 100vh">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="60"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      collapsible
      :trigger="'Collapse'"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">狼窝</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">复习资料</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">学习资料</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">东京热</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <HeaderComponent style="margin-bottom: 24px"></HeaderComponent>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{
            padding: '24px',
            background: '#f8acac',
            paddingBlock: '10px',
            height: '70vh',
            overflow: 'auto',
          }"
        >
          <RouterView style="padding: 10px"></RouterView>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, onMounted } from "vue";
import HeaderComponent from "../components/header/HeaderComponent.vue";
import Footer from "../components/footer/Footer.vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HeaderComponent,
    Footer,
  },
  setup() {
    const collapsed = ref<boolean>(false);
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
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
  background: rgb(248, 119, 138) !important;
}
.ant-menu-item-selected {
  background-color: rgb(233, 93, 133) !important;
}
.ant-layout-header,
.ant-layout-footer {
  background: rgb(206, 101, 101) !important;
}

::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
}

/* 隐藏滑块 */
::-webkit-scrollbar-thumb {
  background-color: transparent;
}
.ant-layout-sider-trigger{
  background: red!important;
  font-weight: 900;
  color: blue!important;
}

</style>
