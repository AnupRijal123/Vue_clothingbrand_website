<template>
    <div class="navbar" :class="{ 'white-navbar': showNavbar }">   
        <div class="navbar-content">
            <div class="navbar-first-row d-flex">
                <div class="first-row-column d-flex">
                    <div class="with-logo d-flex">
                        <font-awesome-icon :icon="['fab', 'square-facebook']" class="icon" />
                    </div> 
                </div>
               <div class="hamburger-div">
                <font-awesome-icon :icon="['fas', 'bars']" class="icon"/>
               </div>
                <div>
                   <LogoComponent :isWhiteNavbar="showNavbar"/>
                </div>
                <div class="icons-div d-flex">
                    <font-awesome-icon :icon="['far', 'user']" class="icon menu-icon" />
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon menu-icon"/>
                    <font-awesome-icon :icon="['fas', 'bag-shopping']" class="icon menu-icon"/>
                </div>
            </div>
            <div class="navbar-second-row d-flex">
                <p class="menu-text">Shop</p>
                <p class="menu-text">Casuals</p>
                <p class="menu-text">Ethnics Wear</p>
                <p class="menu-text">Accessories</p>
                <p class="menu-text">Sale</p>
            </div>
        </div>
    </div>
</template>
<script>
import LogoComponent from './LogoComponent.vue';
export default {
    components:{
        LogoComponent,
    },
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
    position: fixed;
    z-index: 1;
    width: 100%;
    border-bottom:1px solid rgba(255,255,255,0.8);
    padding:50px 0px;
    transition: all 0.8s ease;
}

.white-navbar {
    background-color: #ffffff;
    padding-top:10px;
}
.white-navbar .menu-text{
    color:#111;
}
.white-navbar .icon{
    color:#111;
}
.navbar-content{
    width:90%;
    margin:auto;
}
.navbar-first-row{
    justify-content:space-between;
    padding-bottom:30px;

}

.with-logo{
    align-items:center;
    padding-right:5px;
    border-right:1px solid #ffffff;
}
.fb-icon{
    font-size:20px;
}
.icons-div{
    align-items:center;
    gap:20px;
}

.hamburger-div{
    display:none;
}
.hamburger-div .icon{
    font-size:60px;
    cursor:pointer;
}
.navbar-second-row{
    justify-content:space-between;
}

.menu-text{
    text-transform:uppercase;
    color:#ffffff;
    cursor:pointer;
    transition:transform 0.5s ease;
    
}
.menu-text:hover{
    transform:scale(1.2);
}

@media only screen and (max-width:768px){

    .first-row-column{
        display:none;
    }
    .icons-div{
        display:none;
    }
    .navbar-first-row{
        justify-content:center;
        position:relative;
    }
    .hamburger-div{
        display:block;
        position:absolute;
        left:0;
        top:20px;
    }
}
@media only screen and (max-width:500px){
    .navbar-content{
        width:100%;
    }
    .navbar-second-row{
        flex-direction:column;
    }
}
</style>

