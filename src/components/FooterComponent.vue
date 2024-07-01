<template>
    <div class="footer">
        <div class="footer-content">
           <div class="footer-first-row d-flex">
            <div class="column d-flex">
                <LogoComponent/>
            </div>
            <div class="column d-flex">
                <h3>For Enquiries</h3>
                <p class="link-text">enquiry@myfashion.com</p>
            </div>

            <div class="column d-flex">
                <h3>Links</h3>
               <div>
                <p>Location</p>
                <p class="link-text">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                    Sitapaila,kathmandu
                </p>
                <p class="link-text">Our Facebook Page</p>
                <p>contact:(+977)9812345678,01-4123456</p>
               </div>
            </div>
           </div>

           <div class="footer-second-row d-flex">
            <p>All rights reserved &copy; 2024 Myfashion</p>
            <div class="github-link-div d-flex">
                <p>Developed by Anup Rijal</p>
                
                <a href="https://github.com/AnupRijal123/Vue_clothingbrand_website/tree/development-branch">
                    <div class="code-link-div d-flex">
                    <p>code</p>
                    <font-awesome-icon :icon="['fab', 'github']" class="github-icon"/>
                    </div>
                </a>

            </div>
           </div>



          
        </div>
    </div>
</template>

<script>
import LogoComponent from './LogoComponent.vue';
export default{
    components:{
        LogoComponent,
    }
}
</script>

<style scoped>
.footer{
    background-color:#3a3b3c;
}
.footer-content{
    width:85%;
    margin:auto;
}
.footer-first-row{
    justify-content:space-between;
    padding:80px 0px;
    flex-wrap:wrap;
}
.footer-second-row{
    padding:10px 0px;
    flex-direction:column;
    align-items:center;
    border-top:1px solid rgba(128,128,128);
}
.column{
    flex-direction:column;
    gap:20px;
}
p,h3{
    color:rgba(128,128,128);

}

.link-text{
    cursor:pointer;
    transition:all 0.3s ease;
    line-height:30px;
}
.link-text:hover{
    transform:scale(1.05);
}
.github-link-div{
    gap:10px;
    flex-wrap:wrap;
}
.github-link-div p{
    font-size:14px;
    color:#111;
}
a{
    text-decoration:none;
}
a:hover{
    text-decoration:underline rgba(128,128,128);
}
.code-link-div{
    align-items:center;
    gap:5px;
}
.github-icon{
    color:#ffffff;
}

</style>