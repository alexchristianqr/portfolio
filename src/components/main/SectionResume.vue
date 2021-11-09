<template>
  <section id="resume" class="resume">
    <div class="container">
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[4] }}</h2>
        <p>{{ selectedLanguage.SectionResume.p }}</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-up" v-for="(v, k) in selectedLanguage.SectionResume.categories" :key="k">
          <h3 class="resume-title">{{ v.title }}</h3>

          <div class="resume-item" v-for="(vv, kk) in v.data" :key="kk">
            <h4>{{ vv.title }}</h4>
            <h5>{{ vv.date }}</h5>
            <p>
              <em>{{ vv.local }}</em>
            </p>
            <ul v-for="(vvv, kkk) in vv.description" :key="kkk">
              <li>{{ vvv }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionResume',
}
</script>

<style scoped></style>
