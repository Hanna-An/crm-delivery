<template>
  <div class="containers">
    <div
      v-if="paginate.length > 0"
    >
    </div>
    <div class="container">
      <div class="row">
        <div class="search-wrapper panel-heading col-sm-12">
          <input class="form-control" type="text" v-model="searchQuery" placeholder="Search..." />
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
          <th scope="col">
            Delete
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(obj, index) in paginate"
          :key="index + obj.id"
        >
          <td>
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
            <button class="box">
              <a
                class="button"
                :href="'#popup1' + obj.id"
              >&#128395;</a>
            </button>
            <div :id="'popup1' + obj.id" class="overlay">
              <div class="popup">
                <h2>EDIT MODE</h2>
                <a class="close" href="#">&times;</a>
                <div class="content">
                  <form @submit.prevent="updateItem(obj.id)">
                    <input
                      v-model.number="obj.id"
                      type="hidden"
                      value=""
                      readonly
                    />
                    <label>FIRST NAME</label>
                    <input
                      v-model.trim="obj.first_name"
                      type="text"
                      value=""
                      required
                    />
                    <label>LAST NAME</label>
                    <input
                      v-model.trim="obj.last_name"
                      type="text"
                      value=""
                      required
                    />
                    <label>EMAIL</label>
                    <input
                      v-model="obj.email"
                      type="email"
                      value=""
                      required
                    />
                    <label>Gender</label>
                    <input
                      name="gender"
                      type="radio"
                    />
                    <input
                      name="gender"
                      type="radio"
                    />
                    <label>IP</label>
                    <input
                      v-model="obj.ip_address"
                      type="text"
                      minlength="7"
                      maxlength="15"
                      size="15"
                      pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                      required
                    />
                    <button type="submit">SAVE</button>
                  </form>
                </div>
              </div>
            </div>
          </td>
          <td data-label="Delete">
            <button
              @click="deleteItem(obj.id)"
              class="icon"
            >
              &#9249;
            </button>
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
      >
      {{ pageNumber }}
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
