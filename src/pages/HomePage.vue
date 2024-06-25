<template>
    <div>
        <div class="poster-container">
            <img class="poster-image" src="../assets/poster/poster1.jpg" alt="poster" />
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
                    Discover [Clothing Store Name], where style meets affordability.
                    Explore our curated collection of contemporary fashion essentials designed to elevate your wardrobe effortlessly.
                    From everyday basics to standout pieces, find the perfect outfit for every occasion with us.
                </p>
            </div>
        </div>

       


    </div>
</template>

<script>
import ItemsComponent from '../components/ItemsComponent';
import AccessoriesComponent from '../components/AccessoriesComponent';
export default {
    components: {
        ItemsComponent,
        AccessoriesComponent,
    }
}
</script>

<style scoped>
.poster-image {
    height: 520px;
    width: 100%;
    object-fit: fill;
}

.poster-container {
    position: relative;
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

@media only screen and (max-width:768px){
    .about-container{
        flex-direction:column;
        gap:20px;
    }
    .about-image{
        width:100%;
    }
}

</style>