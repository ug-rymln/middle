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
    <p class="operations">
      运算
    </p>
    <p class="defaultc">
      !default关键字默认赋值
    </p>
    <p class="extend_font green">
      @extend .extend
    </p>
    <p class="mixin">
      mixin混合指令<br>
      @mixin可以用 = 表示<br>
      @include可以用 + 表示
    </p>
    <p class="function">
      函数指令 @function 
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

  //运算
  .operations {
    $height: 80px;
    width: (500px / 2);
    height: $height / 2;
    // margin-left: 4px + (10px / 2);
    margin: 4px + 2px auto;
    $font-size: 14px;
    $line-height: 24px;
    font: #{$font-size}/#{$line-height} PingFang SC;
    color: #020203 + #7d83d3;
  }

  //默认赋值
  .defaultc {
    $content: '这是默认的值' !default;
    content: $content;
  }
  
  //延伸
  .extend {
    color: blue;
    font-size: 20px;
    font-style: italic;
  }
  .extend.green {
    color: green;
  }
  .extend_font {
    @extend .extend;
    color: red;
  }

  //mixin混合
  @mixin large-text($px, $color, $width: 200px) {
    font: {
      family: Arial;
      size: $px;
      weight: bold;
    }
    color: $color;
    width: $width;
  }
  .mixin {
    @include large-text(14px,#ff0000);
  }

  //...

  //函数指令
  $grid-width: 40px;
  $gutter-width: 10px;
  @function grid-width($n) {
    @return $n * $grid-width + ($n - 1) * $gutter-width;
  }
  .function {
    width: grid-width(5);
  } 

</style>
