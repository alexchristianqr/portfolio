<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[8] }}</h2>
        <p>{{ selectedLanguage.SectionContact.p }}</p>
      </div>

      <div class="row" data-aos="fade-in">
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="row">
            <div class="col-lg-12 d-flex align-items-stretch" style="padding-bottom: 5px">
              <div class="info" style="padding-bottom: 0">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>{{ selectedLanguage.SectionContact.contact.location.text }}</h4>
                  <p>{{ selectedLanguage.SectionContact.contact.location.value }}</p>
                </div>
                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>{{ selectedLanguage.SectionContact.contact.email.text }}</h4>
                  <p>{{ selectedLanguage.SectionContact.contact.email.value }}</p>
                </div>
                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>{{ selectedLanguage.SectionContact.contact.phone.text }}</h4>
                  <p>{{ selectedLanguage.SectionContact.contact.phone.value }}</p>
                </div>
                <!--<div class="social-links" style="padding-left: 0">-->
                <!--<h4 style="padding: 0">{{ selectedLanguage.SectionContact.contact.socialnetwork.text }}</h4>-->
                <!--<p style="padding: 0">{{ selectedLanguage.SectionContact.contact.socialnetwork.value }}</p>-->
                <!--<a v-for="(v, k) in selectedLanguage.SectionContact.contact.socialnetwork.networks" :key="k" :href="v.value" target="_blank">-->
                <!--<span :class="v.text" ></span>-->
                <!--</a>-->
                <!--</div>-->
              </div>
            </div>
            <div class="col-lg-12 d-flex align-items-stretch">
              <div class="info">
                <div class="social-links" style="padding-left: 0">
                  <h4 style="padding: 0">{{ selectedLanguage.SectionContact.contact.socialnetwork.text }}</h4>
                  <p style="padding: 0">{{ selectedLanguage.SectionContact.contact.socialnetwork.value }}</p>
                  <a v-for="(v, k) in selectedLanguage.SectionContact.contact.socialnetwork.networks" :key="k" :href="v.value" target="_blank">
                    <span :class="v.text"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form role="form" class="php-email-form" @submit.prevent="sendMessage">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">{{ selectedLanguage.SectionContact.sendMessage.name.text }}</label>
                <input type="text" name="name" class="form-control" id="name" v-model="selectedLanguage.SectionContact.sendMessage.name.value" required />
              </div>
              <div class="form-group col-md-6">
                <label for="name">{{ selectedLanguage.SectionContact.sendMessage.email.text }}</label>
                <input type="email" class="form-control" name="email" id="email" v-model="selectedLanguage.SectionContact.sendMessage.email.value" required />
              </div>
            </div>
            <div class="form-group">
              <label for="name">{{ selectedLanguage.SectionContact.sendMessage.subject.text }}</label>
              <input type="text" class="form-control" name="subject" id="subject" v-model="selectedLanguage.SectionContact.sendMessage.subject.value" required />
            </div>
            <div class="form-group">
              <label for="name">{{ selectedLanguage.SectionContact.sendMessage.message.text }}</label>
              <textarea class="form-control" name="message" rows="10" v-model="selectedLanguage.SectionContact.sendMessage.message.value" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit">{{ selectedLanguage.SectionContact.sendMessage.action.text }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionContact',
  methods: {
    sendMessage() {
      const fullName = this.selectedLanguage.SectionContact.sendMessage.name.value
      const email = this.selectedLanguage.SectionContact.sendMessage.email.value
      const subject = this.selectedLanguage.SectionContact.sendMessage.subject.value
      const message = this.selectedLanguage.SectionContact.sendMessage.message.value
      const phone = '51955588297'
      const context = `name: ${fullName}, email: ${email}, subject: ${subject}, message: ${message}`
      window.open(`https://wa.me/${phone}?text=${context}`)
    },
  },
}
</script>

<style scoped></style>
