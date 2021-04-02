<template>
  <div class="containers">
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
export default {
  middleware: 'authenticated',
  data () {
    return {
      objects: [],
      subarray: [],
      search: undefined,
      page: 0,
      gender: {
        male: 'Male',
        female: 'Female'
      }
    }
  },
  async created () {
    console.log(this.search)
    this.objects = await this.$axios.$get('/api/users')
    console.log(this.objects)
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

</style>
