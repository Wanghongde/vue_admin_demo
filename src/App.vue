<template>
  <div class="app">
    <div>
      <svg-icon icon="password" class="test"></svg-icon>
      123132
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}

.test {
  padding: 6px 5px 6px 15px;
  color: red;
  vertical-align: middle;
  display: inline-block;
}
</style>
