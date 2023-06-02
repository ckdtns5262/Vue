 <template>
    
 <div class="discount" v-if="showDiscount == true">
    <h4>지금 결제하면 {{counting}}% 할인</h4>
  </div>
 </template>
 
 <script>
 export default {
    name : 'Discount',
    data(){
      return {
         counting : 30,
         showDiscount : true


      }
    },
    methods : {
     
    },
   mounted(){
    let interval = setInterval(()=>{
         this.counting--;
         if(this.counting == 0){
            clearInterval(interval)
            this.showDiscount = false
         }
      },500)
   }
 }
 </script>
 
 <style>
 
 </style>
 
