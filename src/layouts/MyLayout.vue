<template>
  <q-layout :view="view">
    <q-layout-header>
      <!-- <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
       -->
      <q-toolbar color="primary" >

        <q-btn
          flat round dense
          icon="menu"
          @click="leftSide = !leftSide"
        />

        <q-toolbar-title>
          Innouts
          <span slot="subtitle">
            You Come First!
          </span>
        </q-toolbar-title>

        <q-btn-dropdown split flat label="Premier League" to="" color="" icon="folder" outline rounded glossy >
          <!-- dropdown content -->
          <q-list link>
            <q-item dense>
              <q-item-side icon="folder" inverted color="primary" />
              <q-item-main>
                <q-item-tile label>Item</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn flat round dense icon="mail" />
        <q-btn flat round dense icon="alarm" />
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <q-ajax-bar />
      <router-view @sendView="setView" />
    </q-page-container>

    <q-layout-footer>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Footer
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen: this.$q.platform.is.desktop,
      // leftDrawerOpen: true
      view: 'hHh lpr fff'
    }
  },
  methods: {
    openURL,

    setView: function (view) {
      this.view = view[0]
      this.leftDrawerOpen = view[1]
      this.rightDrawerOpen = view[2]
      // alert('j')
    },

    // setLeftDrawer (val) {
    //   this.leftDrawerOpen = val
    // }
  }
}
</script>

<style>
</style>
