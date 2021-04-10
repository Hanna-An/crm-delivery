<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6>
        <v-card hover>

          <v-card-media
            src="https://pbs.twimg.com/media/ETKuE6UWkAABk54.jpg"
            height="150px"
          >
          </v-card-media>

          <v-card-title>
            <h2>v-card-title</h2>
          </v-card-title>

          <v-card-text>
            line 1<br>
            line 2<br>
            line 3
          </v-card-text>

          <v-card-actions>
            <v-btn color=success>Click #1</v-btn>
            <v-btn flat color=primary>Click #2</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon></v-icon></v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: '_user'
}
</script>

<style scoped>

</style>
