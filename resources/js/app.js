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
            message:[],
            user:[],
            color:[]
        },
        typing:''
    },
    watch:{
        message(){
            Echo.private('chat')
                .whisper('typing', {
                    name: this.message
                });
        }
    },
    methods:{
        send(){
            if (this.message.length){
                this.chat.message.push(this.message);
                this.chat.user.push('you');
                this.chat.color.push('success');
                axios.post('/send',{
                    message:this.message
                }).then(response=>{
                    console.log(response);
                    this.message = '';
                }).catch(err=>console.log(err));
            }
        }
    },
    mounted(){
        Echo.private('chat')
            .listen('ChatEvent', (e) => {
                this.chat.message.push(e.message);
                this.chat.user.push(e.user);
                this.chat.color.push('info')
            })
            .listenForWhisper('typing', (e) => {
                if (e.name){
                    this.typing = 'typing...';
                }else {
                    this.typing = '';
                }
            });
    }
});
