Vue.component('parent-data',{
   template:`
<div>
    <h2>Accediendo al dato del cmp parent, desde el cmp hijo</h2>
    <p>{{$parent.appName}}</p>
</div>

` 
});