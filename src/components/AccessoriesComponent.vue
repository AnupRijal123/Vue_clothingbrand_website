<template>
    <div class="grid-container">
        <div class="card first-card" >
            <div @click="goToItemInfo(items[0].id)" class="d-flex image-div">
            <img :src="require(`@/assets/items/${items[0].img1}`)" class="card-image card-image1" />
            <img :src="require(`@/assets/items/${items[0].img2}`)" class="card-image card-image2"/>
            </div>
            <div class="card-details d-flex">
                <h2 @click="goToItemInfo(items[0].id)">{{ items[0].name }}</h2>
                <div class="price-section d-flex">
                    <s v-if="items[0].discountPercentage">
                    <span>NPR </span>
                    <span>{{ items[0].price }}</span>
                    </s>
                    <p v-if="items[0].discountPercentage">
                        <span>NPR </span>
                        <span>
                            {{items[0].price-((items[0].discountPercentage/100)*items[0].price)}}
                        </span>
                    </p>
                    <p v-if="!items[0].discountPercentage"> 
                    <span>NPR </span>
                    <span>{{ items[0].price }}</span>
                    </p>
                </div>
                <p @click="goToItemInfo(items[0].id)" class="read-more-section">Read More</p>
            </div>
            <div class="tag" v-if="items[0].discountPercentage">
                <p>-{{items[0].discountPercentage}}%</p>
            </div>
        </div>  

        <div class="card second-card" >
            <div @click="goToItemInfo(items[1].id)" class="d-flex image-div">
            <img :src="require(`@/assets/items/${items[1].img1}`)" class="card-image card-image1" />
            <img :src="require(`@/assets/items/${items[1].img2}`)" class="card-image card-image2"/>
            </div>
            <div class="card-details d-flex">
                <h2 @click="goToItemInfo(items[1].id)">{{ items[1].name }}</h2>
                <div class="price-section d-flex">
                    <s v-if="items[1].discountPercentage">
                    <span>NPR </span>
                    <span>{{ items[1].price }}</span>
                    </s>
                    <p v-if="items[1].discountPercentage">
                        <span>NPR </span>
                        <span>
                            {{items[1].price-((items[1].discountPercentage/100)*items[1].price)}}
                        </span>
                    </p>
                    <p v-if="!items[1].discountPercentage"> 
                    <span>NPR </span>
                    <span>{{ items[1].price }}</span>
                    </p>
                </div>
                <p @click="goToItemInfo(items[1].id)" class="read-more-section">Read More</p>
            </div>
            <div class="tag" v-if="items[1].discountPercentage">
                <p>-{{items[1].discountPercentage}}%</p>
            </div>
        </div>  

        <div class="card third-card" >
            <div @click="goToItemInfo(items[2].id)" class="d-flex image-div">
            <img :src="require(`@/assets/items/${items[2].img1}`)" class="card-image card-image1" />
            <img :src="require(`@/assets/items/${items[2].img2}`)" class="card-image card-image2"/>
            </div>
            <div class="card-details d-flex">
                <h2 @click="goToItemInfo(items[2].id)">{{ items[2].name }}</h2>
                <div class="price-section d-flex">
                    <s v-if="items[2].discountPercentage">
                    <span>NPR </span>
                    <span>{{ items[2].price }}</span>
                    </s>
                    <p v-if="items[2].discountPercentage">
                        <span>NPR </span>
                        <span>
                            {{items[2].price-((items[2].discountPercentage/100)*items[2].price)}}
                        </span>
                    </p>
                    <p v-if="!items[2].discountPercentage"> 
                    <span >NPR </span>
                    <span>{{ items[2].price }}</span>
                    </p>
                </div>
                <p @click="goToItemInfo(items[2].id)" class="read-more-section">Read More</p>
            </div>
            <div class="tag" v-if="items[2].discountPercentage">
                <p>-{{items[2].discountPercentage}}%</p>
            </div>
        </div>  

      

         




    </div>

</template>
<script>
import Items from '../data/accessories.json';
export default {
    data() {
        return {
            items: Items,
        }
    },
    methods:{
        goToItemInfo(itemId){
            this.$router.push(`/item/${itemId}`);
        }
    }

}
</script>

<style scoped>
.grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    padding:30px 0px;
    width:85%;
    margin:auto;

}

.card {
    width: 300px;
    position:relative;
}
.read-more-section{
    display:none;
    cursor:pointer;
    color:#ca94a1;
    transition:color 0.2s ease;
}
.read-more-section:hover{
    color:rgba(128,128,128);
}

.card:hover .price-section{
    display:none;
}
.card:hover .read-more-section{
    display:block;
}

.card-image {
    width: 100%;
    height:100%;
    object-fit: fill;
    transition:transform 1s ease;
    cursor:pointer;
}

.image-div{
    position:relative;
    overflow:hidden;
}
.card-image1,.card-image2{
    position:absolute;
    top:0;
    left:0;
}

.card-image1{
    opacity:1;
    transition:opacity 1.5s ease;
}
.card-image2{
    opacity:0;
    transition:opacity 1.5s ease;
}
.card:hover .card-image1{
    opacity:0;
}
.card:hover .card-image2{
    opacity:1;
}


.card:hover .card-image{
    transform:scale(1.08);
    filter:brightness(80%);
}

.card-details h2{
    margin:0;
    font-size:18px;
    word-break:break-all;
    color:rgba(128,128,128);
}
.price-section{
    gap:10px;
}
.price-section p{
    color:rgba(128,128,128);
    font-weight:bold;
}
.price-section s{
    color:rgba(128,128,128);
}

.tag{
    background-color:#ca94a1;
    position:absolute;
    top:10px;
    left:-16px;
    padding:3px;
}
.tag p{
    color:#ffffff;
    font-size:12px;
    font-weight:600;
}

.first-card .image-div{
    height:360px
}

.second-card .image-div{
    height:280px;
}

.third-card .image-div{
    height:320px;
}
.first-card{
    height:440px;
}
.second-card{
    height:360px;
}
.third-card{
    height:400px;
}
.card-details{
    position:absolute;
    bottom:0;
    width:100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

@media only screen and (max-width:1075px){
    .grid-container{
        justify-content:center;
        gap:15%;

    }
}
</style>