<template>
  <div>
    <div v-if="step == 0">
    <Post :insdata="$store.state.insdata[i]" v-for="(a,i) in $store.state.insdata" :key="i" :select="select" :i="i"/>
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
  <div :class="select" class="upload-image" :style="{backgroundImage : `url(${imgUrl})`}"></div>
  <div class="filters">

   <FilterBox :imgUrl="imgUrl" v-for="(필터,i) in 필터목록" :key="i" :필터="필터" >
    <!-- <template v-slot:default="msg">{{msg.msg}}</template> -->
    <span>{{필터}}</span>
   </FilterBox>


  </div>
  </div>
<!-- 글작성페이지 -->
<div v-if="step == 2">
  <div :class="select" class="upload-image" :style="{backgroundImage : `url(${imgUrl})`}"></div>
  <div class="write">
    <textarea @input="writing" class="write-box">write!</textarea>
  </div>
  </div>

  <div v-if="step == 3">
    <MyPage :one="1"/>
  </div>



</div>
</template>

<script>
import FilterBox from './FilterBox.vue'
import Post from './Post.vue'
import Filter from '../Filter'
import MyPage from './MyPage.vue'

export default {
    
    // eslint false
    name  : 'Container',
    data(){
        return {
            필터목록 : Filter,
            select : ''
        }
    },
 
    methods : {
        writing(e){
            this.$emit('writeContent', e.target.value)
        }
    },
    components : {
        Post,
        FilterBox,
        MyPage
    },
    props : {
        insdata : Array,
        step : Number,
        imgUrl : Blob,
        select : String
    }

}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>