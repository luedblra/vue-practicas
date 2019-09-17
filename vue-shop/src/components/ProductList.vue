<template>
<div>
    <p>Cantidad de productos: {{products.length}}</p>
    <div v-if="products.length" >
        <paginate name="products" :list="products" :per="perPage">
            <p v-for="product in paginated('products')" >{{product.name}} </p>
        </paginate>
        <paginate-links for="products" :classes="{
                                                 'ul':'pagination',
                                                 'li':'page-item',
                                                 'li > a':'page-link'
                                                 }" ></paginate-links>

    </div>
    <b-alert v-else show variant="info"> No hay productos que mostrar</b-alert>
    </div>
</template>

<script>
    import {mapActions,mapMutation,mapState} from 'vuex'
    export default {
        mounted(){
            this.fetchProducts()
        },
        data (){
            return {
                paginate:['products'],      
                perPage:5
            }
        },
        computed:{
            ...mapState('products',['products'])  
        },
        methods:{
            //              modulo , action
            ...mapActions('products',['fetchProducts'])
        }
    }
</script>