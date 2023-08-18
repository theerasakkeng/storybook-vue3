<template>
    <Switch v-model="isActive"/>
    <button @click="() => show = true">click</button>
    <Loading v-model="show" blur="1px"/>
</template>
<script setup>
import {ref} from "vue"
import Switch from "./components/switch/switch.vue"
import Loading from "./components/loading/loading.vue";

const isActive = ref(false)
const show = ref(false)
</script>

<style scoped>
</style>
