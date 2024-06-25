<template>
    <div class="navbar d-flex" :class="{ 'grey-navbar': showNavbar }">
        <h1 class="menu-text">Navbar</h1>

        <div class="menu-div d-flex">
            <router-link to='/'>
                <p class="menu-text">Home</p>
            </router-link>
            <router-link to='/shop'>
                <p class="menu-text">Shop</p>
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
    height: 70px;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    width: 100%;
    transition: all 0.8s ease;
}

.grey-navbar {
    height: 90px;
    background-color: rgba(128, 128, 128);
    background: linear-gradient(180deg,
            rgba(128, 128, 128, 1)0,
            rgba(128, 128, 128, 0.6)80%,
            rgba(128, 128, 128, 0)100%)
}



.menu-div {
    gap: 20px;
}

.menu-div a {
    text-decoration: none;
}

.menu-text {
    color: white;
    font-weight: bold;
    transition:all 0.5s ease;
}
.menu-div .menu-text:hover{
    transform:scale(1.2);
    filter:brightness(0.9);
}
</style>