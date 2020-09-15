<template>
  <div class="hello">
    <span v-if="control" style="margin-top: 20px; font-weight:bold; color: #2c3e50 ">{{"DENEME BAŞARILI"}}</span>
  </div>
</template>

<script>

  import PageOne from "../mixins/PageOne" ;
  export default {
    mixin : [PageOne]
  }
</script>

<style scoped>

</style>