<template>
  <div class="containers">
    <div
      v-if="paginate.length > 0"
    >
    </div>
    <div class="container" v-cloak>
      <div class="row">
        <div class="search-wrapper panel-heading col-sm-12">
          <input class="form-control" type="text" v-on:keyup.enter="searchUsers()" v-model="searchQuery" placeholder="Search..." />
          <button class="btn-search" @click="searchUsers()">Search</button>
        </div>
      </div>
      <table>
        <caption>User table</caption>
        <thead>
        <tr>
          <th scope="col">
            Id
          </th>
          <th scope="col">
            First name
          </th>
          <th scope="col">
            Last name
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Sex
          </th>
          <th scope="col">
            IP
          </th>
          <th scope="col">
            Edit
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(obj, index) in paginate"
          :key="index + obj.id"
        >
          <td>
            <nuxt-link :to="{path: '/users/' + obj.id }">
              <account-mdi />
            </nuxt-link>
            {{ obj.id }}
          </td>
          <td>
            {{ obj.first_name }}
          </td>
          <td>
            {{ obj.last_name }}
          </td>
          <td>
            {{ obj.email }}
          </td>
          <td>
            {{ obj.gender }}
          </td>
          <td>
            {{ obj.ip_address }}
          </td>
          <td data-label="Edit">
<!--            <button>-->
<!--              <v-btn-->
<!--                :href="'#popup1' + obj.id"-->
<!--                elevation="2"-->
<!--                small-->
<!--              >🔓</v-btn>-->
<!--            </button>-->
            <v-dialog
              v-model="dialog"
              max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  elevation="2"
                  small
                  v-bind="attrs"
                  v-on="on"
                >
                  🔓</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="First name"
                          v-model.trim="obj.first_name"
                          type="text"
                          value=""
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Last name"
                          v-model.trim="obj.last_name"
                          type="text"
                          value=""
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email"
                          v-model="obj.email"
                          type="email"
                          value=""
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="IP"
                          v-model="obj.ip_address"
                          type="text"
                          minlength="7"
                          maxlength="15"
                          size="15"
                          pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-container fluid>
                          <p>{{ radios || 'Gender' }}</p>
                          <v-radio-group
                            v-model="radios"
                            mandatory
                          >
                            <v-radio
                              label="Male"
                              value="Male"
                            ></v-radio>
                            <v-radio
                              label="Female"
                              value="Female"
                            ></v-radio>
                          </v-radio-group>
                        </v-container>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
<!--            <div :id="'popup1' + obj.id" class="overlay">-->
<!--              <div class="popup">-->
<!--                <h2>EDIT MODE</h2>-->
<!--                <a class="close" href="#">&times;</a>-->
<!--                <div class="content">-->
<!--                  <form @submit.prevent="updateItem(obj.id)">-->
<!--                    <input-->
<!--                      v-model.number="obj.id"-->
<!--                      type="hidden"-->
<!--                      value=""-->
<!--                      readonly-->
<!--                    />-->
<!--                    <label>FIRST NAME</label>-->
<!--                    <input-->
<!--                      v-model.trim="obj.first_name"-->
<!--                      type="text"-->
<!--                      value=""-->
<!--                      required-->
<!--                    />-->
<!--                    <label>LAST NAME</label>-->
<!--                    <input-->
<!--                      v-model.trim="obj.last_name"-->
<!--                      type="text"-->
<!--                      value=""-->
<!--                      required-->
<!--                    />-->
<!--                    <label>EMAIL</label>-->
<!--                    <input-->
<!--                      v-model="obj.email"-->
<!--                      type="email"-->
<!--                      value=""-->
<!--                      required-->
<!--                    />-->
<!--                    <label>Gender</label>-->
<!--                    <input-->
<!--                      name="gender"-->
<!--                      type="radio"-->
<!--                    />-->
<!--                    <input-->
<!--                      name="gender"-->
<!--                      type="radio"-->
<!--                    />-->
<!--                    <label>IP</label>-->
<!--                    <input-->
<!--                      v-model="obj.ip_address"-->
<!--                      type="text"-->
<!--                      minlength="7"-->
<!--                      maxlength="15"-->
<!--                      size="15"-->
<!--                      pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"-->
<!--                      required-->
<!--                    />-->
<!--                    <button type="submit">SAVE</button>-->
<!--                  </form>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <button
              class="icon"
            >
<!--              <v-btn-->
<!--                :href="'#popup2' + obj.id"-->
<!--                elevation="2"-->
<!--                small-->
<!--              >❌</v-btn>-->
              <div class="text-center">
                <v-dialog
                  v-model="dialog"
                  width="550"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      elevation="2"
                      small
                      v-bind="attrs"
                      v-on="on"
                    >
                      ❌
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="headline grey lighten-2">
                      Вы действительно хотите удалить юзера?
                    </v-card-title>

                    <v-card-text>
                      Внимание! Юзер удалится безвозвратно!
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="red darken-1"
                        text
                        @click="dialog = false"
                      >
                        Нет
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        Да
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </button>
            <div :id="'popup2' + obj.id" class="overlay">
              <div class="popup">
                <h2>Удвление</h2>
                <h3>Вы действительно хотите удалить юзера?</h3>
                <v-btn @click="deleteItem(obj.id)" color="red">Да</v-btn>
                <v-btn href="#" color="green">Нет</v-btn>
                <a class="close" href="#">&times;</a>
                <div class="content">
                </div>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <button
      v-for="pageNumber in totalPages"
      :key="pageNumber.id"
      class="w3-button"
      @click="currentPage = pageNumber"
      :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}"
      ><v-btn
        color="primary"
        elevation="2"
        text>
        {{ pageNumber }}
      </v-btn>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      searchQuery: null,
      objects: [],
      currentPage: 1,
      itemsPerPage: 30
    }
  },
  computed: {
    resultCount () {
      return this.objects.length
    },
    totalPages () {
      if (this.resultCount === 0) {
        return 1
      } else {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      }
    },
    paginate () {
      if (!this.objects) {
        return
      }
      const index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return this.objects.slice(index, index + this.itemsPerPage)
    }
  },
  async created () {
    this.objects = await this.$axios.$get('/api/users')
  },
  methods: {
    // deleteItem (id) {
    //   for (let i = 0; i <= this.objects.length; i++) {
    //     console.log(this.objects.id)
    //     // нужно доделать удаление
    //   }
    // },
    async searchUsers () {
      if (this.searchQuery) {
        this.objects = await this.$axios.$get('/api/users', {
          params: {
            name: this.searchQuery
          }
        })
      } else {
        this.objects = await this.$axios.$get('/api/users')
      }
    },
    deleteItem (id) {
      let index = null
      this.objects.forEach((item, i) => {
        if (id === item.id) {
          index = i
        }
      })
      this.objects.splice(index, 1)
    },
    updateItem (id) {
      this.objects.find((element, index, array) => {
        if (element.id === id) {
          array[index] = this.user
        }
        return element
      })
    }
  }
}
</script>

<style>
[v-cloak] {
  display: block;
  padding: 50px 0;}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.search-wrapper {
  margin: auto;
}
.form-control {
  border: 1px solid black;
  width: 200px;
  display: inline;
  margin-left: 35%;
  margin-bottom: 1rem;
  padding-left: 3px;
  float: left;
}
.btn-search {
  background: rgb(153, 231, 36);
  border: 1px solid black;
  width: 100px;
  text-align: center;
  }
</style>
