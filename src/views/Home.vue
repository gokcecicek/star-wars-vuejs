<template>
<div>
    <div id="axios-get">
    <ul v-for="post of starships" :key="post.id" >
      <div @click="getCardDetail(post.url)" ><img src="../assets/starship.jpg" alt="starship image"/></div>
      <p>{{post.name}}</p>
      <p>{{post.model}}</p>
      <p>{{post.hyperdrive_rating}}</p>
      
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
          .get("https://swapi.dev/api/starships")
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