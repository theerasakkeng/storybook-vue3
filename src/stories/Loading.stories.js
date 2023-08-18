import MyLoading from '../components/loading/loading.vue';

export default {
  title: 'Example/Loading',
  component: MyLoading,
  tags: ['autodocs'],
  argTypes:{
    blur: {
      control: {
        type: 'text',
      },
    }
  }
};

export const Default = {};