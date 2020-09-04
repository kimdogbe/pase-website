<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Support for Farmers and Communities</h1>
        <p>PASE aims to demonstrate that farming can enable people to make a 
          comfortable living in a way that is environmentally sustainable and 
          also benefits the families and communities of the farmers.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" v-for="topic in topics" :key="topic.name">
        <v-card link :to="{name: topic.name}">
          <v-img
              :src="topic.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="250px"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col class="text-center" cols="12">
                <h2>{{ topic.name }}</h2>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      topics: [
        {name: 'Community Nursery', image: require("@/assets/seedlings.png")},
        {name: 'VLSA Micro-Fund', image: require("@/assets/weighing.jpeg")},
        {name: 'Farmer Support Services', image: require("@/assets/fss.png")},
        {name: 'Training Farmers', image: require("@/assets/training.png")},
        {name: 'Smallholder Farmer Mobilazation', image: require("@/assets/farm-workers.jpg")},
        {name: 'What Development?', image: require("@/assets/what-dev.png")},
        {name: 'Youth Employment', image: require("@/assets/pase-staff.png")},
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 4em;
}
h2 {
  font-size: 2.5em;
}
p, li {
  font-size: 1.3em;
  color: #808080;
}
</style>