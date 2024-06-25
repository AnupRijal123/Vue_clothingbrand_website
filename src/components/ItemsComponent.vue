<template>
    <div class="grid-container">
        <div class="card" v-for="item in items" :key="item.id">
            <div class="d-flex">
            <img :src="require(`@/assets/items/${item.img1}`)" class="card-image card-image1" />
            <img :src="require(`@/assets/items/${item.img2}`)" class="card-image card-image2"/>
            </div>
            <div class="card-details d-flex">
                <h2>{{ item.name }}</h2>
                <div class="price-section d-flex">
                    <s v-if="item.discountPercentage" class="grey-text">
                    <span>NPR </span>
                    <span>{{ item.price }}</span>
                    </s>
                    <p v-if="item.discountPercentage">
                        <span class="grey-text">NPR </span>
                        <span>
                            {{item.price-((item.discountPercentage/100)*item.price)}}
                        </span>
                    </p>
                    <p v-if="!item.discountPercentage"> 
                    <span class="grey-text">NPR </span>
                    <span>{{ item.price }}</span>
                    </p>
                </div>
                <p class="read-more-section">Read More</p>
            </div>
            <div class="tag" v-if="item.isSold||item.discountPercentage">
                <p v-if="item.isSold">Sold Out</p>
                <p v-if="!item.isSold && item.discountPercentage">
                    -{{item.discountPercentage}}%
                </p>
            </div>
        </div>  



    </div>

</template>
<script>
import Items from '../data/newCollection.json';
export default {
    data() {
        return {
            items: Items,
        }
    },
    mounted() {
        console.log(this.items);
    }
}
</script>

<style scoped>
.grid-container {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    padding:20px 0px;

}

.card {
    width: 250px;
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
    height:170px;
    object-fit: fill;
    transition:transform 0.5s ease;
    cursor:pointer;
}
.card-image1{
    transition:width 0.4s ease-in-out;
    opacity:1;
}

.card:hover .card-image1{
    width:0px;
    opacity:0;
}
.card-image2{
    width:0px;
    transition:width 0.4s ease-in-out;
    opacity:0;
}
.card:hover .card-image2{
    width:100%;
    opacity:1;
}

.card:hover .card-image{
    transform:scale(1.08);
    filter:brightness(80%);
}

.card-details {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px 0px;
}
.card-details h2{
    margin:0;
    font-size:18px;
}
.price-section{
    gap:10px;
}
.grey-text{
    color:rgba(128,128,128);
}
.tag{
    background-color:#ca94a1;
    position:absolute;
    top:5px;
    left:5px;
    padding:3px;
}
.tag p{
    color:#ffffff;
    font-size:12px;
    font-weight:600;
}



</style>