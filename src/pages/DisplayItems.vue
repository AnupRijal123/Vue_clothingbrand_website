<template>
    <div class="display-container">
        <div class="display-content">
            <h1>Display items</h1>
        <h2>{{ routeName.menuName }}</h2>
        <h2>{{ routeName.menuName }}</h2>

        <h2>{{ routeName.menuName }}</h2>



        <h2>{{ routeName.menuName }}</h2>
        <h2>{{ routeName.menuName }}</h2>
        <h2>{{ routeName.menuName }}</h2>
        <h2>{{ routeName.menuName }}</h2>
        <h2>{{ routeName.menuName }}</h2>

        </div>
        

    </div>
</template>


<script>
export default{
    
    computed:{
        routeName(){
            return this.$route.params;
        }
    },
   
 
  


}
</script>

<style>
.display-container{
    background-color:red;
    padding-top:200px;
}


@media only screen and (max-width:768px){
    .display-container{
        padding-top:320px;
    }
}
</style>