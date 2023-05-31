<template>
<div>

  <!-- <div class="start" :class="{end : modalCheck }"> -->
  
  <Modal @closeModal="modalCheck = false" :원룸들="원룸들" :modalCheck = "modalCheck" :누른거 = "누른거"/>


  

 
  <!-- </div> -->
  <div class="menu">
    <a v-for="(a,i) in menus" :key="i">{{a}}</a>
  </div>

  <Discount v-if="showDiscount == true"/>






  <button @click="lowSort">낮은가격순</button>
  <button @click="highSort">높은가격순</button>
  <button @click="strSort">가나다순</button>
  <button @click="priceSort">50만원 이하상품 보기</button>
  <button @click="sortBack">되돌리기</button>
  <Card @openModal="modalCheck = true; 누른거 = $event" :원룸= "원룸들[i]" v-for="(a,i) in 원룸들" :key="i"/>

</div>

  
</template>

<script>
import data from './data'
import Discount from './Discount.vue'
import Modal from './Modal.vue'
import Card from './Card.vue'

setInterval(()=>{
  // 1초마다 내부 코드 실행됨
}, 1000)



export default {
  name: 'App',
  data(){
    return {
      showDiscount : true,
      원룸들오리진 : [...data],
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
    },
    lowSort(){
      this.원룸들.sort((a,b)=>{
        return a.price-b.price
      })
    },
    highSort(){
      this.원룸들.sort((a,b)=>{
        return b.price-a.price
      })
    },
    strSort(){
      this.원룸들.sort((a,b)=>{
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
      })
    },
    priceSort(){
      this.원룸들 = this.원룸들.filter((a)=> {
       return a.price <= 500000
      }).sort((a,b)=>{
       return a.price-b.price
      })

    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리진];
    }
  },
  // html 생성전 데이터만 존재할때
  created(){
    // 서버에서 데이터가져오는 코드
  },
  // mounted(){
  //   setTimeout(()=>{
  //     this.showDiscount = false
  // },2000)
  // },
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card
  }
}
</script>

<style>


.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

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
