<template>

  <v-app :style="{background: $vuetify.theme.themes[theme].background}">

    <!--    appBar & navDrawer-->
    <AppNavDrawer/>

    <!--main view / router-->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!--    footer-->
    <v-footer>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Hello </strong>

      </v-col>
    </v-footer>

  </v-app>

</template>

<script>
import AppNavDrawer from "@/components/AppNavDrawer";

export default {
  name: 'App',
  components: {
    AppNavDrawer
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }


}
</script>
<style>
@import './assets/styles/styles.css';
</style>
