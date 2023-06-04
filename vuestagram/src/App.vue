<template>
  <div class="header">
    <ul class="header-button-left" @click="step--">
    <li>Cancel</li>
    </ul>
    <ul class="header-button-right" >
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo"/>
  </div>

  <h4>안녕 {{$store.state.name}} {{$store.state.age}}</h4>
  <button @click="이름변경()">버튼</button>
  <button @click="나이변경(10)">버튼2</button>

  <p>{{$store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <!-- <p>{{now2}}  {{카운터}}</p>
  <button @click="카운터++">버튼</button> -->

  <p>{{name}} {{내이름}} {{age}}</p>

  <Container :insdata = "insdata" :step="step" :imgUrl="imgUrl" @writeContent="작성한글=$event" :select="select"/>

  <button @click="more">더보기{{누른횟수}}</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>


  <!-- <div v-if="누른거 == 0">내용0</div>
  <div v-if="누른거 == 1">내용1</div>
  <div v-if="누른거 == 2">내용2</div>
  <button @click="누른거 = 0">버튼0</button>
  <button @click="누른거 = 1">버튼1</button>
  <button @click="누른거 = 2">버튼2</button> -->

</template>

<script>
import Container from './components/Container.vue'
import data from './data'
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'


export default {

  name: 'App',
  data(){
    return {
      insdata : data,
      누른횟수 : 0,
      step : 0,
      imgUrl : '',
      작성한글 : '',
      select : '',
      카운터 : 0,
      
    }
  },
  mounted(){
    this.emitter.on('select', (필터)=>{
      this.select = 필터

    });
  },
  methods : {
    ...mapMutations(['setMore', 'like', '이름변경','나이변경'])

  ,
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.누른횟수}.json`)
      .then((res)=>{
        this.insdata.push(res.data)
        this.누른횟수++
      })
      .catch((err)=>{
        alert(err)
      })
      // if문으로 해결
      // this.누른횟수++
      // if(this.누른횟수 === 1){
      // axios.get('https://codingapple1.github.io/vue/more0.json')
      // .then((res)=>{
      //   this.insdata.push(res.data)
      // })
      // .catch((err)=>{
      //   alert(err)
      // })
      // } else if(this.누른횟수 === 2){
      //   axios.get('https://codingapple1.github.io/vue/more1.json')
      //   .then((res)=>{
      //     this.insdata.push(res.data)
      //   })
      //   .catch((err)=>{
      //     alert(err)
      //   })
      // }
    },
    upload(e){
     let file =  e.target.files
     console.log(file[0].type)
     let url =  URL.createObjectURL(file[0])
     this.imgUrl = url
     this.step = 1
    },
    publish(){
      var 내게시물 = {
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.imgUrl,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.작성한글,
      filter: this.select,
      };
      // 왼쪽의 array에 자료집어넣어줌
      this.insdata.unshift(내게시물)
      this.step = 0;
    },
    // methods 함수는 사용할 때마다 실행됨
    // now(){
    //   return new Date()
    // }
  },
  // 함수만드는 methods랑 동일 ( 사용해도 실행되지 않음) 처음 실행하고 값을 간직함 => 계산결과저장용 함수들
  computed : {
    //  now2(){ // 함수 () 버튼뺴고 써야함 꼭 return이 있어야함
    //   return new Date()
    // }
    name(){
      return this.$store.state.name
    },
    ...mapState(['name', 'age', 'more']),
    ...mapState({ 내이름 :'name'}) // 다른이름으로 작명해서 쓰고 싶을때
  },
  components: {
    Container,
    data
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
