<template>
  <section id="skills" class="skills section-bg">
    <div class="container">
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[3] }}</h2>
        <p>{{ selectedLanguage.SectionSkills.p }}</p>
      </div>
      <div class="row skills-content">
        <div class="col-lg-6" data-aos="fade-up" v-for="(v, k) in skills" :key="k">
          <div class="progress">
            <span class="skill"
              >{{ v.text }}<i class="val">{{ v.value }} %</i></span
            >
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" :aria-valuenow="v.value" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionSkills',
  data: () => ({
    skills: [
      {
        text: 'HTML',
        value: 100,
      },
      {
        text: 'PHP',
        value: 90,
      },
      {
        text: 'Javascript',
        value: 90,
      },
      {
        text: 'Mongodb',
        value: 79,
      },
      {
        text: 'Socket.IO',
        value: 100,
      },
      {
        text: 'Express',
        value: 100,
      },
      {
        text: 'Nodejs',
        value: 90,
      },
      {
        text: 'Laravel PHP',
        value: 90,
      },
      {
        text: 'Lumen PHP',
        value: 79,
      },
      {
        text: 'MySQL',
        value: 69,
      },
      {
        text: 'Shell Scripts',
        value: 54,
      },
      {
        text: 'Git',
        value: 98,
      },
      {
        text: 'Vuejs',
        value: 98,
      },
      {
        text: 'WebRTC',
        value: 69,
      },
      {
        text: 'Bootstrap',
        value: 90,
      },
    ],
  }),
}
</script>

<style scoped></style>
