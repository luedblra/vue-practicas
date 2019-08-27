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
    template: `<div>
<h2>Computed</h2>
<p>{{fullname}}</p>

</div>`
});