<template>
  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <a href="/portfolio/">
          <img alt="" class="img-fluid rounded-circle" />
        </a>
        <h1 class="text-light">
          <a href="/portfolio/">{{ selectedLanguage.fullName }}</a>
        </h1>
        <div class="social-links mt-3 text-center">
          <a href="https://linkedin.com/in/alexchristianqr/" target="_blank" class="linkedin" title="LinkedIn"><i class="bx bxl-linkedin"></i></a>
          <a href="https://github.com/alexchristianqr/" target="_blank" class="github" title="Github"><i class="bx bxl-github"></i></a>
          <a href="https://facebook.com/alexchristianqr/" target="_blank" class="facebook" title="Facebook"><i class="bx bxl-facebook"></i></a>
        </div>
      </div>
      <div class="pt-3 mx-auto">
        <div class="btn-group" role="group" aria-label="Basic example">
          <div class="btn" style="height: 2.75rem" :class="{ active: language === 'es' }" @click="changeLanguage('es')">
            <span v-if="language === 'es'" class="fw-bold text-white"><u>Es</u></span>
            <span v-else class="text-white-50">Es</span>
          </div>
          <div class="btn btn-sm fw-bold" style="height: 2.75rem; padding-left: 0; padding-right: 0">|</div>
          <div class="btn" style="height: 2.75rem" :class="{ active: language === 'en' }" @click="changeLanguage('en')">
            <span v-if="language === 'en'" class="fw-bold text-white"><u>En</u></span>
            <span v-else class="text-white-50">En</span>
          </div>
        </div>
      </div>

      <!---->
      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <!--          <li>-->
          <!--            <a href="#hero" class="nav-link scrollto active" @click="trackEvent('#home')">-->
          <!--              <i class="bx bx-home"></i>-->
          <!--              <span>{{ selectedLanguage.Header.menu[0] }}</span>-->
          <!--            </a>-->
          <!--          </li>-->
          <li>
            <a href="#profile" class="nav-link scrollto" @click="trackEvent('#profile')">
              <i class="bx bx-user"></i> <span>{{ selectedLanguage.Header.menu[1] }}</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" class="nav-link scrollto" @click="trackEvent('#portfolio')">
              <i class="bx bx-book-content"></i> <span>{{ selectedLanguage.Header.menu[5] }}</span>
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
            <a :href="urlFileCV" target="_blank" class="nav-link scrollto" @click="trackEvent('#curriculumvitae')">
              <i class="bx bx-download"></i> <span>{{ selectedLanguage.Header.menu[9] }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- .nav-menu -->
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { globalMixin } from "../../mixins/index.js";

const { selectedLanguage, trackEvent } = globalMixin();

// Accede a la store de Vuex
const store = useStore();

// Estado reactivo para el idioma
const language = ref(store.state.prefixLanguage);
const urlFileCV = ref(`/portfolio/files/${import.meta.env.VITE_APP_FILENAME_CV}`);

// Función para cargar el idioma desde localStorage
const loadLanguage = () => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    language.value = savedLang;
  }
};

// Llama a la función cuando el componente se monta
onMounted(() => {
  loadLanguage();
});

// Función para cambiar el idioma
const changeLanguage = (lang) => {
  store.dispatch("changeLanguage", lang); // Cambiar idioma en el store
  language.value = lang; // Cambiar idioma en el componente
};
</script>

<style scoped></style>
