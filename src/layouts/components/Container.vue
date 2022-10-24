<script setup lang="ts">
import Header from "./Header.vue";
import LeftSideMessage from "../../pages/LeftSideMessage.vue";
import { computed } from "vue";

import { store } from "../../store";
let layoutContainer = computed(()=>{
  return store.state.themeColor === 'dark' ?  'layout-container-dark' : 'layout-container'
})



</script>

<template>
  <el-container :class="layoutContainer">
    <Header />
      <el-main>
        <LeftSideMessage/>
        <div class="layout-containe-main-view">
          <router-view ></router-view>
        </div>
      </el-main>
  </el-container>
</template>

<style scoped lang="less">

.el-main {
    padding: 0px;
  }

.layout-container {
  flex-direction: column;

  &-dark {
    flex-direction: column;
    filter: invert(85%);
    .el-main {
      filter: invert(100%);
      background-color: rgb(58, 58, 58);
    }
  }
}



.layout-containe-main-view {
      padding: 20px;
  }
</style>
