<template>

 <div @click="fire" class="filter-item" :class="필터" :style="{backgroundImage : `url(${imgUrl})`}">
  <!-- <slot :msg="msg"></slot> -->
  <slot></slot>

 </div> 
</template>

<script>

export default {
    name : 'FilterBox',
    data(){
      return {
        // msg : 'hello',
        select : ''
      }
    },
    methods : {
      fire(){
        // this.emitter.emit('작명','데이터')
        this.emitter.emit('select',this.필터)
      }
    },
    props : {
        imgUrl : Blob,
        필터 : String,
       
    },
    
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>