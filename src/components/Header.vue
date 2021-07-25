<template>
<!-- Header of the the page -->
<div @click="backHomePage()" class="header">
    <img src="../assets/images/header.png" alt="starship image"/>
</div>
</template>

<script>
import "../assets/scss/style.scss";
    export default {
        name: "Header",
        methods: {
            backHomePage: function() {     
                this.$router.push({ name:"home"});  
            }
        }
    }
</script>

