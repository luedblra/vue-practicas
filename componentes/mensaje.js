Vue.component('message',{
    data(){
        return{
            mensaje:'Hola mundo'
        }
    },
    template: `<div>
    <h2>Componente</h2>
    <p>{{mensaje}}</p>

</div>`
});