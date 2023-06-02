<template>
  <!-- <div>
    <h5 @click="$router.push('/detail/0')">{{blog[0].title}}</h5>
    <p>{{blog[0].date}}</p>
  </div>
    <div>
    <h5>{{blog[1].title}}</h5>
    <p>{{blog[1].date}}</p>
  </div>
   <div>
    <h5>{{blog[2].title}}</h5>
    <p>{{blog[2].date}}</p>
  </div> -->

  <div v-for="(a,i) in blog" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{a.title}}</h5>
    <p>{{a.content}}</p>
  </div>



</template>

<script>
export default {
    name : 'List',
    data(){
      return {
       
      }
    },
    props : {
      blog : Array
      }

}

</script>

<style>

</style>