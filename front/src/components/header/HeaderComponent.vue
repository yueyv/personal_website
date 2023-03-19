<template>
  <div>
    <div class="header" :class="{ hidden: isHidden }">
      <div id="time">{{ currentTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTimeStore } from "../../store/useTime";
const Time = useTimeStore();
const date = new Date();
const currentTime = ref(
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
);
const isHidden = ref(false);
let timeoutId: any = null;

setInterval(()=>{
  let date=new Date()
  currentTime.value=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
  Time.setInnerTime()
},1000)

function onMouseMove() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  isHidden.value = false;

  timeoutId = setTimeout(() => {
    isHidden.value = true;
  }, 60000);
}

onMounted(() => {
  Time.setFirstTime();
  document.addEventListener("mousemove", onMouseMove);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", onMouseMove);
});
</script>

<style scoped less="less">
#time {
  display: inline-block;
  position: relative !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  font-size: 42px;
  font-style: inherit;
  color: lightseagreen;
}
.header {
  position: relative;
  background: transparent;
  top: 0;
  width: 100%;
  height: 50px;
  color: #fff;
  transition: transform 2s linear;
}
.header.hidden {
  transform: translateY(-70px);
}
</style>
