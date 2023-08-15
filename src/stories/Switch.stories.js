import MySwitch from '../components/switch/switch.vue';

export default {
  title: 'Example/Switch',
  component: MySwitch,
  tags: ['autodocs'],
};

export const Default = {};

export const LinearColors = {
  args: {
    activeBgColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 10%, rgba(0,212,255,1) 100%)",
    modelValue:true
  },
}

export const Disabled = {
  args: {
    disabled: true,
    modelValue:true
  },
};

export const Readonly = {
  args: {
    readonly: true,
  },
};