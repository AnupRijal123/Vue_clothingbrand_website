<template>
    <div v-if="selectedItem.length!==0" class="item-info-container">
       <div class="item-info-content-container">
     
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
                <div @click="selectImage(selectedItem[0].img1)" class="list-image-div" :class="{'active-image':selectedImage===selectedItem[0].img1}">
                    <img :src="require(`@/assets/items/${selectedItem[0].img1}`)" class="list-image"/>
                </div>

                <div  @click="selectImage(selectedItem[0].img2)" class="list-image-div" :class="{'active-image':selectedImage===selectedItem[0].img2}">
                    <img :src="require(`@/assets/items/${selectedItem[0].img2}`)" class="list-image"/>
                </div>

               </div>

               <div class="main-image-container">
                    <div class="scrollable-image-container"                  
                            

                            :class="{'move-scrollable-container-left':moveLeft,
                                    'move-scrollable-container-right':moveRight
                                    }"

        
                    >
                        <img :src="require(`../assets/items/${selectedItem[0].img1}`)" class="item-image"/>
                        <img :src="require(`../assets/items/${selectedItem[0].img2}`)" class="item-image"/>
                    </div>
                    <div class="tag" v-if="selectedItem[0].isSold||selectedItem[0].discountPercentage">
                            <p v-if="selectedItem[0].isSold">sold out</p>
                            <p v-if="!selectedItem[0].isSold && selectedItem[0].discountPercentage">
                                -{{selectedItem[0].discountPercentage}}%
                            </p>
                    </div>

                    <div @click="goLeft" class="left-button image-navigate-button">
                        <font-awesome-icon :icon="['fas', 'angle-left']" class="angle-icon"/>
                    </div>
                    <div @click="goRight" class="right-button image-navigate-button">
                        <font-awesome-icon :icon="['fas', 'angle-right']" class="angle-icon"/>
                    </div>


                </div>

                <div class="item-description-container d-flex">
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
                    <div v-if="!selectedItem[0].isSold" class="button-div">

                        <CustomWhiteButton text="add to cart"/>

                    </div>
                   </div>

                   <div class="size-div d-flex">
                    <p>size:</p>
                    <div 
                    
                    v-for="size in selectedItem[0].size" :key="size"
                    @click="selectSize(size)" 
                    :class="size===selectedSize?'active-size size-box':'size-box'">
                        <p>{{size}}</p>
                    </div>

                    <p v-if="!selectedItem[0].size">N/A</p>
                   </div>

                   <div class="description-and-review-div">
                        <div class="description-row">
                            <div @click="showDescription" class="description-heading d-flex">
                                <h3>Description</h3> 
                               
                                <font-awesome-icon v-if="showDescriptionDiv===false" :icon="['fas', 'angle-down']" class="icon angle-icon"/>
                                <font-awesome-icon v-if="showDescriptionDiv" :icon="['fas', 'angle-up']" class="icon angle-icon" />

                            </div>
                            <div :class="`description  ${showDescriptionDiv?'take-full-height':'description'}`"  >
                                <p class="heading-text">Features</p>
                                    
                                <div class="description-list">
                                    <li  v-for="description in selectedItem[0].description" :key="description">
                                        {{description}}
                                    </li> 
                                </div>

                                <p class="heading-text">Made in {{selectedItem[0].madeIn}}</p>

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
import CustomWhiteButton from '../components/CustomWhiteButton.vue';

export default{
    components:{
        CustomWhiteButton,
    },
    data(){
        return{
            itemID:null,
            allItems:AllItems,
            selectedItem:[],
            showDescriptionDiv:false,
            selectedImage:'',
            selectedSize:'',
            moveLeft:false,
            moveRight:false,
            showNotFound:false,
           
        }
    },
   mounted(){
    window.scrollTo(0,0);
    this.itemID=parseInt(this.$route.params.id);
       this.selectedItem=this.allItems.filter((item)=>{
            return item.id===this.itemID
        });
        console.log('selected item',this.selectedItem);
        this.selectedImage=this.selectedItem[0].img1;
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
    },
        selectImage(image){
        this.selectedImage=image;
        console.log(this.selectedImage);

        if(this.selectedImage===this.selectedItem[0]?.img1){
            this.goLeft();
        }
        if(this.selectedImage===this.selectedItem[0]?.img2){
            this.goRight();
        }


        },

        selectSize(size){
            this.selectedSize=size;
        },

        goLeft(){
            this.moveRight=false;
            this.moveLeft=true;
        },  

        goRight(){
            this.moveLeft=false;
            this.moveRight=true;
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
    padding-bottom:24px;
 }
 .images-list{
    flex-direction:column;
    gap:10px;

 }
 .list-image-div{
    width:60px;
    height:60px;
    cursor:pointer;
 }
 .active-image{
    border:2px solid #3a3b3c;
 }
 .list-image{
   width:100%;
   height:100%;
   object-fit:cover;
 }
 .main-image-container{
    width:500px;
    height:300px;
    position:relative;
    overflow:hidden;
}
.scrollable-image-container{
    display:flex;
    width:100%;
    height:100%;
}

.move-scrollable-container-left{
    animation:moveLeft 1s forwards;
}
@keyframes moveLeft{
    0%{
        transform:translateX(-500px);
    }
    100%{
        transform:translateX(0);
    }
}
.move-scrollable-container-right{
    animation:moveRight 1s forwards;
}
@keyframes moveRight{
    0%{
        transform:translate(0);
    }
    100%{
        transform:translateX(-500px);
    }
}

.tag{
    position:absolute;
    top:10px;
    left:10px;
}
.image-navigate-button{
    background-color:#ffffff;
    position:absolute;
    top:50%;
    cursor:pointer;
    padding:10px 20px;
    border-radius:50%;
}
.left-button{
    left:10px;
}
.right-button{
    right:10px;
}
.angle-icon{
    font-size:30px;
    color:rgba(128,128,128) !important ;
}

 .item-image{
    width:100%;
    height:100%;
    flex-shrink:0;
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

 .size-div{
    gap:10px;
    align-items:center;
    flex-wrap:wrap;
 }
 .size-box{
    width: 40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    border:1px solid rgba(128,128,128);
    border-radius:5px;
    transition:transform 0.3s ease;
 }
 .size-box:hover{   
    transform:scale(1.1);
 }
 .size-box p{
    color:rgba(128,128,128);
    text-align:center;

 }
 .active-size{
    transform:scale(1.2);
    border-color:#111;
 }
 .active-size p{
    color:#111;
    font-weight:600;
 }
 .active-size:hover{
    transform:scale(1.2);
 }

 .description-row{
    padding-bottom:10px;
    border-bottom:1px solid rgba(128,128,128);
 }
 
 .description-heading{
    justify-content:space-between;
    padding-bottom:10px;
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
 .description-list{
    padding-left:5px;
 }
 .take-full-height{
    height:120px;
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
        flex-direction:column;
    }
   
    .item-info-container{
        padding-top:320px;
    }
 
}
@media only screen and (max-width:550px){
    .main-image-container{
        width:300px;
    }
    @keyframes moveLeft{
    0%{
        transform:translateX(-300px);
    }
    100%{
        transform:translateX(0);
    }
}
@keyframes moveRight{
    0%{
        transform:translate(0);
    }
    100%{
        transform:translateX(-300px);
    }
}
}
</style>