let myMixin = {
    mounted(){
        console.log("Mixin INIT")
        console.log(this.mixinData)
        this.test()
    },
    data(){
        return {
            mixinData: 'Minin Data'
        }
    },
    methods:{
        test(){
            console.log("test de from mixin");
        }
    }
};

Vue.component('mixins',{
    mixins: [myMixin],
    mounted(){
        console.log('Mounted from component with mixins')
    },
    data(){
        return {
            mixinData: 'Minin Data desde componente'
        }
    },
    template:`
<div>
    <h2>Mixins</h2>
    <p>{{mixinData}}</p>
</div>
`
});