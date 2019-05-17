<template>
  <q-page padding class="flex flex-center">

  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PlayerProfile',
  props: {

  },
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
    tableData: [],
    ratingModel: 1,
    player: Object,
    error: null,
    // loading: false,
  }),

  beforeRouteEnter (to, from, next) {
    if (from.name === 'player') {
      next()
    } else {
      axios.get('http://innouts.test/api/players/' + to.params.id)
        .then(response => {
          next(vm => {
            // vm.setData(response.data)
            vm.player = response.data.data
          })
        })
        .catch(error => {
          from.error = error
          next(false)
        })
    }
  },

  beforeRouteUpdate (to, from, next) {
    // this.player = null
    // fetchData(to.params.id, (player) => {
    //   this.setData(player)
    // })
    this.fetchData(to.params.id)
    next()
  },

  mounted: function () {
    this.$emit('setTeammates', ['Joe', 'Bob'])
    // this.tableData = [
    //   {
    //     attribute: 'First Name',
    //     info: this.player.firstName,
    //   },
    //   {
    //     attribute: 'Last Name',
    //     info: this.player.lastName,
    //   },
    //   {
    //     attribute: 'Nationality',
    //     info: 159,
    //   },
    //   {
    //     attribute: 'Birth',
    //     info: 159,
    //   }
    // ]
  },

  created: function () {
    // let vm = this
    // vm.$axios.get('http://innouts.test/api/players/' + this.$route.params.id)
    //   .then(response => (vm.player = response.data))
    this.$emit('sendView', ['hhh lpR fff', false, true])
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
    }
  },

  methods: {
    fetchData (id) {
      this.$axios.get('http://innouts.test/api/players/' + id)
        .then(response => {
          // this.setData(response.data)
          this.player = response.data
        })
    },

    setData (newP) {
      this.player = newP
    }
  }
}
</script>

<style>
</style>
