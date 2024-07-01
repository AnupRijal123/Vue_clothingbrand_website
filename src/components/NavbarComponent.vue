<template>
    <div class="navbar" :class="{ 'white-navbar': showNavbar }">   
        <div class="navbar-content">
            <div class="navbar-first-row d-flex">
                <div class="first-row-column d-flex">
                    <div class="with-logo d-flex">
                        <font-awesome-icon :icon="['fab', 'square-facebook']" class="icon" />
                    </div> 
                </div>
               <div class="hamburger-div" @click="showMenu">
                <font-awesome-icon v-if="showMobileMenu==false" :icon="['fas', 'bars']" class="icon"/>
                <font-awesome-icon v-if="showMobileMenu" :icon="['fas', 'xmark']" class="icon" />
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
                <p @click="goToDisplayPage('shop')" class="menu-text">Shop</p>
                <p @click="goToDisplayPage('casuals')" class="menu-text">Casuals</p>
                <p @click="goToDisplayPage('ethnicsWear')" class="menu-text">Ethnics Wear</p>
                <p @click="goToDisplayPage('accessories')" class="menu-text">Accessories</p>
                <p @click="goToDisplayPage('sale')" class="menu-text">Sale</p>
            </div>

            <div v-if="showMobileMenu" class="menu-items-for-small-screen">
                <p @click="goToDisplayPage('shop')" class="menu-text">Shop</p>
                <p @click="goToDisplayPage('casuals')" class="menu-text">Casuals</p>
                <p @click="goToDisplayPage('ethnicsWear')" class="menu-text">Ethnics Wear</p>
                <p @click="goToDisplayPage('accessories')" class="menu-text">Accessories</p>
                <p @click="goToDisplayPage('sale')" class="menu-text">Sale</p>
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
            showMobileMenu:false,
        }
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 100) {
                this.showNavbar = true;
            } else {
                this.showNavbar = false;
            }
        },
        showMenu(){
            this.showMobileMenu=!this.showMobileMenu;
        },
        goToDisplayPage(value){
            this.$router.push(`/categories/${value}`);
            this.showMobileMenu=false;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
        
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
    },
 
}


</script>

<style scoped>
.navbar {
    position: fixed;
    top:50px;
    z-index: 1;
    width: 100%;
    padding:20px 0px;
    transition: all 0.9s ease;
}

.white-navbar {
    background-color: #ffffff;
    padding:10px 0px 20px 0px;
    top:0;
}
.white-navbar .menu-text{
    color:#111;
}
.white-navbar .icon{
    color:#111;
}
.white-navbar .with-logo{
    border-right:1px solid #111;
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
    font-size:30px;
    cursor:pointer;
}
.navbar-second-row{
    justify-content:center;
    gap:50px;
    flex-wrap:wrap;
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
.menu-items-for-small-screen{
    display:none;
}

@media only screen and (max-width:768px){

    .first-row-column{
        display:none;
    }
   
    .navbar-first-row{
        justify-content:center;
        position:relative;
    }
    .icons-div{
        position:absolute;
        right:0;
    }
    .hamburger-div{
        display:block;
        position:absolute;
        left:0;
        top:20px;
    }
    .navbar-second-row{
        display:none;
    }
    .menu-items-for-small-screen{
        display:block;
        padding-left:30px;
    }
    .menu-items-for-small-screen .menu-text{
        line-height:24px;
    }
   

}
@media only screen and (max-width:500px){
    .navbar-content{
        width:100%;
    }
   
}
</style>

