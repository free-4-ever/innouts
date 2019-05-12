<template>
  <q-page padding>
    <q-card inline style="width: 500px">
      <div class="row">  <!-- use 'row' class to define a container / parent -->
        <div class="col-4">First column</div>  <!-- children will default to 'col'  -->
        <div class="col-8">Second column</div>
      </div>
      <!-- <q-card-media>
        <img src="~assets/quasar-logo-full.svg">
      </q-card-media>
      <q-card-title>
        Cafe Basilico
        <q-rating slot="subtitle" v-model="stars" :max="5" />
        <div slot="right" class="row items-center">
          <q-icon name="place" /> 250 ft
        </div>
      </q-card-title>
      <q-card-main>
        <p>$・Italian, Cafe</p>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat round dense icon="event" />
        <q-btn flat label="5:30PM" />
        <q-btn flat label="7:30PM" />
        <q-btn flat label="9:00PM" />
        <q-btn flat color="primary" label="Reserve" />
      </q-card-actions> -->
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName'
  data () {
    // player: Object
  },

  mounted: function () {
    this.$axios.get('http://innouts.test/api/players/1')
      .then(response => (this.player = JSON.parse(response.data)))
  }
}
</script>

<style>
</style>
