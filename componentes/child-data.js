Vue.component('child-data',{
    data (){
      return{
          childName:'mi data child'
      }  
    },
   template:`
<div>
    <h2>Accediendo al dato del cmp hijo, desde el cmp padre</h2>
<h5>visuakiza el dato en el console.log()</h5>
</div>

` 
});