<template>
    <Switch v-model="isActive"/>
</template>
<script setup>
import {ref} from "vue"
import Switch from "./components/switch/switch.vue"

const isActive = ref(false)
</script>

<style scoped>
</style>
