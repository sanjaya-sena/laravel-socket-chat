require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll);

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('message', require('./components/Message.vue').default);

const app = new Vue({
    el: '#app',
    data: {
        message:'',
        chat:{
            message:[]
        }
    },
    methods:{
        send(){
            if (this.message.length){
                this.chat.message.push(this.message);
                this.message = '';
            }
        }
    }
});
