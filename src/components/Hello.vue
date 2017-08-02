<template>
  <div class="hello">
    <ul>
     <li>{{count}}</li>
     <li>{{username}}</li>
     <li>{{userage}}</li>
        <button @click="adda">+1</button>
        <button @click="dela">-1</button>
    </ul>

    <ul v-for = "car in lists">
      <li>{{car.carname}}</li>
      <li>{{car.carprice}}</li>
    </ul>
    <button @click="tijiao">提交</button>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
        lists:[]
    }
  },
  computed:{
    ...mapState(['count','username','userage'])
  },
  mounted(){

  },
  methods:{
    ...mapActions({
      adda:'increment',
      dela:'decrement',
      tijiao:'getComplete'
     }),
    init(){
      this.$http.get('http://localhost:3001/api/cars')
        .then(res => {
           this.lists = res.data
           console.log(this.lists)
        })
    },
    tijiao(){
      this.$store.dispatch('getComplete').then(
            this.init()
      )
    }
    
    // tijiao(){
    //   this.$http.post('http://localhost:3001/api/cars',{carname:'bieke',carprice:'222'})
    //     .then(res=>{
    //       this.init();
    //     })
    // }
       
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
