<template>
  <div class="container">
    <header>
      <div class="text-vcenter">
        <a href="#" class="delete-item" @click.prevent="logout">Logout &#128682;</a>
      </div>
    </header>
    <div
      v-if="subarray.length > 0"
    >
    </div>
    <div>
      <table>
        <caption>User table</caption>
        <thead>
          <tr>
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
              Id
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
            v-for="(obj, index) in subarray[page]"
            :key="index + obj.id"
          >
            <td data-label="Id">
              {{ obj.id }}
            </td>
            <td data-label="First name">
              {{ obj.first_name }}
            </td>
            <td data-label="Last name">
              {{ obj.last_name }}
            </td>
            <td data-label="Email">
              {{ obj.email }}
            </td>
            <td data-label="Sex">
              {{ obj.gender }}
            </td>
            <td data-label="IP">
              {{ obj.ip_address }}
            </td>
            <td data-label="Edit">
              <button class="icon">
                &#128395;
              </button>
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
        type="button"
        @click="page--"
      >
        -
      </button>
      <button
        v-for="key in subarray.length"
        :key="key + Math.floor(Math.random() * 1000000)"
        @click="page = key -1 "
        type="button"
      >
        {{ key }}
      </button>
      <button
        type="button"
        @click="page++"
      >
        +
      </button>
      <p>Страница {{ page + 1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      objects: [],
      subarray: [],
      page: 0
    }
  },
  async created () {
    this.objects = await this.$axios.$get('/users.json')
    const array = this.objects
    const size = 10
    const arr = []
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      arr[i] = array.slice((i * size), (i * size) + size)
    }
    this.subarray = arr
  },
  methods: {
    logout () {
      this.$store.commit('removeToken')
      this.$router.push('/login')
    },
    deleteItem (id) {
      for (let i = 0; i <= this.objects.length; i++) {
        console.log(this.objects.id)
        // нужно доделать удаление
      }
    }
  }
}
</script>

<style>

header {
  background-color: whitesmoke;
  display: table;
  font-family: 'Righteous', cursive;
  font-size: 23px;
  height: 6vh;
  text-align: right;
  -webkit-transition: 1s ease;
  -o-transition: 1s ease;
  transition: 1s ease;
  width: 100%;
  z-index: 1;
}

.delete-item {
  color: black;
  text-decoration: none;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.icon {
  font-size: 1em;
}

template {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
