<template>
  <div class="footer" :class="{ hidden: isHidden }">
    <a style="color: #000" href="https://github.com/yueyv/website.git" target="_blank">
      https://github.com/yueyv/website.git</a
    >
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

<style scoped>
.footer {
  position: relative;
  background-image: linear-gradient(0deg,rgba(252, 195, 195, 0.73),rgba(255, 210, 210, 0.73)) !important;
  bottom: 0;
  width: 100%;
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
