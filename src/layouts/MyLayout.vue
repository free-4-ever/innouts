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
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      side="left"
    >
      <q-list
          no-border
          link
          inset-delimiter
        >
          <q-list-header>Essential Links</q-list-header>
          <q-item to="/players/1">
            <q-item-side icon="ball" />
            <q-item-main label="Player" sublabel="quasar-framework.org" />
          </q-item>
          <q-item @click.native="openURL('https://github.com/quasarframework/')">
            <q-item-side icon="code" />
            <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
          </q-item>
          <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
            <q-item-side icon="chat" />
            <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
          </q-item>
          <q-item @click.native="openURL('http://forum.quasar-framework.org')">
            <q-item-side icon="record_voice_over" />
            <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
          </q-item>
          <q-item @click.native="openURL('https://twitter.com/quasarframework')">
            <q-item-side icon="rss feed" />
            <q-item-main label="Twitter" sublabel="@quasarframework" />
          </q-item>
      </q-list>
    </q-layout-drawer>

    <q-layout-drawer
      v-model="rightDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      side="right"
    >
      <!-- <right-drawer>
      </right-drawer> -->
      babe
    </q-layout-drawer>

    <q-ajax-bar />

    <!-- <transition name="fade"> -->
    <q-page-container>
        <router-view @sendView="setView" />
    </q-page-container>
    <!-- </transition> -->

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
// import RightDrawer from 'components/RightDrawer.vue'
// const RightDrawer = {
//   template: `
//   <template>
//     <h1>hi</h1>
//   </template>
//   `
// }

import { openURL } from 'quasar'

export default {
  name: 'MyLayout',

  components: {
    // CustomFooter,
  },

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

  }
}
</script>

<style>
</style>
