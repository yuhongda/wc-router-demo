<template>
  height:
  <select v-model="height">
    <option value="600px">600px</option>
    <option value="800px">800px</option>
  </select>
  text:
  <input v-model="titleText" />
  <scf-vitereactwebcomponents userName="bjzhoutao" :titleText="titleText" :height="height" />
</template>

<script>
import '@scf/vite-react-webcomponents/es/vue';

export default {
  name: 'App',
  data: () => ({
    height: '600px',
    titleText: 'ViteReactWebcomponents example with Vue v3!'
  })
};
</script>

<style lang="less" scoped>
select {
  margin-bottom: 10px;
  margin-right: 15px;
}

input {
  width: 300px;
}
</style>
