<template>
  <div>
    <button type="submit" title="点击提交" @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'Task',
  methods: {
    submit() {
      console.log('submit');
    }
  }
};
</script>

<style scoped></style>
