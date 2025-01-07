<template>
  <section id="summary" class="resume section-bg">
    <div class="container">
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[4] }}</h2>
        <p>{{ selectedLanguage.SectionResume.p }}</p>
      </div>

      <div class="row">
        <div class="col-lg" data-aos="fade-up" v-for="(v, k) in selectedLanguage.SectionResume.categories" :key="k">
          <h3 class="resume-title">{{ v.title }}</h3>

          <div class="resume-item" v-for="(vv, kk) in v.data" :key="kk">
            <h4>{{ vv.title }}</h4>
            <h5 v-if="vv.date">{{ vv.date }}</h5>
            <p>
              <span>
                <span>{{ vv.local }}</span>
              </span>
              <span v-if="vv.link">&nbsp;&nbsp;&blacksquare;&nbsp;&nbsp;</span>
              <span v-if="vv.link">
                <a :href="vv.link" target="_blank">{{ vv.link }}</a>
              </span>
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

<script setup>
import { globalMixin } from "../../mixins/index.js";

const { selectedLanguage } = globalMixin();
</script>

<style scoped>
.resume .resume-item::before {
  background: #1f5297;
}
</style>
