<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>{{ selectedLanguage.Header.menu[8] }}</h2>
        <p>{{ selectedLanguage.SectionContact.p }}</p>
      </div>

      <div class="row" data-aos="fade-in">
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info position-relative">
            <div class="email">
              <i class="bi bi-envelope"></i>
              <h4>{{ selectedLanguage.SectionContact.contact.email.text }}:</h4>
              <p>{{ selectedLanguage.SectionContact.contact.email.value }}</p>
            </div>

            <!--<div class="address">-->
            <!--<i class="bi bi-whatsapp"></i>-->
            <!--&lt;!&ndash;<h4>{{ selectedLanguage.SectionContact.contact.whatsapp.text }}:</h4>&ndash;&gt;-->
            <!--&lt;!&ndash;<p>{{ selectedLanguage.SectionContact.contact.whatsapp.value }}</p>&ndash;&gt;-->
            <!--</div>-->

            <!--<div class="address">-->
            <!--<i class="bi bi-telegram"></i>-->
            <!--&lt;!&ndash;<h4>{{ selectedLanguage.SectionContact.contact.telegram.text }}:</h4>&ndash;&gt;-->
            <!--&lt;!&ndash;<p>{{ selectedLanguage.SectionContact.contact.telegram.value }}</p>&ndash;&gt;-->
            <!--</div>-->

            <!--<div class="address">-->
            <!--<i class="bi bi-messenger"></i>-->
            <!--&lt;!&ndash;<h4>{{ selectedLanguage.SectionContact.contact.messenger.text }}:</h4>&ndash;&gt;-->
            <!--&lt;!&ndash;<p>{{ selectedLanguage.SectionContact.contact.messenger.value }}</p>&ndash;&gt;-->
            <!--</div>-->

            <div class="address">
              <i class="bi bi-geo-alt"></i>
              <h4>{{ selectedLanguage.SectionContact.contact.location.text }}:</h4>
              <p>{{ selectedLanguage.SectionContact.contact.location.value }}</p>
            </div>

            <div class="phone">
              <i class="bi bi-phone"></i>
              <h4>{{ selectedLanguage.SectionContact.contact.phone.text }}:</h4>
              <p>{{ selectedLanguage.SectionContact.contact.phone.value }}</p>
            </div>

            <!--<iframe-->
            <!--src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"-->
            <!--frameborder="0"-->
            <!--style="border: 0; width: 100%; height: 290px"-->
            <!--allowfullscreen-->
            <!--&gt;</iframe>-->
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
