<template>
  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <img src="assets/img/me.jpg" alt="" class="img-fluid rounded-circle" />
        <h1 class="text-light">
          <a href="/portfolio">{{ selectedLanguage.fullName }}</a>
        </h1>
        <div class="social-links mt-3 text-center">
          <a href="https://www.linkedin.com/in/alexchristianqr/" target="_blank" class="linkedin" title="LinkedIn"><i class="bx bxl-linkedin"></i></a>
          <a href="https://github.com/acqrdeveloper" target="_blank" class="github" title="Github"><i class="bx bxl-github"></i></a>
          <a href="https://www.facebook.com/alexchristianqr/" target="_blank" class="facebook" title="Facebook"><i class="bx bxl-facebook"></i></a>
          <a href="https://twitter.com/alexchristianqr/" target="_blank" class="twitter" title="Twitter"><i class="bx bxl-twitter"></i></a>
          <!--<a href="#" class="google-plus"><i class="bx bxl-google"></i></a>-->
          <!--<a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>-->
        </div>
      </div>
      <div class="pt-3 mx-auto">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-dark" style="height: 2.75rem" :class="{ active: language == 'es' }" @click="changeLanguage('es')">
            <img :src="require('../../../public/assets/img/countries/per.svg')" alt="PERU" width="24" class="align-middle" />
            <div v-if="language === 'es'" class="border border-bottom border-primary"></div>
          </button>
          <button type="button" class="btn btn-dark" style="height: 2.75rem" :class="{ active: language == 'en' }" @click="changeLanguage('en')">
            <img :src="require('../../../public/assets/img/countries/usa.svg')" alt="USA" width="24" class="align-middle" />
            <div v-if="language === 'en'" class="border border-bottom border-primary"></div>
          </button>
        </div>
      </div>

      <!---->
      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
            <a href="#hero" class="nav-link scrollto active" @click="trackEvent('#home')">
              <i class="bx bx-home"></i>
              <span>{{ selectedLanguage.Header.menu[0] }}</span>
            </a>
          </li>
          <li>
            <a href="#about" class="nav-link scrollto" @click="trackEvent('#aboutme')">
              <i class="bx bx-user"></i> <span>{{ selectedLanguage.Header.menu[1] }}</span>
            </a>
          </li>
          <li>
            <a href="#skills" class="nav-link scrollto" @click="trackEvent('#skills')">
              <i class="bx bxs-hand"></i> <span>{{ selectedLanguage.Header.menu[3] }}</span>
            </a>
          </li>
          <li>
            <a href="#summary" class="nav-link scrollto" @click="trackEvent('#summary')">
              <i class="bx bx-file-blank"></i> <span>{{ selectedLanguage.Header.menu[4] }}</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" class="nav-link scrollto" @click="trackEvent('#portfolio')">
              <i class="bx bx-book-content"></i> <span>{{ selectedLanguage.Header.menu[5] }}</span>
            </a>
          </li>
          <!--<li>-->
          <!--<a href="#services" class="nav-link scrollto">-->
          <!--<i class="bx bx-server"></i> <span>{{ selectedLanguage.Header.menu[6] }}</span>-->
          <!--</a>-->
          <!--</li>-->
          <li>
            <a href="#contact" class="nav-link scrollto" @click="trackEvent('#contact')">
              <i class="bx bx-envelope"></i> <span>{{ selectedLanguage.Header.menu[8] }}</span>
            </a>
          </li>
          <li>
            <a href="/portfolio/AlexChristianQuispeRoque_Documentado_CV_2022.pdf" target="_blank" class="nav-link scrollto" @click="trackEvent('#curriculumvitae')">
              <i class="bx bx-download"></i> <span>{{ selectedLanguage.Header.menu[9] }}</span>
            </a>
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
  }),
  beforeMount() {
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
