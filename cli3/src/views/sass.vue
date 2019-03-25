<template>
  <div class="temp1">
    <p class="sass">Commin in Sass</p>
    <p class="main">
      <a href="" class="main-box">父选择器 &</a>
    </p>
    <p class="funky">
      属性嵌套 font
    </p>
    <p class="note">
      样式说明被注释了<br>
      /**/被编译<br>
      //不被编译
    </p>
    <p class="variable fs12">
      变量 以$开头 添加!global为全局作用域
    </p>
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
  $padding_vertical_8: 8px 0;
  p {
    background-color: #dedede;
  }
  .temp1 {
    background-color: #f5f5f5;
    padding: 12px 0;
    margin-bottom: 0;
    .sass {
      color: $red_color;
    }
  }

  //父选择器
  .main {
    &-box {
      color: #000;
    }
  }

  //属性嵌套
  .funky {
    font: {
      size: 2em;
      weight: bold;
      style: italic;
    }
  }

  //注释
  .note {
    /*
    * 文字颜色
    */
    color: green;
    //大小
    font-size: 18px;
  }
  
  //变量命名
  .variable {
    padding: $padding_vertical_8;
    $p12: 12px !global;
  }
  .fs12 {
    font-size: $p12;
  }
  
</style>
