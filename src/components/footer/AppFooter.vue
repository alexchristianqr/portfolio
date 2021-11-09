<template>
  <footer id="footer">
    <div class="container text-center">
      <div class="copyright">
        <span>&copy; Copyright </span>
        <span class="fw-bold">{{ new Date().getFullYear() }}</span>
        <!--<span>-->

          <!--<div class="btn-group position-sticky text-center ">-->
          <!--<button type="button" class="btn btn-secondary btn-sm" :class="{ 'active': language == 'en' }" @click="changeLanguage('en')">En</button>-->
          <!--<button type="button" class="btn btn-secondary btn-sm" :class="{ 'active': language == 'es' }" @click="changeLanguage('es')">Es</button>-->
          <!--</div>-->
        <!--</span>-->
      </div>
      <!--<div class="btn-group">-->
        <!--<button class="btn btn-secondary btn-sm dropdown-toggle" type="button">Es</button>-->
        <!--<ul class="dropdown-menu">-->
          <!--<li><a class="dropdown-item active" href="#">Action</a></li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    language: 'en',
    changed: false,
  }),
  mounted() {
    this.language = localStorage.getItem('lang')
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang
      this.$store.commit('setLanguage', lang)
      this.$store.commit('setLoadingPage', true)
    },
  },
}
</script>

<style scoped></style>
