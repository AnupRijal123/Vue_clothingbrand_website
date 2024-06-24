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


    </div>
</template>

<script>
import ItemsComponent from '../components/ItemsComponent';
export default {
    components: {
        ItemsComponent,
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
    background: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.7), rgba(37, 37, 37, 1));
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
}

.title-div {
    justify-content: center;
    padding: 20px 0px;
}
</style>