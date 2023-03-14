<template>
  <div class="header" ref="header">
    <div class="user" v-if="!isLogin">
      <UserOutlined />
      未登录
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from "@ant-design/icons-vue";
import { ref,onMounted } from "vue";
let header = ref(null)
onMounted(()=>{
    setTimeout(() => {
        header.value.style.keyframes= "example"
        console.log(header.value)
    }, 1000);
})
const isLogin = ref<boolean>(false)
</script>

<style scoped>
.header {
  position: relative;
  height: 5vh;
  background: linear-gradient(to right,rgb(249, 198, 198),rgb(252, 172, 186))!important;
}
.user {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}
</style>
