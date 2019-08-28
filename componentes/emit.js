Vue.component('emit',{
    data(){
        return{
            carbrand:'toyota'
        }
    },
    template:`
<div>
    <h2>Emitir Eventos con vue</h2>
    <p @click="$emit('show_car_brand',carbrand)">Pulsa aqui para emitir un evento a la instancia Root de Vue</p>
</div>
`
})