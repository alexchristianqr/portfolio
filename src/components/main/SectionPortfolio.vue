<template>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container">
      <!--Descripción-->
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[5] }}</h2>
        <p>{{ selectedLanguage.SectionPortfolio.p }}</p>
      </div>
      <!---->

      <!--Tab Menu-->
      <div class="row" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">Web Apps</li>
            <li data-filter=".filter-microservice">API Services</li>
            <li data-filter=".filter-mobile">Mobile Apps</li>
            <li data-filter=".filter-landing">Landing Pages</li>
          </ul>
        </div>
      </div>
      <!---->

      <!--Galeria de Imagenes-->
      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
        <div :class="`col-lg-4 col-md-6 portfolio-item filter-${v.type}`" v-for="(v, k) in selectedLanguage.SectionPortfolio.data" :key="k">
          <div class="portfolio-wrap shadow">
            <img :src="v.image" class="img-fluid border-0" alt="" />
            <div class="portfolio-links">
              <a :href="v.image" data-gallery="portfolioGallery" class="portfolio-lightbox pt-2" :data-glightbox="`title: ${v.title}; description: ${v.description ? v.description : ''};`"
                ><i class="bx bx-search"></i
              ></a>
              <a v-if="v.granted.permission" :href="v.link" target="_blank" :title="v.granted.label" class="pt-2 bg-success">
                <span>
                  <!--                  <i class="bx bx-lock-open"></i>-->
                  <i class="bx bx-code-alt"></i>
                </span>
              </a>
              <a v-if="!v.granted.permission" :href="v.link" target="_blank" :title="v.granted.label" class="pt-2 bg-danger">
                <span>
                  <i class="bx bx-code-block"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionPortfolio',
}
</script>

<style scoped></style>
