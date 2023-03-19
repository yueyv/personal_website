<template>
  <div class="footer" :class="{ hidden: isHidden }">
    <a id="time" href="#" target="_blank">
      {{Time.innerTime}}</a
    >
  </div>
</template>

<script setup lang="ts">
import {useTimeStore} from '../../store/useTime';
const Time=useTimeStore()
const title = reactive({ target: "Yueyv" });
const isHidden = ref(false);
let timeoutId: any = null;

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
  document.addEventListener("mousemove", onMouseMove);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", onMouseMove);
});
</script>

<style scoped>
#time{
  color: rgb(192, 251, 255);
  font-size: 42px;
}
.footer {
  position: relative;
  background:transparent;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  transition: transform 0.3s linear;
}
.footer.hidden {
  transform: translateY(70px);
}
</style>
