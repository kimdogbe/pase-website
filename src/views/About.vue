<template>
  <v-container mb-6>
    <v-row>
      <v-dialog 
      v-for="topic in topics" 
      :key="topic.name"
      v-model="topic.dialog" 
      width="700">
        <template v-slot:activator="{ on, attrs}">
          <v-col cols="4">
            <v-card link v-bind="attrs" v-on="on">
              <v-img
                  :src="topic.image"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
              >
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col class="text-center" cols="12">
                    <h1>{{ topic.name }}</h1>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
        </template>

        <v-card>
          <v-card-title class="headline">
            {{ topic.name }}
          </v-card-title>

          <v-card-text>
            {{ topic.text }}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="topic.dialog = false"
            >
              Done
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        topics: [
          {name: "Our Vision", image: require("@/assets/farm-workers.jpg"), text: "Text about the Vision", dialog: false},
          {name: "Our Mission", image: require("@/assets/mill-workers.jpg"), text: "Like the Songhai Centre in the Republic of Benin, from which PASE was inspired, PASE seeks to promote dynamic integrated human development of women and young farmers through the use of local resources. This will be done by simultaneously spurring agricultural production, processing, mechanisation and extension services, and building on indigenous knowledge. This will create ownership of the development process, and of the technical and external technologies, among the people and communities in which PASE operates. PASE will also seek to inspire community-spirited individuals to venture into social enterprises as a sustainable way of empowering the poor and marginalised.", dialog: false},
          {name: "Team", image: require("@/assets/weighing-ffb.jpg"), text: "Text about the processes performed", dialog: false},
          {name: "Organisation and Board", image: require("@/assets/team.jpg"), text: "Text about the organisation and the board", dialog: false},
          {name: "History", image: require("@/assets/threshing-ffb.jpg"), text: "Text describing the history", dialog: false},
          {name: "Plans", image: require("@/assets/cracked-palm.jpg"), text: "Text describing furture plans", dialog: false},
        ],
      }
    },
  }
</script>
