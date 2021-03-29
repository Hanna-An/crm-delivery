<template>
  <div class="container">
    <header>
      <Sidebar />
    </header>
    <div
      v-if="subarray.length > 0"
    >
    </div>
    <div class="container">
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
                      v-model="obj.gender"
                      name="gender"
                      type="radio"
                      :checked="obj.gender == gender.fimale"
                      v-bind:value="Female"
                    />
                    <input
                      v-model="obj.gender"
                      name="gender"
                      type="radio"
                      :checked="obj.gender == gender.gender"
                      v-bind:value="Male"
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
      <p>Page {{ page + 1 }}</p>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
export default {
  components: {
    Sidebar
  },
  middleware: 'authenticated',
  data () {
    return {
      objects: [],
      subarray: [],
      page: 0,
      gender: {
        male: 'Male',
        female: 'Female'
      }
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
    // deleteItem (id) {
    //   for (let i = 0; i <= this.objects.length; i++) {
    //     console.log(this.objects.id)
    //     // нужно доделать удаление
    //   }
    // },
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

input {
  display: block;
  margin: 0 auto;
}

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

.container {
  width: 100%;
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
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}

.box {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #fff;
  text-align: center;
}

.button {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  text-decoration: none;
  border: .5em solid rgba(0, 0, 0, 0);
  border-radius: 100%;
  background: rgb(245, 245, 245) linear-gradient(rgb(245, 245, 245), rgb(188, 192, 193)) 50% 50% / calc(1.5em + .5em * 2) calc(1.5em + .5em * 2);
  box-shadow: inset 0 -3px 10px rgba(255, 255, 255, 1),
  inset 0 3px 10px rgba(0, 0, 0, .4),
  0 2px 4px rgba(0, 0, 0, .9);
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: #06D85F;
}

.popup .content {
  max-height: 30%;
  overflow: auto;

}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }

  .popup {
    width: 70%;
  }
}
</style>
