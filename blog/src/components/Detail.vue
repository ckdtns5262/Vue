<template>

  <h4>상세페이지</h4>
  <h5>{{blog[$route.params.id].title}}</h5>
  <p>{{blog[$route.params.id].content}} </p>
  <router-view></router-view>
</template>

<script>
export default {
    name : 'Detail',
    props : {
        blog : Array
    }

}
</script>

<style>

</style>