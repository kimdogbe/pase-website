<template>
  <v-container fluid class="pa-0">
      <v-parallax
        height="500"
        dark
        src="@/assets/palm-fruit.jpg"
      >
        <v-row
          align="end"
          justify="end"
        >
          <v-col class="" cols="12">
            <h2>PDA Agri-Industry & Social Enterprise</h2>
          </v-col>
        </v-row>
      </v-parallax>

    <v-row
      align="center"
      justify="center">
      <v-col cols="10">
        <p>
          PDA Agri-Industry and Social Enterprise Ltd. (PASE), 
        a company owned solely by Participatory Development Associates
        (PDA), has been established as a limited liability company and
          a social enterprise platform to provide services to rural 
          communities, especially women and young people.
        </p>
        <p>
          In 2004, many smallholder farmers in the PASE catchment 
          area increased the cultivation of oil palm through a 
          Presidential Special Initiative on Palm Oil. Fresh fruit 
          bunches (FFB) and palm kernel nuts are therefore now available 
          in abundance, ready to be sold and milled into crude palm oil 
          (CPO) and palm kernel oil. However, changes in government and 
          policy direction left these farmers without a reliable buyer.
        </p>
      </v-col>
    </v-row>

    <v-parallax
        height="500"
        dark
        src="@/assets/farm-workers.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-1 mb-4">Text description here</h1>
            <h4 class="subheading">Text description here</h4>
          </v-col>
        </v-row>
      </v-parallax>

      <v-row
        align="center"
        justify="center">
        <v-col cols="10">
          <p>
            PASE responded to this challenge when the Assemblies of God 
            Credit Union wanted to sell off its oil palm farm on a 
            55.8acre land, and its partially completed artisanal palm 
            oil mill, located at Kunsu (Sika Frε Mogya) near Mankranso. 
            Pressed for funds to recapitalise their credit union, our 
            take-over stopped them from succumbing to pressure from some 
            illegal miners in the area who were ready to purchase it for 
            the sole purpose of mining which would have caused irreversible 
            damage to the environment. 
          </p>
          <p>
            Since taking over the farm, PASE has 
            had to take stringent measures to stop these illegal miners from 
            encroaching on the land. We completed the mill and reached out to 
            the small-holder out-growers of FFB to build long term relationships. 
            A rapidly growing number of farmers now supply the mill and so PASE 
            is already bringing new and regular income to farmers in the area.
          </p>
        </v-col>
      </v-row>

      <v-parallax
        height="500"
        dark
        src="@/assets/mill-workers.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-1 mb-4">Text description here</h1>
            <h4 class="subheading">Text description here</h4>
          </v-col>
        </v-row>
      </v-parallax>

      <v-row justify="center">
        <v-col align="center" cols="5">
          <v-card href="https://www.kimdogbe.com" height="200" color="#42934c">
            <h2>Our Vision</h2>
          </v-card>
        </v-col>

        <v-col align="center" cols="5">
          <v-card href="https://www.kimdogbe.com" height="200" color="#42934c">
            <h2>Our Mission</h2>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
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