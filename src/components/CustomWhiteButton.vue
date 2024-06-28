<template>
    <div class="custom-button">
               <div class="white-background"></div>
               <div class="transparent-background"></div>
               <p class="custom-button-text">{{ text }}</p>
              </div>
</template>

<script>
export default{
    props:{
        text:String,
    }
}

</script>

<style scoped>
.custom-button{
   background:#3a3b3c;
   border:1px solid #111;
   cursor: pointer;
   text-transform: uppercase;
   position:relative;
   width:120px;
   height:45px;
}
.custom-button-text{
   color:#111;
   font-size: 10px;
   font-weight: 400;
   letter-spacing: 1px;
   word-spacing: 3px;
   position:absolute;
   width:100%;
   height:100%;
   display:flex;
   justify-content:center;
   align-items:center;    
}
.white-background{
       background-color:#ffffff;
       position:absolute;
       right:0;
       width:100%;
       height:100%;
       transition:width 0.3s linear;
}

.custom-button:hover .white-background{
   width:0%;
}

.custom-button:hover .custom-button-text{
   color:#ffffff;
}

</style>