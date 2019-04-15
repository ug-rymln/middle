<template>
  <div class="temp1">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
     <rect width="200" height="200" fill="silver" stroke-width="3" stroke="green" opacity="0.5" x="30"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <circle cx="52" cy="52" r="50" fill="red" stroke="black" stroke-width="2" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <ellipse cx="100" cy="100" rx="50" ry="30" fill="green" stroke="red" stroke-width="3" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <polygon points="30,60 45,30 60,40 90,50" fill="black" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <polyline points="30,60 45,30 50,100" stroke-width="2" fill="none" stroke="red" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black" />
      <path d="M10 120 h 80 v 80 h -80 Z" fill="transparent" stroke="red" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M50 50 C 40,80 110,80 100,50" fill="transparent" stroke="blue" />
    </svg>
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
    padding: 12px;
    background-color: #170b0b;
    svg {
      width: 300px;
      height: 300px;
      border: 1px solid #dedede;
      background-color: #f5f5f5;
      margin: 20px;
    }
  }
</style>
