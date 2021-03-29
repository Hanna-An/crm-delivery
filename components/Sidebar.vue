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
        <a href="#" class="delete-item glo" @click.prevent="logout">Logout</a>
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
            <v-list-item-title>Максим</v-list-item-title>
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

.delete-item {
  color: black;
  text-decoration: none;
}

a.glo {
  color: #00c6ff;
  padding: 15px 20px;
  text-transform: uppercase;
  width: 150px;
  text-decoration: none;
  text-align: center;
  display: block;
  background-image: linear-gradient(to left, transparent, transparent 50%, #00c6ff 50%, #00c6ff);
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all .25s ease-in;
  font: 400 18px tahoma;
  border: 1px solid #00C6FF;
}

a.glo:hover {
  background-position: 0 0;
  color: #fff;
}
</style>
