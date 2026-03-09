const { createApp } = Vue;

createApp({
    data(){
        return{
            brojac: 0,
            upozori: false
        }
    },
    methods:{
        uvecaj(){
            this.brojac++;
            this.upozori = false;
        },
        umanji(){
            if(this.brojac > 0){
                this.brojac--;
            }else{
                this.upozori = true;
            }
        }
    }
}).mount('#app');