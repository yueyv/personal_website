<template>
  <div class="main">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card :msg="'msg'"></Card>
  </div>
</template>

<script setup lang="ts">
import Card from "../../components/cards/Card.vue";
</script>

<style scoped lang="less">
.main {
  height: 81vh;
  overflow: auto;
  background: #fff;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw 1vw;
}
</style>
