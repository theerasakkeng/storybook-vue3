<template>
    <div class="loading-backdrop" v-show="modelValue">
      <slot name="loader">
        <div class="loader"></div>
      </slot>
    </div>
  </template>
  <script setup>
  const emits = defineEmits(["update:modelValue"]);
  const props = defineProps({
      modelValue : {
          type : Boolean,
          default:false,
      },
      backdropColor: {
          type : String,
          default:"rgba(255, 255, 255, 0.5)"
      },
      blur: {
        type : String,
        default: "5px"
      }
  })
  </script>
  <style lang="css" scoped>
  .loading-backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: v-bind("backdropColor");
    background-color: v-bind("backdropColor");
    z-index: 999999;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .loading-backdrop {
      -webkit-backdrop-filter: blur(v-bind("blur"));
      backdrop-filter: blur(v-bind("blur"));
      /* background: v-bind("backdropColor"); */
      background: v-bind("backdropColor");
      background-color: v-bind("backdropColor");
    }
  }

  .loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  </style>
  