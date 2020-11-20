<template>
  <navbar>
    <div class="navbar navbar--vue">
        <div class="container">
          <div class="navbar__inner flex">
            <h1 class="vue-color"> Générateur de Citations VueJS</h1>
            <nav>
                <ul>
                    <li><a href="../../vuejs/generator/dist/index.html">VanillaJS</a></li>
                    <li><a href="../../react/generator/">React</a></li>
                </ul>
            </nav>
          </div>
        </div>
    </div>
  </navbar>
</template>

<script>
export default {
name: "navbar.vue",
  data () {
  return {
    title: 'Générateur de citations'
  }
  }
}
</script>

<style scoped>

</style>