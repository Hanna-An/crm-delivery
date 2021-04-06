<template>
  <div>
    <div class="blocks_test">
      <v-row class="blocks blocks_one ml-auto mr-auto">
        <v-col cols="3">
          <v-img
            max-height="280"
            contain
            src="https://veryimportantlot.com/uploads/over/files/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2020/%D0%9C%D0%B0%D1%80%D1%82%202020/%D0%9C%D0%B0%D1%80%D1%82%20%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%BB%D0%BE%D0%B3%D0%B0.%20%D0%96%D0%B8%D0%B2%D0%BE%D0%BF%D0%B8%D1%81%D1%8C%2063%20(6.1)%20%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.%20%D0%98%D0%BB%D1%8C%D1%8F%20%D0%A0%D0%B5%D0%BF%D0%B8%D0%BD.%20%C2%AB%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B0%20%D0%9C%D0%BE%D0%B4%D0%B5%D1%81%D1%82%D0%B0%20%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B0%20%D0%9C%D1%83%D1%81%D0%BE%D1%80%D0%B3%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%C2%BB.jpg"
          />
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col
              cols="12"
              class="d-flex"
            >
              <div>
                <h1 class="mb-4">
                  New user
                </h1>
                <div>
                  <v-btn
                    class="btn_skill"
                    elevation="3"
                    outlined
                    rounded
                    small
                  >
                    Admin
                  </v-btn>

                  <v-btn
                    class="btn_skill"
                    elevation="3"
                    outlined
                    rounded
                    small
                  >
                    Speaker
                  </v-btn>

                  <v-btn
                    class="btn_skill"
                    elevation="3"
                    outlined
                    rounded
                    small
                  >
                    AMA
                  </v-btn>
                </div>
                <br>
              </div>
              <div
                class="ml-auto mt-4"
              >
                <div>
                  <v-btn
                    class="mb-9 mr-2"
                    color="secondary"
                    elevation="3"
                    icon
                    x-small
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>

                  <v-btn
                    color="secondary"
                    class="mb-9 mr-2"
                    elevation="3"
                    icon
                    x-small
                  >
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>

                  <v-btn
                    color="secondary"
                    class="mb-9 mr-2"
                    elevation="3"
                    icon
                    x-small
                  >
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>

                  <v-btn
                    color="secondary"
                    class="mb-9 mr-2"
                    elevation="3"
                    icon
                    x-small
                  >
                    <v-icon>mdi-google</v-icon>
                  </v-btn>

                  <v-btn
                    color="secondary"
                    class="mb-9"
                    elevation="3"
                    icon
                    x-small
                  >
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-btn
                    class="btn_skill"
                    elevation="2"
                    text
                    rounded
                    small
                  >
                    <v-icon class="mr-1">
                      mdi-email
                    </v-icon>
                    send message
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <div>
                <div>
                  Cheerful resident in this wonderful world.
                </div>
                <div>
                  <v-icon
                    dense
                  >
                    mdi-apple-safari
                  </v-icon>
                  <span>Minsk, Belarus</span>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <div
                class="block d-flex ml-auto"
              >
                <div class="block_follower mr-1">
                  <h4>440</h4>
                  <p>followers</p>
                </div>
                <div class="block_follower">
                  <h4>31</h4>
                  <p>following</p>
                </div>
                <div
                  class="block_follow pt-2 ml-1"
                >
                  <h2>+ Follow</h2>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-divider class="separator"/>
    <v-row class="blocks ml-auto mr-auto mt-5">
      <v-col cols="3">
        <h4 class="mt-2">My Core Skills:</h4>
      </v-col>
      <v-col cols="3 d-flex">
        <v-btn
          class="rating"
          text
          rounded
          color="orange"
        >
          <h4>Inbound marketing</h4>
          <v-rating
            class="mb-1"
            readonly
            hover
            dense
            length="3"
            size="15"
            value="3"
            color="black"
          />
        </v-btn>
        <v-btn
          text
          rounded
          color="orange"
        >
          <h4>Cool marketing</h4>
          <v-rating
            class="mb-1"
            readonly
            hover
            dense
            length="2"
            size="15"
            value="2"
            color="black"
          />
        </v-btn>
        <v-btn
          text
          rounded
          color="orange"
        >
          <h4>Growth marketing</h4>
          <v-rating
            class="mb-1"
            readonly
            hover
            dense
            length="1"
            size="15"
            value="1"
            color="black"
          />
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="blocks ml-auto mr-auto mt-5">
      <v-col cols="8">
        <div>
          <div class="d-flex">
            <div>
              <h3>Professional Bio</h3>
            </div>
            <div class="ml-auto">
              <h4 class="mr-12">10 years of experience</h4>
            </div>
          </div>
        </div>
      </v-col>
<!--      <v-col cols="4">-->
<!--        <h3>Where I write</h3>-->
<!--      </v-col>-->
      <v-col cols="8">
        <p>Most of all in my life I love programming</p>
        <p>More than 10,000 books on this topic have been read and courses taken. I am the most pumped-up man</p>
        <p>If you look at the code that you wrote more than half a year ago, then, most likely, it will seem to you that
          the author is someone else.
          Programming is like sex: one mistake and you have to support your whole life.
        </p>
      </v-col>
      <v-col
      cols="4"
      >
        <Calculator />
      </v-col>
<!--      <v-col-->
<!--        cols="2"-->
<!--      >-->
<!--        <p>Indound.org</p>-->
<!--        <p>On Startups</p>-->
<!--        <p>Linked In</p>-->
<!--        <p>HubSpot</p>-->
<!--      </v-col>-->
<!--      <v-col cols="2">-->
<!--        <p>public author</p>-->
<!--        <p>personal blog</p>-->
<!--        <p>personal blog</p>-->
<!--        <p>company blog</p>-->
<!--      </v-col>-->
    </v-row>
  </div>
</template>

<script>
import Calculator from '~/components/Calculator'
export default {
  components: {
    Calculator
  }
}
</script>

<style lang="scss" scoped>

</style>
