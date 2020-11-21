<template>
  <v-container fluid class="pa-0">
    <v-parallax
        height="500"
        dark
        src="@/assets/threshing-ffb.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <v-overlay value="true" absolute>
              <!-- <h1 class="display-1 mb-4">Text description here</h1>
              <h4 class="subheading">Text description here</h4> -->
            </v-overlay>
          </v-col>
        </v-row>
      </v-parallax>
    

    <v-row>
      <v-col cols="12">
        <h2>History</h2>
        <p>
          PASE was established in 2014 when we bought a 55.8 acre 
          oil-palm farm and a partially completed artisanal palm oil 
          mill from the Assemblies of God Credit Union. The farm and 
          mill are located in Kunsu, close to Mankranso in the Ahafo Ano 
          South District of the Ashanti Region. Farmers in this area were 
          persuaded to take part in a Presidential Special Initiative on 
          Oil Palm (2004 - 2009) and grow oil palm trees, and many 
          smallholders increased their cultivation of oil palm. However, 
          changes in government and policy direction left these farmers 
          without a reliable buyer. They felt let down as no one came to buy 
          their fresh fruit bunches from them as promised. Many decided to 
          fell their trees and use their land for other purposes. 
        </p>
        <p>
          Over 15 years later, their trees have grown and are bearing 
          fruit. Fresh fruit bunches (FFB) and palm kernel nuts are now 
          abundant and available to be sold.  PASE has responded to this challenge. Taking over the farm has encouraged many of the farmers to resist pressure from illegal ‘galamsey’ miners in the area to sell their land for the purpose of mining. This would have caused irreversible damage to the environment.  Since taking over the farm, PASE has taken stringent measures to stop illegal miners from encroaching on the land. 
        </p>
        <p>
          We have completed the artisanal mill and reached out to the 
          small-holder farmers in the area to build long-term 
          relationships. A rapidly growing number of farmers now supply 
          the mill and so PASE is already bringing new and regular 
          income to farmers in the area.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'History',
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