import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.prototype.$http=axios
Vue.use('Vuex');
const actions = {
	 increment({commit}){
            commit("INCREMENT")
        },
     decrement({commit}){
            commit("DECREMENT")
        },
     getComplete () {
     	for(let i=0;i<10;i++){
			setTimeout(()=>{
			  console.log(i)
			 },1000)
     	}
		   
    }
}	
export default actions
