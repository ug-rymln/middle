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
      <path d="M50 50 C 40 80 110 80 100 50" fill="transparent" stroke="blue" />
    </svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M50 50 Q 125 200 200 100" fill="transparent" stroke="red" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M50 50 C 80 100 200 100 180 50 S 125 200 200 100" fill="transparent" stroke="red" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M50 50 Q 130 160 20 200" fill="transparent" stroke="blue" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M50 50 L 80 80 A 30 50 0 0 1 165 165" fill="transparent" stroke="red"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
        </filter>
      </defs>
      <rect width="90" height="90" x="50" y="50" fill="yellow" stroke-width="3" filter="url(#f1)" stroke="green" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="f2" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <rect x="50" y="50" width="90" height="90" stroke="green" stroke-width="3" fill="blue" filter="url(#f2)" />
      <text x="150" y="150" fill="red" filter="url(#f2)">SVG</text>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: rgb(255, 255, 0);stop-opacity: 1" />
          <stop offset="100%" style="stop-color: rgb(255, 0, 0);stop-opacity: 1" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color: rgb(255, 255, 255);stop-opacity: 0" />
          <stop offset="100%" style="stop-color: rgb(0, 0, 255);stop-opacity: 1" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="50" fill="url(#grad2)" stroke-width="3" stroke="red" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M50 50 L150 50 C 160 60 160 70 150 80 L 50 80 C 40 70 40 60 50 50 Z" stroke="black" stroke-width="2" fill="transparent" />
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
