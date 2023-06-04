import { createStore } from "vuex";
import insdata from '../src/data'
import axios from "axios";

const store = createStore({
    state (){
        return {
            name : 'kim',
            age : 30,
            insdata : insdata,
            more : {},

        }
    },
    mutations : {
        이름변경(state){
         state.name = 'park'
        },
        나이변경(state, payload){
            state.age = state.age + payload
        },
        like(state,payload){
            state.insdata[payload].liked = !state.insdata[payload].liked
            if(state.insdata[payload].liked == true){
                state.insdata[payload].likes++
            } else {
                state.insdata[payload].likes--
            }
        },
        setMore(state, data){
            state.more = {data}
        }
       
    },
    // 모든 ajax 하는 곳 (또는 오래걸리는 작업들)
    actions : {
        getData(context){ //context는 store
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((res)=>{
                context.commit('setMore', res.data)
            })
        }
    }
})

export default store;