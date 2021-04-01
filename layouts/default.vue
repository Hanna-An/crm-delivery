<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
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

          <nuxt-link
            class="link"
            to="/user">
            <v-list-item>
              <v-list-item-title>
                <div>Профиль</div>
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link
            class="link"
            to="/shops">
            <v-list-item>
              <v-list-item-title>
                <div>Магазины</div>
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      max-height="64"
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <div class="mt-1">
        <a href="#" class="delete-item glo" @click.prevent="logout">Logout</a>
      </div>
    </v-app-bar>
    <v-divider />
    <v-main>
      <v-container class="container--fluid px-0 py-0">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
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
  padding: 8px 0;
  text-transform: uppercase;
  width: 150px;
  text-decoration: none;
  text-align: center;
  display: block;
  background-image: linear-gradient(to left, transparent, transparent 50%, #00c6ff 50%, #00c6ff);
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all .25s ease-in;
  font: 400 15px tahoma;
  border: 1px solid #00C6FF;
}

a.glo:hover {
  background-position: 0 0;
  color: #fff;
}

.link {
  text-decoration: none;
}
</style>
