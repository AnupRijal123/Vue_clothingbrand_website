<template>
    <div class="display-container">
        <div class="display-content">
            <h1>Display items</h1>
        <h2>{{ routeName.menuName }}</h2>
            <!-- <ItemsComponent :itemsArray="allItems"/> -->
        {{ allItems }}
        <h1>{{ filteredItems }}</h1>
        </div>
        

    </div>
</template>


<script>
// import ItemsComponent from '../components/ItemsComponent';
import AllItems from '../data/allItems.json';
export default{
    // components:{
    //     ItemsComponent,
    // },

    data(){
        return{
            allItems:AllItems,
            filteredItems:[],
        }
    },

    computed:{
        routeName(){
            return this.$route.params;
        },
    },
    mounted(){
        this.displayItemFirstLoad();
    },
    methods:{
        displayItemFirstLoad(){
            console.log(this.routeName.menuName)
            if(this.routeName.menuName==='shop'){
                this.filteredItems=this.allItems;
            }
            if(this.routeName.menuName==='sale'){
                this.filteredItems=this.allItems.filter((item)=>{
                    return item.isSale===true;
                });
            }
                
            if(this.routeName.menuName==='casuals'){
                this.filteredItems=this.allItems.filter((item)=>{
                    return item.category==='casuals'

                });
            }
            if(this.routeName.menuName==='ethnicsWear'){
                this.filteredItems=this.allItems.filter((item)=>{
                    return item.category==='ethnics'
                });
            }
            if(this.routeName.menuName==='accessories'){
                this.filteredItems=this.allItems.filter((item)=>{
                    return item.category==='accessories'
                });
            }
        }routeName(ro
    },
    watch:{
        routeName(routename){
            console.log('route name',routename.menuName);

            this.displayItemFirstLoad();
           

        }
    }
   
 
  


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