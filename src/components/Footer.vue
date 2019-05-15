<template>
  <div>
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
    <!-- <div class="row justify-around">
      <div class="col-sm">
        <p class="q-ma-0 text-center text-white border-left border-right p-1">Copyright &copy; 2018-2019 Innouts</p>
      </div>

      <div class="col-sm text-center">
        <a href="http://www.instagram.com/_innouts.com_" target="_blank"> <i class="fab fa-instagram text-brown" style="font-size: 1.8em;"></i>  </a>
      </div>
      <div class="col-sm">
        <ul class="nav justify-center m-0 border-right border-left">
          <li class="nav-item">
            <a class="nav-link p-1   active" href="">Guide</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-1 " href="">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-1 " href="">Privacy Policy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-1" href="">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'CustomFooter',
  data () {
    return {}
  }
}
</script>

<style>
</style>
