<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="🔍"  @input="search($event.target.value)"/>
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue'
import axios from 'axios'
import {useStore} from 'vuex'
export default {
    name : 'MyPage',
    props : {
        one : Number,
    },
    setup(props, context){
        let follower = ref([])
        let followerOriginal = ref([])
        // let test = reactive({name : 'kim'})
        
        onMounted(()=>{
        axios.get('/follower.json').then((res)=>{
            follower.value = res.data
            followerOriginal.value = [...res.data]
        })
    })



        function search(검색어){
            let newFollower = followerOriginal.value.filter((a)=>{
                return a.name.indexOf(검색어) != -1
            })
            follower.value = [...newFollower]
        }


       let { one } = toRefs(props)
       console.log(one.value);

    //    let 결과 = computed(()=>{return follower.value.length})
    //     console.log(결과.value)

    //     let store = useStore();
    //     console.log(store.state.name)   


    
        
        return {follower, search}
    },
    data(){
        return {

        }
    },
  
}
</script>

<style>

</style>