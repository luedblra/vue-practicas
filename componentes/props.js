Vue.component('props',{
    props:{
        name:{
            type: String,
            require: true
        },
        surname:{
            type: String,
            require: true
        },
        edad:{
            type: Number,
            require: true,
            validator: value => {
                if(value < 18){
                    console.log('No eres mayor de edad');
                    return false;
                }
                return true;
            }
        }
    },
    template:`
<div>
    <h2>Props Con Vuejs 2</h2>
    <p> {{ name }} {{ surname }}, Edad: {{edad}} </p>
</div>
`
})