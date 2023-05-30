<template>
<div>

  <Modal @closeModal="modalCheck = false" :원룸들="원룸들" :modalCheck = "modalCheck" :누른거 = "누른거"/>
  <div class="menu">
    <a v-for="(a,i) in menus" :key="i">{{a}}</a>
  </div>
  <Discount/>
  <Card @openModal="modalCheck = true; 누른거 = $event" :원룸= "원룸들[i]" v-for="(a,i) in 원룸들" :key="i"/>

</div>
  
</template>

<script>
import data from './data'
import Discount from './Discount.vue'
import Modal from './Modal.vue'
import Card from './Card.vue'

export default {
  name: 'App',
  data(){
    return {
      오브젝트 : {name : 'kim', age : 20},
      누른거 :  0,
      원룸들 : data,
      modalCheck : false,
      신고수 : [0,1,2],
      menus : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', ' 천호동원룸', '마포구원룸']
    }
  },
  methods : {
    increase(a,i){
      this.신고수[i]++
    }
  },

  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card
  }
}
</script>

<style>
body {
  margin: 0;
  text-align: center;
}
div {
  box-sizing: border-box;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  margin-top: 5px;
}
.menu {
  background : darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color : white;
  padding : 10px;
}

.black-bg {
  width:100%; height: 100%;
  background : rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
  text-align: center;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.white-bg p {
  font-weight: bold;
}
</style>
