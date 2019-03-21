<template>
  <div class="temp1">
    <p class="sass">Commin in Sass</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  .temp1 {
    background-color: #dedede;
    .sass {
      color: $red_color;
    }
  }
</style>
