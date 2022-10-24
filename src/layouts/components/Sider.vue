<script setup lang="ts">
import {
  House,
  Document,
  Menu as IconMenu,
  Setting,
  User,
  ArrowLeftBold,
  ChatDotSquare,
  Sunny,
  Moon
} from "@element-plus/icons-vue";
import { computed, inject, ref } from "vue";
import { router } from "../../router";
import { store } from "../../store";

// const {displaySide, showSide} = inject('displaySide')
let showMoonBtn = ref(false)
let showSunnyBtn = ref(true)


function toAuth() {
  router.push('Auth')
}

function switchMoonSunny() {
  if (!showMoonBtn.value) {
    showMoonBtn.value = true
    showSunnyBtn.value = false
    return
  }
    showMoonBtn.value = false
    showSunnyBtn.value = true
}

let layoutMenuClass = computed(()=>{
  store.commit('settingTheme',showMoonBtn.value)
  return showMoonBtn.value?  'layout-menu-dark' : 'layout-menu'
})


</script>

<template>
  <el-menu :class="layoutMenuClass" collapse>
    <div>
      <el-menu-item index="1">
        <el-icon @click="router.go(-1)">
          <ArrowLeftBold />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon @click="router.push('Home')">
          <House />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <icon-menu />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="4" disabled>
        <el-icon>
          <Document />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon>
          <Setting />
        </el-icon>
      </el-menu-item>
    </div>
    <div>
      <el-menu-item class="layout-menu-item-last" index="6">
        <el-icon>
          <ChatDotSquare/>
        </el-icon>
      </el-menu-item>
      <el-menu-item class="layout-menu-item-last" index="7">
        <el-icon v-if="showSunnyBtn" >
          <Sunny @click="switchMoonSunny()" />
        </el-icon>
        <el-icon v-if="showMoonBtn" >
          <Moon @click="switchMoonSunny()" />
        </el-icon>
      </el-menu-item>
      <el-menu-item class="layout-menu-item-last" index="8">
        <el-icon @click="toAuth()">
          <User />
        </el-icon>
      </el-menu-item>
    </div>

  </el-menu>
</template>

<style  scoped lang="less">

.layout-menu {
  background: rgb(246, 247, 248);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-item-last {
    justify-self: end;
  }
}

.layout-menu-dark {
  background: rgb(246, 247, 248);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  filter: invert(90%);

  &-item-last {
    justify-self: end;
  }
}

</style>
