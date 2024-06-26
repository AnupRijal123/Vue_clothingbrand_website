<template>
    <div class="footer">
        <div class="footer-content">
           <div class="footer-first-row d-flex">
            <div class="column d-flex">
                <h2>Myfashion</h2>
                <p>Facebook</p>
            </div>
            <div class="column d-flex">
                <h3>For Enquiries</h3>
                <p>enquiry@myfashion.com</p>
            </div>

            <div class="column d-flex">
                <h3>Links</h3>
               <div>
                <p>location</p>
                <p>about</p>
               </div>
            </div>
           </div>

           <div class="footer-second-row d-flex">
            <p>All rights reserved &copy; 2024 Myfashion</p>
           </div>



          
        </div>
    </div>
</template>

<style scoped>
.footer{
    background-color:rgba(128,128,128);
}
.footer-content{
    width:85%;
    margin:auto;
}
.footer-first-row{
    justify-content:space-between;
    padding:80px 0px;
}
.footer-second-row{
    padding:10px 0px;
    justify-content:center;
    border-top:1px solid #3a3b3c;
}
.column{
    flex-direction:column;
    gap:20px;
}
p{
    color:#3a3b3c;

}
.column p{
    cursor:pointer;
    transition:all 0.2s ease;
}
.column p:hover{
    transform:scale(1.1);
    color:#ca94a1;

}

</style>