<template>
<Transition name="fade">
  <div class="black-bg" v-if="modalCheck == true">
    <div class="white-bg">
    <BIconX class="x-icon" @click="close"/>
      <img :src="원룸들[누른거].image" class="room-img">
      <Discount/>
      <h4>Title : {{원룸들[누른거].title}}</h4>
      <p>Content :{{원룸들[누른거].content}}</p>
      <input @input="changeKeyword" /><!--@input=" month = $event.target.value"-->
      <!-- <textarea v-model="month"></textarea>
      <select v-model="month">
        <option>123</option>
        <option>1223</option>
        <option>12344</option>
      </select> -->
      <!-- <input type="range" min="1" max="12"> -->
      <p>{{month}}개월 선택함 : Price : {{원룸들[누른거].price * month}}원</p>
    </div>
  </div>
  </Transition>
</template>
<script>
import {BIconX} from 'bootstrap-icons-vue'
import Discount from './Discount.vue'

export default {
 name : 'Modal',
  data(){
    return {
       month : 0,

    }
 },
  beforeUpdate(){
  if(this.month == 2) {
    alert('2개월은 어렵네요')
  }
 },
 watch : {
   month(input){
    // 정규 표현식const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/
    if(isNaN(input) === true){
      alert('숫자만 입력가능합니다')
      this.month = "";
    } if(input >= 13){
      alert('최대 12개월까지 가능합니다')
      this.month = 12;
    } else if(input < 1){
      alert('최소 1개월부터 가능합니다')
      this.month = 1
    } 
    // if(typeof(input) === 'string'){
    //   alert('숫자만 입력하세요')
    // } 
  },
 },

  methods : {
   close(){
    this.$emit('closeModal')
   },
   changeKeyword(e){
    this.month = e.target.value
   }
 },
 props : {
  원룸들 : Array,
  modalCheck : Boolean,
  누른거 : Number
 },


components: {
           BIconX,
           Discount
        }
}

</script>

<style>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
}

</style>