<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[1] }}</h2>
        <p>{{ selectedLanguage.SectionAbout.p }}</p>
      </div>
      <div class="row">
        <div class="col-lg-3 my-auto" data-aos="fade-up">
          <img src="assets/img/me.jpg" class="img-fluid img-thumbnail" alt="" width="75%" />
        </div>
        <div class="col-lg-9 pt-4 pt-lg-0 content my-auto" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[0].text }}:</strong>
                  <a :href="selectedLanguage.SectionAbout.li[0].value" target="_blank">{{ selectedLanguage.SectionAbout.li[0].value }}</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[1].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[1].value }}</span>
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
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[4].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[4].value }}</span>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ selectedLanguage.SectionAbout.li[5].text }}:</strong>
                  <span>{{ selectedLanguage.SectionAbout.li[5].value }}</span>
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
  computed: {
    birthDate() {
      const originDate = '1993-09-22 00:00:00' // Fecha de cumpleaños
      let today = new Date()
      let birthDate = new Date(originDate)

      // Obtener edad
      let age = today.getFullYear() - birthDate.getFullYear()
      let m = today.getMonth() - birthDate.getMonth()

      // Validar para reducir la edad obtenida
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      // Response
      return age
    },
  },
}
</script>

<style scoped></style>
