<template>
<div>
    <input v-model="search" type="text" class="searchbar" placeholder="May the force be with you.." v-on:keyup.enter="searchData">
    <button v-on:click="searchData">Search</button>
    <div>
    <ul v-for="starship of starships" :key="starship.id" class="starship-card">
      <div @click="getCardDetail(starship.url)"><img src="../assets/starship.jpg" alt="starship image"/></div>
      <p><strong>Name: </strong>{{starship.name}}</p>
      <p><strong>Model: </strong>{{starship.model}}</p>
      <p><strong>Hyperdrive rating: </strong>{{starship.hyperdrive_rating}}</p>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{ index + 1 }} - {{ error.message }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from "axios";
import { swapi } from "../services/API";
import "../assets/style.css";

export default {

    created() {
      this.getPosts ();
    },
    data() {
      return {
        starships: [],
        errors: [],
        search: "",
      };
    },

    methods: {
      getPosts() {
        axios
          this.starships = swapi.getStarships()
          .then(response => (this.starships = response.data.results))
          .catch(error => {
            console.log("axios error", error)
          });
      },
      getCardDetail(url) {
          let id = url.split('starships/')[1]; 
          this.$router.push(`${id}`);
      },
      searchData() {
        axios 
          this.starships = swapi.getModel(this.search)
          .then(response => (this.starships = response.data.results))
          .catch(error => {
            console.log("axios error", error)
          });
      }
    }
};
</script>