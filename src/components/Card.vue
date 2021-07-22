<template>
<div>
    <img src="../assets/starship.jpg" alt="starship image"/>
    <p>Name: {{starship.name}}</p>
    <p>Model: {{starship.model}}</p>
    <p>Hyperdrive_rating: {{starship.hyperdrive_rating}}</p>
    <p>Manufacturer: {{starship.manufacturer}}</p>
    <p>Cost_in_credits: {{starship.cost_in_credits}}</p>
    <p>Length: {{starship.length}}</p>
    <p>Max_atmosphering_speed: {{starship.max_atmosphering_speed}}</p>
    <p>Cargo_capacity: {{starship.cargo_capacity}}</p>
    <p>Starship_class: {{starship.starship_class}}</p>
    <p>Passengers: {{starship.passengers}}</p>
    <p>Crew: {{starship.crew}}</p>
    <button @click="backHomePage()">Back to main</button>
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
        starship: [],
        errors: []
      };
    },
    methods: {
  
      getPosts() {
        const starshipId = this.$route.params.id;
        axios
          .get(`https://swapi.dev/api/starships/${starshipId}`)
          .then(response => this.starship = response.data)
          .catch(error => {
            console.log("axios error", error)
          })
      },
       backHomePage: function() {     
           this.$router.push({ name:"home"});  
      }
    }
};
</script>

