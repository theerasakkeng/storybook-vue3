<template>
    <Switch v-model="isActive"/>
</template>
<script setup>
import {ref} from "vue"
import Switch from "../src/components/switch.vue"

const isActive = ref(true)
</script>

<style scoped>
</style>
