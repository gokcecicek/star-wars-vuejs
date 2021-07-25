<template>
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Searchbar part-->
  <div class="search-input-group">
    <input v-model="search" type="text" class="searchbar" placeholder="May the force be with you.." v-on:keyup.enter="searchData">
  <button v-on:click="searchData" class="search-button"><i class="fa fa-search"></i></button>
  </div>
  <!-- Starship cards on the homepage -->
  <div>
    <ul v-for="starship of starships" :key="starship.id" class="starship-card" >
      <div @click="getCardDetail(starship.url)"><img src="../assets/images/starship.jpg" alt="starship image"/></div>
      <p><strong>{{starship.name}}</strong></p>
      <p><strong>Model: </strong>{{starship.model}}</p>
      <p><strong>Hyperdrive rating: </strong>{{starship.hyperdrive_rating}}</p>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{ index + 1 }} - {{ error.message }}
      </li>
    </ul>
  </div>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <button class="pagination-next" v-on:click="changePageBack(page)">Previous</button>
    <button class="pagination-previous" v-on:click="changePageNext(page)">Next</button>
  </nav>
</div>
</template>

<script>
import axios from "axios";
import { swapi } from "../services/API";
import "../assets/scss/style.scss";

export default {

    created() {
      this.getPosts();
    },

    data() {
      return {
        starships: [],
        errors: [],
        search: "",
        page: 1,
        pages: 1,
      };
    },

    //Fetch starships from api
    methods: {
      getPosts() {
        axios
          this.starships = swapi.getStarships(this.page)
          .then(response => (this.starships = response.data.results))
          .catch(error => {
            console.log("axios error", error)
          });
      },

      //Getting details of a starship
      getCardDetail(url) {
          let id = url.split('starships/')[1]; 
          this.$router.push(`${id}`);
      },

      //Search starship according to model
      searchData() {
        axios 
          this.starships = swapi.getModel(this.search)
          .then(response => response.data.results.length === 0 ? this.notFound() : (this.starships = response.data.results))
          .catch(error => {
            console.log("axios error", error)
          });
      },

      changePageNext(page) {
      this.page = page + 1;
      this.getPosts();
      },

      changePageBack(page) {
      this.page = page - 1;
      this.getPosts();
      },
      notFound() {
        this.$router.push({ name: "notfound"});
      },
    }
};
</script>