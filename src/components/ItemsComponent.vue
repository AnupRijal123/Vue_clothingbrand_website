<template>
    <div class="grid-container">
        <div class="card" v-for="item in items" :key="item.id">
            <img :src="require(`@/assets/items/${item.imgUrl}`)" class="card-image" />
            <div class="card-details d-flex">
                <h2>{{ item.name }}</h2>
                <p class="price-section">
                    <span class="currency-text">NPR : </span>
                    <span>{{ item.price }}</span>
                </p>
                <p class="read-more-section">Read More</p>
            </div>
            <div class="tag">
                <p>Sold Out</p>
            </div>
        </div>  



    </div>

</template>
<script>
import Items from '../data/items.json';
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
.card-image:hover{
    transform:scale(1.1);
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
.currency-text{
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