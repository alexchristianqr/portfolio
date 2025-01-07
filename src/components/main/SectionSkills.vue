<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[3] }}</h2>
        <p>{{ selectedLanguage.SectionSkills.p }}</p>
      </div>
      <div class="row skills-content">
        <div class="col-lg-2" data-aos="fade-up" v-for="(v, k) in dataSkills" :key="k">
          <div class="py-xl-1">
            <img :src="`/portfolio/assets/images/icons/${v.icon}`" alt="" width="48px" height="48px" class="figure-img border-0 bg-transparent" />
          </div>
          <div class="progress">
            <span class="skill">{{ v.text }}</span>
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
  name: "SectionSkills",
  data: () => ({
    dataSkills: [
      {
        text: "Java",
        value: 85,
        icon: "java.svg"
      },
      {
        text: "HTML",
        value: 100,
        icon: "html5.svg"
      },
      {
        text: "PHP",
        value: 75,
        icon: "php.svg"
      },
      {
        text: "Javascript",
        value: 90,
        icon: "javascript.svg"
      },
      {
        text: "Mongodb",
        value: 79,
        icon: "mongodb.svg"
      },
      {
        text: "Websocket",
        value: 100,
        icon: "nodejs.svg"
      },
      {
        text: "Express",
        value: 100,
        icon: "express.svg"
      },
      {
        text: "Nodejs",
        value: 90,
        icon: "nodejs.svg"
      },
      {
        text: "MySQL",
        value: 69,
        icon: "mysql.svg"
      },
      {
        text: "Bash",
        value: 54,
        icon: "bash.svg"
      },
      {
        text: "Git",
        value: 98,
        icon: "git.svg"
      },
      {
        text: "Vuejs",
        value: 98,
        icon: "vue.svg"
      },
      {
        text: "WebRTC",
        value: 45,
        icon: "webrtc.svg"
      },
      {
        text: "Typescript",
        value: 70,
        icon: "typescript.svg"
      },
      {
        text: "AWS",
        value: 60,
        icon: "aws.svg"
      },
      {
        text: "NestJS",
        value: 82,
        icon: "nestjs.svg"
      },
      {
        text: "Docker",
        value: 65,
        icon: "docker.svg"
      }
    ]
  }),
  mounted() {
    this.dataSkills.sort((x, y) => {
      if (x.value > y.value) {
        return -1; // DESC
      }

      if (x.value < y.value) {
        return 1; // ASC
      }

      return 0;
    });
  }
};
</script>

<style scoped></style>
