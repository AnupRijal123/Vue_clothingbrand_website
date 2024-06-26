<template>
    <div class="logo-container" :class="{'white-navbar-logo':whiteNavbar}">
        <h1 class="logo-heading">Myfashion</h1>
        <p>CLOTHING CO</p>
    </div>
</template>
<script>
export default{
    props:{
        isWhiteNavbar:Boolean,
    },
    data(){
        return{
            whiteNavbar:this.isWhiteNavbar,

        }
    },
    mounted(){
        console.log('prop value',this.whiteNavbar);
    },
    watch:{
        isWhiteNavbar(value){
            this.whiteNavbar=value;
        }

    }
}
</script>

<style scoped>
.logo-container{
    transition:all 0.5s ease;
    cursor:pointer;
}
.logo-container:hover{
    transform:scale(1.2);
}

h1{
    font-size:45px;
    font-family: "Caveat", cursive;
    color:#ffffff;
    transition:color 0.5s ease;
}
p{
    text-align:center;
    font-size:9px;
    line-height:12px;
    color:#ffffff;
    font-weight:600;
    transition:color 0.5s ease;
}
.logo-container:hover h1{
    color:#ca94a1;
}
.logo-container:hover p{
    color:#ca94a1;
}
.white-navbar-logo h1{
    color:#ca94a1;
}
.white-navbar-logo p{
    color:#ca94a1
}

@media only screen and (max-width:768px){
    h1{
        font-size:60px;
    }
    P{
        font-size:18px;
    }
}
</style>