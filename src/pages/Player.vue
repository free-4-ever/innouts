<template>
  <q-page padding>
    <q-card inline >
      <div class="row">  <!-- use 'row' class to define a container / parent -->
        <div class="col-sm-4">
          <div class="row round-borders">
            <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
          </div>
          <div class="row">
            <q-rating
              color="orange"
              class="q-mx-auto q-my-sm"
              size="1.5rem"
              v-model="ratingModel"
              :max="5"
            />
          </div>
         <div class="row">
            <q-rating
              color="red"
              icon="favorite"
              class="q-mx-auto"
              size="1.5rem"
              v-model="ratingModel"
              :max="5"
            />
          </div>
        </div>  <!-- children will default to 'col'  -->
        <div class="col-sm-8">
            <q-table
               title="ID Card"
               :data="tableData"
               :columns="columns"
               separator="none"
               row-key="name"
               hide-bottom
               hide-header
            />
        </div>
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
  data: () => ({
    columns: [
      {
        name: 'desc',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: 'name',
        classes: 'my-class',
        style: 'width: 200px'
      },
      {
        name: 'desc',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'right',
        field: 'info',
        classes: 'my-class',
        style: 'width: 500px'
      }

    ],
    tableData: [
      {
        name: 'First Name',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        name: 'Last Name',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        name: 'Nationality',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        name: 'Birth',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      }

    ],
    ratingModel: 1,
    player: null
  }),

  mounted: function () {
    this.$axios.get('http://innouts.test/api/players/1')
      .then(response => (this.player = JSON.parse(response.data)))
  }
}
</script>

<style>
</style>
