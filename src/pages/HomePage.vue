<template>
    <div>
        <div class="poster-container">
            <div class="poster-image-div">
                <img class="poster-image" :src="require(`@/assets/poster/${posterImage}`)" alt="poster" />
            </div>
            <div class="shop-now-div">
                <p class="shop-now-text">{{ shopNowSection[0].text }}</p>
                <p class="shop-now-heading">{{shopNowSection[0].heading}}</p>
            
                 <CustomButton/>

            </div>
            <div class="fade"></div>
        </div>

        <div class="title-div d-flex">
            <h1>New Collection</h1>
        </div>

        <ItemsComponent />

        <div className="accessories-container">
            <h1>Accessories</h1>
            <AccessoriesComponent />
        </div>
          
        <div class="about-container d-flex">
            <img src="../assets/storeImages/store1.jpg"
                class="about-image"
            />
            <div class="about-description">
                <h1>About</h1>
                <p>
                    Discover Myfashion, where style meets affordability.
                    Explore our curated collection of contemporary fashion essentials designed to elevate your wardrobe effortlessly.
                    From everyday basics to standout pieces, find the perfect outfit for every occasion with us.
                </p>
            </div>
        </div>

        <div class="follow-us-container">
            <div class="follow-us-content d-flex">
                <div class="model-image-container">
                    <img src="../assets/modelImages/model.jpg"
                    class="model-image"
                    alt="model"
                />
                </div>
                <div class="follow-us-description">
                    <div class="text-button-div">
                        <h1>
                            Follow us for updates and exclusive offers on our website!
                        </h1>
                        
                        <button class="main-button secondary-button follow-us-button d-flex">
                        <font-awesome-icon :icon="['fab', 'facebook']" class="facebook-icon"/>
                        <span>follow us</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import ItemsComponent from '../components/ItemsComponent';
import AccessoriesComponent from '../components/AccessoriesComponent';
import CustomButton from '../components/CustomButton.vue';
export default {
    components: {
        ItemsComponent,
        AccessoriesComponent,
        CustomButton
    },
    data(){
        return{
            posterImageArray:[
                'poster1.jpg',
                'poster2.jpg',
                'poster3.jpg',
                'poster4.jpg',
            ],
            posterImage:'poster1.jpg',
            shopNowSection:[
                {heading:'find your ideal fit',text:'shine with myfashion'},
                {heading:'celebrity edit',text:'make yourself stylish'}
            ],
        }
    },
  mounted(){
   setInterval(()=>{
    this.posterImage=this.posterImageArray[Math.floor(Math.random()*(this.posterImageArray.length))];
   },3000);
},

}
</script>

<style scoped>
.poster-image-div{
    width:100%;
    height:100vh;
    overflow:hidden;
}
.poster-image {
    width:100%;
    height:100%;
    object-fit: fill;
    transform:scale(1.2);
    transition:transform 0.5s ease;
}
.poster-image:hover{
    transform:scale(1);
}

.poster-container {
    position: relative;
}
.shop-now-div{
    position:absolute;
    bottom:15%;
    left:5%;
}
.shop-now-div p{
    text-transform:uppercase;
    letter-spacing:3px;
    word-spacing:2px;
    color:#ffffff;
}
.shop-now-div .shop-now-text{
    font-size:14px;
}
.shop-now-div .shop-now-heading{
    font-size:18px;
    padding:15px 0px 25px 0px;
}
.shop-now-button{
    background-color:#ffffff;
    border:1px solid #ffffff;
    transition:background-color left to right 1s ease;
}
.shop-now-button:hover{
    transform:scale(1);
    filter:brightness(100%);
    background:transparent;
    color:#ffffff;
}


.fade {
    background: linear-gradient(180deg, transparent, rgba(128, 128, 128, 0.4), rgba(128, 128, 128, 0.8));
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
}

.title-div {
    justify-content: center;
    padding: 20px 0px;
}
.accessories-container{
    background-color:#3a3b3c;
    padding:20px 0px;
}
.accessories-container h1{
    text-align:center;
    color:rgba(128,128,128);
}
.about-container{
    padding:30px 0px;
    width:85%;
    margin:auto;
    flex-wrap:wrap;
}
.about-image{
    width:50%;
    height:450px;
    object-fit:fill;
}
.about-description{
    display:flex;
    flex:1;
    flex-direction:column;
    gap:20px;
    justify-content:center;
    padding:0px 30px;
}
.about-description p{
    line-height:24px;
    letter-spacing:1px;
}
.follow-us-container{
    background-color:#3a3b3c;
    padding:30px 0px;
}
.follow-us-content{
    width:85%;
    margin:auto;
    gap:20px;
    flex-wrap:wrap;
}
.model-image-container{
    width:55%;
    height:400px;
    overflow:hidden;
}
.model-image{
    width:100%;
    height:100%;
    object-fit:fill;
    transition:transform 1.2s ease;
}
.model-image:hover{
    transform:scale(1.5);
}
.follow-us-description{
    background-color:#ffffff;
    flex:1;
    display:flex;
    align-items:center;
    padding-left:40px;
}
.text-button-div h1{
    padding-bottom:20px;
}
.facebook-icon{
    color:#3a3b3c;
    font-size:20px;
}
.follow-us-button{
    gap:10px;
    align-items:center;
}


@media only screen and (max-width:768px){
    .about-container{
        flex-direction:column;
        gap:20px;
    }
    .about-image{
        width:100%;
    }
    .follow-us-content{
        flex-direction:column;
    }
    .model-image-container{
        width:100%;
    }
    .follow-us-description{
        padding:20px;
    }
}

</style>