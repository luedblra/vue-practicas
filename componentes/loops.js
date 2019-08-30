Vue.component('loop',{
    data() {
        return {
            frameworks:[
                {id:1, name:"Laravel"},
                {id:2, name:"Vue"},
                {id:6, name:"Angular"},
                {id:8, name:"Django"}
            ]
        }
    },
    template:`
<div>
    <ul v-if="frameworks.length">
        <li v-for="(framework,index) in frameworks" :key="framework.id">
            Index: {{index}} - ID: {{ framework.id}} - Nombre: {{framework.name }}.
        </li>
    </ul>
</div>

`
});