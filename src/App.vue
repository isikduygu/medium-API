<template>
  <div id="app">
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style scoped>
.frame-area{
  border: 1px solid gainsboro;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
#app{
  margin-top:60px;
}
.content{
  margin-top:100px
}
</style>
