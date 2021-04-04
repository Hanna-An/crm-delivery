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
            to="/shops">
            <v-list-item>
              <v-list-item-title>
                <div>Магазины</div>
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link
            class="link"
            to="/users">
            <v-list-item>
              <v-list-item-title>
                <div>Users</div>
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
      <NuxtLink to="/">
        <img class="lynx" src="https://www.seekpng.com/png/detail/87-873124_augusta-lynx-logo-png-transparent-augusta-lynx.png" alt="">
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-menu
        offset-y
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar>
              <img
                src="https://veryimportantlot.com/uploads/over/files/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2020/%D0%9C%D0%B0%D1%80%D1%82%202020/%D0%9C%D0%B0%D1%80%D1%82%20%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%BB%D0%BE%D0%B3%D0%B0.%20%D0%96%D0%B8%D0%B2%D0%BE%D0%BF%D0%B8%D1%81%D1%8C%2063%20(6.1)%20%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.%20%D0%98%D0%BB%D1%8C%D1%8F%20%D0%A0%D0%B5%D0%BF%D0%B8%D0%BD.%20%C2%AB%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B0%20%D0%9C%D0%BE%D0%B4%D0%B5%D1%81%D1%82%D0%B0%20%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B0%20%D0%9C%D1%83%D1%81%D0%BE%D1%80%D0%B3%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%C2%BB.jpg"
              >
            </v-avatar>
          </v-btn>
        </template>

        <v-card
        min-width="150"
        color="#f5f5f5"
        >
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider></v-divider>
              <nuxt-link
                class="link"
                to="/profile">
                <v-btn
                  depressed
                  rounded
                  text
                >
                  Профиль
                </v-btn>
              </nuxt-link>
              <v-divider></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                menu
              </v-btn>
              <v-divider></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                menu
              </v-btn>
              <v-divider></v-divider>
              <v-btn
                @click.prevent="logout"
                depressed
                rounded
                text
              >
                 Logout
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
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
  name: 'default',
  data: () => ({
    drawer: false,
    group: null,
    user: {
      initials: 'NU',
      fullName: 'New User',
      email: 'new.user@yahoo.com'
    }
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

.link {
  text-decoration: none;
}

</style>
