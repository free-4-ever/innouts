<template>
  <q-page padding class="flex flex-center">
    <player :player="player"></player>
    <q-layout-drawer
      v-model="rightDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      side="right"
    >
      <teammates :teammates="['Joe', 'Jack']" ></teammates>
      Fantasticie! I love my beatiful, kind, forgiving God
    </q-layout-drawer>
  </q-page>
</template>

<script>
import axios from 'axios'
import Teammates from 'components/Teammates.vue'
import Player from 'components/Player.vue'

export default {
  // name: 'PageName',
  components: {
    Player,
    Teammates,
  },

  data () {
    return {
      player: Object,
      // companions: Array,
      error: null,
      // leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen: this.$q.platform.is.desktop,
      // leftDrawerOpen: true
      // view: 'hHh lpr fff'
    }
  },

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

  created: function () {
    this.$emit('sendView', ['hhh lpR fff', false, true])
  }
}
</script>

<style>
</style>
