<template>
  <div class="main-container">
    <NavbarComponent />
    <div class=" content-container">
      <router-view></router-view>
    </div>
  </div>

</template>
<script>
import './base.css';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
  }
}
</script>
<style scoped>
.main-container {
  background-color: pink;
  position: relative;
}

.content-container {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
