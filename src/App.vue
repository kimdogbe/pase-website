<template>
  <v-app id ="inspire">
    <v-app-bar
      color="#42934c"
      flat
      dark
      height="100"
      max-height="100"
    >
      <div class="d-flex align-center">
        <v-img
          alt="PASE Logo"
          contain
          src="@/assets/pase-logo.png"
          width="250"
        />
      </div>

      <v-toolbar-items>
        <v-btn to="/" rounded text>
          Home
        </v-btn>
        <v-btn to="/about" rounded text>
          About
        </v-btn>
        <v-btn to="/farmers" rounded text>
          Farmers and Community
        </v-btn>
        <v-btn to="/pase-farm" rounded text>
          PASE Farm
        </v-btn>
        <v-btn to="/pase-mill" rounded text>
          PASE Mill
        </v-btn>
        <v-btn to="/partners-links" rounded text>
          Partners and Links
        </v-btn>
        <v-btn to="/research" rounded text>
          Research
        </v-btn>
        <v-btn to="/contact-us" rounded text>
          Contact Us
        </v-btn>
      </v-toolbar-items>
      
    </v-app-bar>

    <router-view :key="$route.path"/>

    <v-footer
      color="#9db4c0"
      app
      absolute
    >
      <span class="white--text">&copy; Kwame Dogbe - 2020</span>
    </v-footer>
  </v-app>
</template>

