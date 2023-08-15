<template>
  <label
    class="switch"
    :class="{ thin: thin, disabled: disabled, readonly: readonly }"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :disabled="disabled"
      :readonly="readonly"
    />
    <span class="slider" :class="{ 'slider-thin': thin }"> </span>
  </label>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  thin: {
    type: Boolean,
    default: false,
  },
  inActiveBgColor: {
    type: String,
    default: "#ccc",
  },
  activeBgColor: {
    type: String,
    default: "#2196f3",
  },
  activeThumbColor: {
    typeL: String,
    default: "#fff",
  },
  inActiveThumbColor: {
    typeL: String,
    default: "#fff",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:modelValue"]);

const getBasecolor = (input) => {
  const colorStops = [];
  const regex =
    /(?:rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\))|(#[a-fA-F\d]{6})/g;
  const matches = input.match(regex);

  if (matches) {
    let currentIndex = 0;
    matches.forEach((match) => {
      let color;
      let percentage;

      if (match.startsWith("rgba")) {
        const values = match.match(/\d+/g);
        color = {
          r: parseInt(values[0]),
          g: parseInt(values[1]),
          b: parseInt(values[2]),
          a: values[3] ? parseFloat(values[3]) : 1,
        };
        percentage =
          currentIndex === 0 ? 0 : parseFloat(matches[currentIndex - 1]) * 100;
      } else if (match.startsWith("#")) {
        const hexValue = match.substr(1);
        const r = parseInt(hexValue.substr(0, 2), 16);
        const g = parseInt(hexValue.substr(2, 2), 16);
        const b = parseInt(hexValue.substr(4, 2), 16);
        color = { r, g, b, a: 1 };
        percentage =
          currentIndex === 0 ? 0 : parseFloat(matches[currentIndex - 1]) * 100;
      }

      colorStops.push({
        color: color,
        percentage: percentage,
      });

      currentIndex += color ? 4 : 2;
    });
  }
  let color = `rgba(${colorStops[0].color.r},${colorStops[0].color.g},${colorStops[0].color.b},${colorStops[0].color.a})`

  return color;
};

const baseColorBackgroundActive = computed(() => {
  if (props.activeBgColor.includes("linear-gradient")) {
    return getBasecolor(props.activeBgColor)
  } else {
    return props.activeBgColor;
  }
});

const baseColorBackgroundInActive = computed(() => {
  if (props.inActiveBgColor.includes("linear-gradient")) {
    return getBasecolor(props.activeBgColor)
  } else {
    return props.inActiveBgColor;
  }
});

const baseColorThumbActive = computed(() => {
  if (props.activeThumbColor.includes("linear-gradient")) {
    return getBasecolor(activeThumbColor)
  } else {
    return props.activeThumbColor;
  }
})

const baseColorThumbInActive = computed(() => {
  if (props.inActiveThumbColor.includes("linear-gradient")) {
    return getBasecolor(props.inActiveThumbColor)
  } else {
    return props.inActiveThumbColor;
  }
})
</script>

<style scoped lang="css">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch.thin {
  height: 14px;
  width: 44px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.switch.readonly {
  pointer-events: none;
}

.switch.disabled .slider {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: v-bind("inActiveBgColor");
  background-color: v-bind("baseColorBackgroundInActive");
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
  background: v-bind("inActiveThumbColor");
  background-color: v-bind("baseColorThumbInActive");
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

.thin .slider::before {
  content: "";
  height: 22px;
  width: 22px;
  left: -2px;
  bottom: -4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

input:checked + .slider {
  background: v-bind("activeBgColor");
  background-color: v-bind("baseColorBackgroundActive");
}

input:focus + .slider {
  box-shadow: 0 0 1px v-bind("activeBgColor");
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background: v-bind("activeThumbColor");
  background-color: v-bind("baseColorThumbActive");
}

input:checked + .slider.slider-thin:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background: v-bind("activeThumbColor");
  background-color: v-bind("baseColorThumbActive");
}
</style>
