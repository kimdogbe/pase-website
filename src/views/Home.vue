<template>
  <v-container fluid class="pa-0">
      <v-parallax
        height="500"
        dark
        src="@/assets/palm-fruit.jpg"
      >
        <v-overlay value="true" absolute>
          <v-row
            align="end"
            justify="end"
          >
            <v-col cols="12">
              <h2>PDA Agri-Industry & Social Enterprise</h2>
            </v-col>
          </v-row>
        </v-overlay>
      </v-parallax>

    <v-row
      align="center"
      justify="center">
      <v-col cols="10">
        <p>
          Welcome to PDA Agri-Industry and Social Enterprise Ltd. (PASE). 
          We are a unique social enterprise providing services to 
          smallholder farmers, their families, and their communities 
          through sustainable agriculture.
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
            <v-overlay value="true" absolute>
              <!-- <h1 class="display-1 mb-4">Text description here</h1>
              <h4 class="subheading">Text description here</h4> -->
            </v-overlay>
          </v-col>
        </v-row>
      </v-parallax>

      <v-row
        align="center"
        justify="center">
        <v-col cols="10">
          <p>
            Based in the Ahafo Ano South District of the Ashanti Region of 
            Ghana, PASE seeks to promote the dynamic, integrated human 
            development of farm households, by using locally available, 
            environmentally sustainable, and affordable resources.
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
            <v-overlay value="true" absolute>
              <!-- <h1 class="display-1 mb-4">Text description here</h1>
              <h4 class="subheading">Text description here</h4> -->
            </v-overlay>
          </v-col>
        </v-row>
      </v-parallax>
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
  color: #5a5a5a;
}
</style>