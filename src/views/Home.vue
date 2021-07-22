<template>
<div>
    <div id="axios-get">
    <ul v-for="starship of starships" :key="starship.id" >
      <div @click="getCardDetail(starship.url)" ><img src="../assets/starship.jpg" alt="starship image"/></div>
      <p>{{starship.name}}</p>
      <p>{{starship.model}}</p>
      <p>{{starship.hyperdrive_rating}}</p>
      
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

export default {

    created() {
      this.getPosts();
    },
    data() {
      return {
        starships: [],
        errors: []
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
          console.log("url");
          let id = url.split('starships/')[1]; 
          this.$router.push(`${id}`);
      }
    }
};
</script>