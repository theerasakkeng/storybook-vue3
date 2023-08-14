<template>
  <label class="switch" :class="inset ? 'inset':''">
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)"/>
    <span class="slider" :class="inset ? 'slider-inset':''">
    </span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false
  },
  inset: {
    type: Boolean,
    default: false,
  },
  inActiveBgColor:{
    type:String,
    default:"#ccc"
  },
  activeBgColor:{
    type:String,
    default:"#2196f3"
  },
  activeThumbColor :{
    typeL:String,
    default:"#fff"
  },
  inActiveThumbColor :{
    typeL:String,
    default:"#fff"
  }
});

const emits = defineEmits(["update:modelValue"])
</script>

<style scoped lang="css">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch.inset {
  height: 14px;
  width: 44px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: v-bind("inActiveBgColor");
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.slider::before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: v-bind('inActiveThumbColor');
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

.inset .slider::before {
  content: "";
  height: 22px;
  width: 22px;
  left: -2px;
  bottom: -4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

input:checked + .slider {
  background-color: v-bind('activeBgColor');
}

input:focus + .slider {
  box-shadow: 0 0 1px v-bind('activeBgColor');
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background-color: v-bind('activeThumbColor');
}

input:checked + .slider.slider-inset:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background-color: v-bind('activeThumbColor');
}
</style>