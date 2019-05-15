<template>
  <q-layout view="hhh lpr fff"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Heade
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
      <q-layout-drawer
        side="right"
        :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
        v-model="rightDrawer"
      >
        <!-- <q-page-container> -->
        <router-view name="helper"/>
        <!-- </q-page-container> -->
      </q-layout-drawer>

    <!-- <q-page-container  > -->
      <!-- This is where pages get injected -->
      <router-view @setTeammates="setTeammates"/>
      <!-- <q-ajax-bar /> -->
    </q-page-container>

    <q-layout-footer>
      <custom-footer></custom-footer>
    </q-layout-footer>

  </q-layout>
</template>

<script>
import CustomFooter from '../components/Footer.vue'

export default {
  // name: 'LayoutName',
  components: {
    CustomFooter,
  },

  data () {
    return {
      leftDrawer: true,
      rightDrawer: true,
      teammates: []
    }
  },

  methods: {
    setTeammates: function (mates) {
      this.teammates = mates
      // alert('fe')
      // this.teammates.push()
      // this.teammates = this.teammates.filter(function (item) {
      //   return item === mates
      // })
    }
  },

  // beforeRouteEnter (to, from, next) {
  //   alert(to.params.id)
  // }
}
</script>

<style>
</style>
