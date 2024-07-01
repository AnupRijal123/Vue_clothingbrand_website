<template>
  <div class="main-container">
    <TopBannerComponent/>
    <NavbarComponent />
    <div class="content-container">
      <router-view></router-view>
      <div @click="goToTop" class="go-to-top" :class="{'move-up':showNavigateButton}">
        <font-awesome-icon :icon="['fas', 'angle-up']" />
      </div>
    </div>
    <FooterComponent/>
  </div>

</template>
<script>
import './base.css';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import TopBannerComponent from './components/TopBannerComponent.vue'

export default {
  name: 'App',
  components: {
    TopBannerComponent,
    NavbarComponent,
    FooterComponent,
  },
  data(){
    return{
      showNavigateButton:false,
    }
  },
  methods:{
    goToTop() {
      const scrollDuration = 500; // Duration of the scroll animation in milliseconds
      const scrollStep = -window.scrollY / (scrollDuration / 15); // Amount to scroll per frame
      
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    },

    handleNavigation(){
      if(window.scrollY>100){
        this.showNavigateButton=true;
      }
      if(window.scrollY==0){
        this.showNavigateButton=false;
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleNavigation);
  }
}
</script>
<style scoped>
.go-to-top{
  position:fixed;
  right:20px;
  bottom:0;
  transition:all 2s ease;
  opacity:0;
  transition:all 0.5s ease;
  font-size:20px;
  background-color:#ca94a1;
  padding:5px 8px;
  border-radius:50%;
  color:#ffffff;
  cursor:pointer;
}
.move-up{
  bottom:30px;
  opacity:1;
}
</style>
