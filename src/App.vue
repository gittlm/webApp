<template>
  <div id="app">
    <HOME></HOME>
    <FootTab></FootTab>
  </div>
</template>

<script>
import HOME from '@/pages/home/HOME.vue'
import FootTab from '@/pages/FootTab/FootTab.vue'

export default {
  name: 'App',
  components:{
    HOME,
    FootTab
  }
}
</script>

<style scoped>

</style>
