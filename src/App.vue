<template>
  <v-app id ="inspire">

    <v-app-bar color="transparent" absolute flat dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      dark
      v-model="drawer"
      color="#42934c"
      width="240"
    >

    <div class="d-flex align-center">
        <v-img
          alt="PASE Logo"
          contain
          src="@/assets/pase-logo.png"
          width="250"
        />
      </div>

      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item
          v-for="heading in headings" 
          :key="heading.name"
          :to="heading.link">
          {{ heading.name }}
        </v-list-item>
      </v-list>
      

    </v-navigation-drawer>

    <v-main>

      <router-view :key="$route.path"/>
    </v-main>

    
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      headings: [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Farmers and Community', link: '/farmers'},
        {name: 'PASE Farm', link: '/pase-farm'},
        {name: 'PASE Mill', link: '/pase-mill'},
        {name: 'Partners and Links', link: '/partners-links'},
        {name: 'Research', link: '/research'},
        {name: 'Contact Us', link: '/contact-us'}
      ],
      drawer: true,
    }
  },
}
</script>

