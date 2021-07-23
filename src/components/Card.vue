<template>
<div>
<!-- Starship detail card informations -->
<div class="starship-card-detail">
    <img src="../assets/starship.jpg" alt="starship image"/>
    <p><strong>Name:</strong> {{starship.name}}</p>
    <p><strong>Model:</strong> {{starship.model}}</p>
    <p><strong>Hyperdrive rating:</strong> {{starship.hyperdrive_rating}}</p>
    <p><strong>Manufacturer:</strong> {{starship.manufacturer}}</p>
    <p><strong>Cost in credits:</strong> {{starship.cost_in_credits}}</p>
    <p><strong>Length:</strong> {{starship.length}}</p>
    <p><strong>Max atmosphering speed:</strong> {{starship.max_atmosphering_speed}}</p>
    <p><strong>Cargo capacity:</strong> {{starship.cargo_capacity}}</p>
    <p><strong>Starship class:</strong> {{starship.starship_class}}</p>
    <p><strong>Passengers:</strong> {{starship.passengers}}</p>
    <p><strong>Crew:</strong> {{starship.crew}}</p>
</div>
<button @click="backHomePage()">Back to main</button>
</div>
</template>

<script>
import axios from "axios";
import { swapi } from "../services/API";
import "../assets/style.css";

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
      //Fetch starship informations by id from api
      getPosts() {
        const starshipId = this.$route.params.id;
        axios
          this.starship = swapi.getStarshipById(starshipId)
          .then(response => this.starship = response.data)
          .catch(error => {
            console.log("axios error", error)
          })
      },
      
      //Back to the main page function
      backHomePage: function() {     
        this.$router.push({ name:"home"});  
      }
    }
};
</script>


