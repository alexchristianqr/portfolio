<template>
  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <img src="assets/img/me.jpg" alt="" class="img-fluid rounded-circle" />
        <h1 class="text-light"><a href="/portfolio">Alex Christian</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <div class="pt-3 mx-auto">
        <div class="btn-group position-sticky text-center w-100">
          <button type="button" class="btn btn-primary btn-sm" :class="{ 'active': language == 'en' }" @click="changeLanguage('en')">En</button>
          <button type="button" class="btn btn-primary btn-sm" :class="{ 'active': language == 'es' }" @click="changeLanguage('es')">Es</button>
        </div>
        <!--<button class="btn btn-sm text-white mr-5" :class="{ 'btn-primary': language == 'en' }" @click="changeLanguage('en')">-->
          <!--<span>En</span>-->
        <!--</button>-->
        <!--<button class="btn btn-sm text-white" :class="{ 'btn-primary': language == 'es' }" @click="changeLanguage('es')">-->
          <!--<span>Es</span>-->
        <!--</button>-->
      </div>

      <!---->
      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
            <a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>{{selectedLanguage.Header.menu[0]}}</span></a>
          </li>
          <li>
            <a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>{{selectedLanguage.Header.menu[1]}}</span></a>
          </li>
          <li>
            <a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>{{selectedLanguage.Header.menu[2]}}</span></a>
          </li>
          <li>
            <a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>{{selectedLanguage.Header.menu[3]}}</span></a>
          </li>
          <li>
            <a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>{{selectedLanguage.Header.menu[4]}}</span></a>
          </li>
          <li>
            <a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>{{selectedLanguage.Header.menu[5]}}</span></a>
          </li>
        </ul>
      </nav>
      <!-- .nav-menu -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
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
