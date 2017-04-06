<template>
  <div :class="['c-vip', class]">
  <image class="c-vip-img" v-if="pic"
    :src="pic">
    <p class="c-vip-text" v-if = "grade > 0"> 我的等级</p>
      <p class="c-vip-text" v-else> 暂未开通</p>
    <p class="c-vip-text"> 我的等级</p>
    <p class="c-vip-text2" v-if = "grade > 0">VIP{{grade}}</p>
    <p class="c-vip-text3" v-if="desc">{{desc}}</p>
   <button class="c-vip-button" v-if ="grade > 0"> 升级VIP</button>
   <button class="c-vip-button" v-if ="grade = 0"> 开通VIP</button>
  </div>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    grade: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="styles/components/vip"></style>
