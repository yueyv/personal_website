<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app,body,html {
  height: 100%;
}

.ant-layout {
  display: flex;
  width: 100%;
  min-height: 100%;
}
</style>
