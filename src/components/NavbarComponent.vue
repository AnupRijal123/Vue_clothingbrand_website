<template>
    <div class="navbar d-flex" :class="{ 'white-navbar': showNavbar }">
        <h1>Navbar</h1>

        <div class="menu-div d-flex">
            <router-link to='/'>
                <p>Home</p>
            </router-link>
            <router-link to='/shop'>
                <p>Shop</p>
            </router-link>
        </div>


    </div>
</template>
<script>
export default {
    data() {
        return {
            showNavbar: false,
        }
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 100) {
                this.showNavbar = true;
            } else {
                this.showNavbar = false;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}


</script>

<style scoped>
.navbar {
    background-color: transparent;
    height: 80px;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    width: 100%;
    transition: all 1s ease;
}

.white-navbar {
    background-color: black;
}

.menu-div {
    background-color: red;
    gap: 20px;
}

.menu-div a {
    text-decoration: none;
}
</style>