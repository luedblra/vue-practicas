Vue.component('computed-pr',{
    data(){
        return{
            name:'Luis',
            lastname: 'Blanco'
        }
    },
    computed: {
        fullname(){
            return `Mi nombre es: ${this.name} ${this.lastname}`
        }
    },
    methods:{
        hello(){
            alert(this.fullname);
        }
    },
    template: `<div>
<h2>Methods</h2>
<p @click="hello">Pulsa aqui para ejecutar el emthod</p>

</div>`
});