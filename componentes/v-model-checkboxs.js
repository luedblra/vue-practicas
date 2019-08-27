Vue.component('v-model-checkboxs',{
    data(){
        return {
            frameworks:[]
        }
    },
    template:`
<div>
    <h2>Select Checkbox v-model</h2>
    <input v-model="frameworks" type="checkbox" id="vue" value="vue 2"/>
    <label for="vue">Vue 2</label>
    <input v-model="frameworks" type="checkbox" id="angular" value="Angular"/>
    <label for="angular">Angular</label>
    <input v-model="frameworks" type="checkbox" id="reactjs" value="ReactJs"/>
    <label for="reactjs">ReactJs</label>
    <p>Los frameworks Selecionados son: {{frameworks}}</p>
</div>
`
})