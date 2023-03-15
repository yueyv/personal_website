<template>
  <div class="header" ref="header">
    <div class="time">{{ time }}</div>
    <div class="user" v-if="!isLogin">
      <UserOutlined />
      未登录
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
import drag from "../../hooks/dragANDback"
let header = ref(null);
let newDate=new Date();
const time=ref<string>(newDate.getHours()+":"+newDate.getMinutes()+":"+newDate.getSeconds());


setInterval(()=>{
  let newDate=new Date();
  time.value=newDate.getHours()+":"+newDate.getMinutes()+":"+newDate.getSeconds();
  // console.log(time)
  // nextTick()
},1000)
onMounted(() => {
  setTimeout(() => {
    drag((header.value as unknown) as HTMLElement);
  }, 1000);
  // 为什么这里直接执行了
});
const isLogin = ref<boolean>(false);
</script>

<style scoped>
.time{
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translateY(-50%);
  color: cyan;
  font-size: 24px;
}
.header {
  position: relative;
  top: 0;
  right: 0;
  height: 5vh;
  background: linear-gradient(
    to right,
    rgb(249, 198, 198),
    rgb(252, 172, 186)
  ) !important;
}
.user {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}
/* .animate__fadeOutUp{
  --animate-duration: 2s!important;
} */
</style>
