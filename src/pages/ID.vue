<template>
  <q-page padding>
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      side="left"
    >
    hhhss
      <!-- <q-list
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
      </q-list>-->
    </q-layout-drawer>
hh
    <q-layout-drawer
      v-model="rightDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      side="right"
    >
      <!-- <router-view name="helper" /> -->
    </q-layout-drawer>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      // rightDrawerOpen: this.$q.platform.is.desktop,
      // leftDrawerOpen: true
      // view: 'hHh lpr fff'
    }
  },
}
</script>

<style>
</style>
