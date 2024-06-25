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

        <div className="limited-collection-container">
            <h1>Accessories</h1>
            <AccessoriesComponent />
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
    height: 500px;
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
.limited-collection-container{
    background-color:rgba(128,128,128,0.3);
    padding:30px 0px;
}
.limited-collection-container h1{
    text-align:center;
}
</style>