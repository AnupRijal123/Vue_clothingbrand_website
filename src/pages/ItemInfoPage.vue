<template>
    <div v-if="selectedItem.length!==0" class="item-info-container">
       <div className="item-info-content-container">
        <div class="item-info-content">
            <div class="item-info-heading">
                <div class="breadcrumb">
                    <p @click="goToHome" class="breadcrumb-title">Home</p>
                    <p class="breadcrumb-seprator">/</p>
                    <p @click="goToCategory(selectedItem[0].category)" class="breadcrumb-title">{{selectedItem[0].category}}</p>
                    <p class="breadcrumb-seprator">/</p>
                    <p>{{selectedItem[0].name}}</p>
            </div>
            </div>

            <div class="item-display-div d-flex">
               <div class="images-list d-flex">
                <div className="list-image-div active-image">
                    <img :src="require('@/assets/items/item1.jpg')" class="list-image"/>
                </div>

                <div className="list-image-div">
                    <img :src="require('@/assets/items/item1.jpg')" class="list-image"/>
                </div>

               </div>

               <div>
                    <img :src="require('../assets/items/item1.jpg')" class="item-image"/>
               </div>

                <div className="item-description-container d-flex">
                   <div>
                    <h2>{{ selectedItem[0].name }}</h2>
                    <div class="price-div d-flex">
                        <s v-if="selectedItem[0].discountPercentage">
                            NPR {{selectedItem[0].price}}
                        </s>
                        <p v-if="selectedItem[0].discountPercentage">
                            NPR
                            {{ selectedItem[0].price-((selectedItem[0].discountPercentage/100)*selectedItem[0].price) }}
                        </p>
                        <p v-if="!selectedItem[0].discountPercentage">NPR {{selectedItem[0].price}}</p>
                    </div>
                    <p v-if="selectedItem[0].isSold">Out of stock</p> 
                   </div>

                   <div class="description-and-review-div">
                        <div className="description-row">
                            <div @click="showDescription" class="description-heading d-flex">
                                <h3>Description</h3> 
                               
                                <font-awesome-icon v-if="showDescriptionDiv===false" :icon="['fas', 'angle-down']" class="icon angle-icon"/>
                                <font-awesome-icon v-if="showDescriptionDiv" :icon="['fas', 'angle-up']" class="icon angle-icon" />

                            </div>
                            <div :class="`description  ${showDescriptionDiv?'take-full-height':'description'}`"  >
                                <p class="heading-text">Features</p>
                                    
                                <div>
                                    <li>hello</li>
                                    <li>bye</li>
                                    <li>hello</li>
                                </div>

                                <p class="heading-text">Made in china</p>

                            </div>
                        </div>
                   </div>

                </div>
            </div>


        </div>

       </div>
    </div>
</template>


<script>
import AllItems from '../data/allItems.json';

export default{
    data(){
        return{
            itemID:null,
            allItems:AllItems,
            selectedItem:[],
            showDescriptionDiv:false,
           
        }
    },
   mounted(){
    this.itemID=parseInt(this.$route.params.id);
       this.selectedItem=this.allItems.filter((item)=>{
            return item.id===this.itemID
        });
        console.log('selected item',this.selectedItem);

   },
   methods:{
    showDescription(){
        this.showDescriptionDiv=!this.showDescriptionDiv;
    },
    goToHome(){
        this.$router.push('/');
    },
    goToCategory(categoryName){
        console.log(categoryName)
        if(categoryName==='casuals'){
            this.$router.push('/categories/casuals');
        }
        if(categoryName==='ethnics'){
            this.$router.push('/categories/ethnicsWear');
        }
        if(categoryName==='accessories'){
            this.$router.push('/categories/accessories');
        }
    }
   }

   }
   


</script>

 <style scoped>
 .item-info-container{
    background-color:#3a3b3c;
    padding-top:200px;
 }
 .item-info-content-container{
    background-color:#ffffff;
 }
 .item-info-content{
    width:85%;
    margin:auto;
 }
.item-info-heading{
    padding:24px 0px;
}
 .breadcrumb{
    display:flex; 
    flex-wrap:wrap;   
    gap:5px;
 }
 
 .breadcrumb-title{
    color:rgba(128,128,128);
    font-weight:bold;
    cursor:pointer;
    transition:all 0.5s ease;
 }
 .breadcrumb-title:hover{
    color:#ca94a1;
    transform:scale(1.1);
 }
 .breadcrumb-seprator{
    color:rgba(128,128,128);
 }
 .item-display-div{
    gap:20px;
    flex-wrap:wrap;
 }
 .images-list{
    flex-direction:column;
    gap:10px;

 }
 .list-image-div{
    width:60px;
    height:60px;
 }
 .active-image{
    border:2px solid #3a3b3c;
 }
 .list-image{
   width:100%;
   height:100%;
   object-fit:cover;
 }
 .item-image{
    width:500px;
    height:300px;
 }
 .item-description-container{
    flex:1;
    padding:10px;
    flex-direction:column;
    gap:50px;
 }
 .price-div{
    align-items:center;
    gap:10px;
    padding:15px 0px;
 }

 s{
    color:rgba(128,128,128);
 }

 .description-row{
    padding-bottom:15px;
    border-bottom:1px solid rgba(128,128,128);
 }
 .description-heading{
    justify-content:space-between;
    padding-bottom:15px;
    cursor:pointer;
 }
 .heading-text{
    font-weight:bold;
    text-transform:uppercase;
 }
 .angle-icon{
    color:rgba(128,128,128);
 }
 .description{
    display:flex;
    flex-direction:column;
    gap:10px;
    height:0px;
    overflow:hidden;
    transition:height 0.5s ease;
 }
 .take-full-height{
    height:140px;
    overflow-y:scroll;
 }
 .take-full-height::-webkit-scrollbar{
    background-color: rgba(128, 128, 128, 0);
    width: 8px;    
 }
 .take-full-height::-webkit-scrollbar-thumb{
    background-color:rgba(128,128,128);
    border-radius:10px;
 }

@media only screen and (max-width:768px){
    .images-list{
        flex-direction:row; 
    }
    .item-display-div{
        background-color:purple;
        flex-direction:column;
    }
    .item-image{
        width:90%;
    }
    .item-info-container{
        padding-top:320px;
    }
 
}
</style>