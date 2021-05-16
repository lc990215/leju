<template>
  <v-app>
    <v-main>
      <router-view />
      <tab-bar-main></tab-bar-main>
    </v-main>
  </v-app>
</template>

<script>
import TabBarMain from 'components/common/TabBar/TabBarMain'
export default {
  name: 'App',
  components:{
    TabBarMain
  }
}
</script>
