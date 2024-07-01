<template>
    <div class="display-container">
        <div class="display-content">
            <div v-if="showNotFound">
                <NoItemFoundComponent/>
            </div>
            <ItemsComponent v-if="filteredItems.length!==0" :itemsArray="filteredItems"/>
        </div>
        

    </div>
</template>


<script>
import ItemsComponent from '../components/ItemsComponent';
import AllItems from '../data/allItems.json';
import NoItemFoundComponent from '../components/NoItemFoundComponent.vue';
export default{
    components:{
        ItemsComponent,
        NoItemFoundComponent
    },

    data(){
        return{
            allItems:AllItems,
            filteredItems:[],
            showNotFound:false,
        }
    },

    computed:{
        routeName(){
            return this.$route.params;
        },
    },
    mounted(){
        this.displayItemFirstLoad();
        window.scrollTo(0,0);
    },
    methods:{
        displayItemFirstLoad(){
            console.log(this.routeName.menuName)
            if(this.routeName.menuName==='shop'){
                this.filteredItems=this.allItems;
                this.showNotFound=false;
            }
            else if(this.routeName.menuName==='sale'){
                this.filteredItems=this.allItems.filter((item)=>{
                    return item.isSale===true;
                });
                this.showNotFound=false;
            }
                
            else if(this.routeName.menuName==='casuals'){
                this.filteredItems=this.allItems.filter((item)=>{
                    return item.category==='casuals'
                });
                this.showNotFound=false;
            }
            else if(this.routeName.menuName==='ethnicsWear'){
                this.filteredItems=this.allItems.filter((item)=>{
                    return item.category==='ethnics'
                });
                this.showNotFound=false;
            }
            else if(this.routeName.menuName==='accessories'){
                this.filteredItems=this.allItems.filter((item)=>{
                    return item.category==='accessories'
                });
                this.showNotFound=false;
            }
            else{
                this.showNotFound=true;
            }
          
            
        }
    },
    watch:{
        routeName(){
            //route name change vayo vane yo function call hunxa
            this.displayItemFirstLoad();
        }
    }
   
 
  


}
</script>

<style scoped>
.display-container{
    background-color:#3a3b3c;
    padding-top:200px;
}

.display-content{
    background-color:#ffffff;
    padding:20px 0px;
}
@media only screen and (max-width:768px){
    .display-container{
        padding-top:320px;
    }
}
</style>