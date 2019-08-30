Vue.component('condicional-v-if',{
    data() {
        return {
           edad:10
        }
    },
    template:`
<div>
    <h2>Condicional V-if</h2>
    <input v-model="edad">
    <p v-if="edad < 18">Es menor de edad</p>
    <p v-else-if="edad >= 18 && edad < 30">Es mayor de edad y menor a 30</p>
    <p v-else-if="edad >= 30 && edad < 60 ">Es mayor de 30 y menor a 60</p>
    <p v-else>Es mayor a 60</p>
        
</div>

`
});