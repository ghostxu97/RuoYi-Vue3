<template>
    <el-dropdown trigger="click" @command="handleSetLanguage">
      <div class="language-icon--style">
        <svg-icon class-name="language-icon" icon-class="language" />
      </div>
      <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item of languageOptions" :key="item.value" :disabled="language === item.value" :command="item.value">
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
      </template>
    </el-dropdown>
  
  </template>
  
  <script setup>
  import useAppStore from "@/store/modules/app";
  import en from "element-plus/es/locale/lang/en";
  import cn from "element-plus/es/locale/lang/zh-cn";
  import { changeLanguage } from "@/api/login";
  
  const appStore = useAppStore();
  const language = ref(localStorage.getItem('lang') === 'en' ? en : cn);
  const languageOptions = ref([
    { label: "简体中文", value: "ch" },
    { label: "English", value: "en" },
  ]);
  
  function handleSetLanguage(lang) {
    appStore.setLanguage(lang)
    language.value = lang;
    localStorage.setItem('lang', lang)
    changeLanguage(lang).then(response => {
      //刷新浏览器
      location.reload();
    });
  }
  
  </script>
  
  <style lang='scss' scoped>
  .language-icon--style {
    font-size: 18px;
    line-height: 50px;
    padding-right: 7px;
  }
  
  </style>
  