<template>
  <div>
    <v-system-bar
      height="0"
      color="deep-purple darken-3"
    ></v-system-bar>

    <v-app-bar
      height="70"
      color="deep-purple accent-4"
      prominent
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <div>
        <a href="#" class="delete-item" @click.prevent="logout">Logout</a>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Аня</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Артём</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Магазины</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Витя</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group () {
      this.drawer = false
    }
  },
  methods: {
    logout () {
      this.$store.commit('removeToken')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
