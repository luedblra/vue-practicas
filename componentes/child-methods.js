Vue.component('child-methods',{
    data (){
        return{
            cmpchild:'mi data child'
        }  
    },
    methods:{
        showDatachild(){
            console.log('Este es el resulatado del metodo. data ',this.cmpchild);
        }
    },
    template:`
<div>
<h2>Accediendo al method del cmp hijo, desde el cmp padre</h2>
<h5>visuakiza la llamada en el console.log()</h5>
</div>

` 
});