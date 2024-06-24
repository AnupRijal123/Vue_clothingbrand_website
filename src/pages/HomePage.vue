<template>
    <div>
        <div class="poster-container">
            <img class="poster-image" src="../assets/poster/poster1.jpg" />
            <div class="fade"></div>
        </div>

        <h1>hello</h1>
        <h1>hello</h1>

        <h1>hello</h1>

        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>

        <h1>hello</h1>

        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>

        <h1>hello</h1>

        <h1>hello</h1>

    </div>
</template>

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
</style>