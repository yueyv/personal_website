<template>
  <div>
    <div class="header" :class="{ hidden: isHidden }">
      <a-page-header style="border: 1px solid rgb(235, 237, 240)" :title="title.target" />
    </div>
  </div>
</template>

<script setup lang="ts">
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

<style scoped less="less">
.header {
  position: relative;
  background: rgb(248, 119, 138) !important;
  top: 0;
  width: 100%;
  height: 50px;
  color: #fff;
  transition: transform 0.3s linear;
}
.header.hidden {
  transform: translateY(-70px);
}
</style>
