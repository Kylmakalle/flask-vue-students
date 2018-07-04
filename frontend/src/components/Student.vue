<template>
  <v-flex v-bind="{ [`xs2`]: true }">
    <v-card>
      <v-card-media
        :src="data.photo"
        height="250px"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs1 align-end>
              <span class="headline white--text" v-text="data.last_name"></span>
              <br>
              <span class="headline white--text" v-text="data.first_name"></span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn slot="activator" icon>
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: 'Student'
  }
</script>
