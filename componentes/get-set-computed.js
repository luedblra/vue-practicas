Vue.component('get-set-computed',{
    data(){
        return{
            amount:0,
        }
    },
    computed: {
        amountFormatted:{
            get(){
                return `${this.amount}`
            },
            set(newValue){
                this.amount= newValue+`1`;
            }
            
        }
    },
    template: `<div>
<h2>Get and Set computed </h2>
<input v-model="amount"/>
<p>{{amountFormatted | currency_filter('$')}}</p>

</div>`
});