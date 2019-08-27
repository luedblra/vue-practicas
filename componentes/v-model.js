Vue.component('v-model',{
    data (){
        return {
            framework:'Vue2 Js'
        }
    },
    template:`
<div>
    <h2>V-model</h2>
    <input v-model="framework" />
    <p>El Framework escogido es: {{framework}}</p>
</div>
`
})