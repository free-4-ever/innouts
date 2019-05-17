<template>
  <div>
    <q-card inline>
      <div class="row">  <!-- use 'row' class to define a container / parent -->
        <div class="col-sm-4">
          <div class="row">
            <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" class="q-mx-auto round-borders">
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
              v-model="customTable"
               title="ID Card"
               :data="tableData"
               :columns="columns"
               separator="none"
               row-key="name"
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
  </div>
</template>

<script>
export default {
  name: 'Player',

  data: () => ({
    columns: [
      {
        name: 'desc',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: 'attribute',
        classes: 'my-class',
        style: 'width: 300px'
      },
      {
        name: 'desc',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: 'info',
        classes: 'my-class',
        style: 'width: 300px'
      }

    ],
    ratingModel: 1,
    tableData: [],

  }),

  props: {
    player: Object,
  },

  watch: {
    // '$route' (to, from) {
    //   this.fetchData(to.params.id)
    // }
    'player' () {
      this.tableData = [
        {
          attribute: 'First Name',
          info: this.player.firstName,
        },
        {
          attribute: 'Last Name',
          info: this.player.lastName,
        },
        {
          attribute: 'Nationality',
          info: this.player.nationality,
        },
        {
          attribute: 'Birth',
          info: this.player.birthday.date,
        },
        {
          attribute: 'Height',
          info: this.player.height,
        },
        {
          attribute: 'Weight',
          info: this.player.weight,
        },
        {
          attribute: 'Foot',
          info: this.player.foot,
        },
        {
          attribute: 'Position',
          info: this.player.broadPosition,
        },
      ]
      // alertthis.QTable.innerPagination.rowsPerPage
    }

  },

  mounted: function () {
    // alert(QTable)
    // alert('ran')
  }

}
</script>

<style>
</style>
