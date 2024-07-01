<template>
<div class="banner-container" :class="{'hide-banner':hideBanner}">
    <div class="banner-content">
        <p class="banner-text">
        {{ bannerMessage }}
    </p>
    </div>
</div>
</template>

<script>
export default{
    data(){
        return{
            hideBanner:false,
            bannerMessageArray:[
                'free shipping on order over Rs 3,500',
                'flat 10% off for 1st customer with code "myfash10"',
            ],
            bannerMessage:'free shipping on order over Rs 3,500'
        }
    },
    methods:{
        handleScroll(){
            if(window.scrollY>100){
                this.hideBanner=true;
            }else{
                this.hideBanner=false;
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);

       setInterval(()=>{
        this.bannerMessage=this.bannerMessageArray[Math.floor(Math.random()*this.bannerMessageArray.length)]
       },3000);
    }
}
</script>

<style scoped>
.banner-container{
    background-color:#ca94a1;
    opacity:90%;
    position:fixed;
    z-index:1;
    height:50px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:height 0.8s ease;
}

.banner-text{
    color:#ffffff;
    text-transform:uppercase;
    font-size:14px;
    font-weight:600;
}
.banner-content{
    animation:slideToLeft 3s forwards;
    animation-iteration-count:infinite;
}
@keyframes slideToLeft{
    0%{
        transform:translateX(500px);
        opacity:0;
    }
    10%{
        transform:translateX(0);
        opacity:1;
    }
    90%{
        transform:translateX(0);
        opacity:1;
    }
    100%{
        transform:translateX(-500px);
        opacity:0;
    }
}

.hide-banner{
    height:0px;
    overflow:hidden;
}
</style>