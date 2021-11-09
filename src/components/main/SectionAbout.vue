<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[1] }}</h2>
        <p>{{ selectedLanguage.SectionAbout.p }}</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="assets/img/me.jpg" class="img-fluid" alt="" width="100%" />
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content my-auto" data-aos="fade-left">
          <h3>{{ selectedLanguage.SectionAbout.h3 }}</h3>
          <div class="row pb-5">
            <div class="col-lg-12">
              <div class="form-group">
                <p>{{ selectedLanguage.SectionAbout.p2 }}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[0].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[0].value }}</span>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[1].text }}:</strong>
                  <a :href="selectedLanguage.SectionAbout.li[1].value" target="_blank">{{ selectedLanguage.SectionAbout.li[1].value }}</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[2].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[2].value }}</span>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[3].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[3].value }}</span>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <!--Edad-->
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[4].text }}:</strong>
                  <span>{{ new Date().getFullYear() - 1993 }}</span>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[5].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[5].value }}</span>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[6].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[6].value }}</span>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[7].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[7].value }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAbout',
}
</script>

<style scoped></style>
