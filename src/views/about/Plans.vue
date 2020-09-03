<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Our Plans</h2>
        <ul>
          <li>a production centre for sustainable, inexpensive, and environmentally sound agricultural production, starting with palm oil.</li>
          <li>an incubation centre for the experimentation with and promotion of agricultural technology and sustainable agricultural practices.</li>
          <li>a resource centre for training small-scale farmers in successful and sustainable crop production, livestock production and fish farming, focusing especially on young people, women, and persons with disabilities.</li>
          <li>a research centre focused on: maximizing the use of natural products, agricultural production and processing, and integrated management of plant pests and diseases.</li>
          <li>an extension service centre for making the results from research centres and institutions of higher learning across the country directly available to farmers.</li>
          <li>a renewable energy centre aiming to utilize organic waste to produce bioenergy for local domestic and commercial use.</li>
        </ul>

        <!-- TODO: add messy info image here -->
        <v-img src=""></v-img>

        <p class="mt-4">
          If you are interested in finding out more about our exciting work in these areas, please get in touch: <a href="mailto:pase@pdaghana.com">pase@pdaghana.com</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Plans',
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