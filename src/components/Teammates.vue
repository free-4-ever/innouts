<template>
  <div>
    <q-scroll-area class="fit q-pa-sm">
      <q-list
        no-border
        link
        dense
        inset-delimiter
      >
        <q-list-header>Teammates</q-list-header>
        <q-item v-for="mate in teammates" :key="mate">
          <q-item-side icon="perm_identity" />
          <q-item-main :label="mate" />
        </q-item>
        <!-- <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item> -->
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  name: 'TeammatesColumn',

  data: () => ({

  }),

  props: {
    teammates: Array
  }
}
</script>

<style>
</style>
