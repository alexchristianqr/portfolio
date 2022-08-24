import axios from 'axios'
export default {
  async 'ContactUs.sendMail'(context, { self }) {
    try {
      // Parameters
      const url = `${context.getters.env.baseUrlEmailJS}/email/send`
      const data = {
        service_id: context.getters.env.serviceIdEmailJS,
        template_id: context.getters.env.templateIdEmailJS,
        user_id: context.getters.env.publicKeyEmailJS,
        template_params: {
          fullname_invited: self.params.fullnameInvitedEmail,
          phone_invited: self.params.phoneInvitedEmail,
          subject_invited: self.params.subjectInvitedEmail,
          to_name: self.params.toNameEmail,
          to_email: self.params.toEmail,
          message: self.params.messageEmail,
          reply_to: self.params.replyToEmail,
          // username: 'Alex',
          // 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
        },
      }

      // Request
      const response = await axios.post(url, data)
      if (response.status !== 200) return

      // Response
      context.commit('setLoadingButton', false)
      self.selectedLanguage.SectionContact.sendMessage.name.value = null
      self.selectedLanguage.SectionContact.sendMessage.email.value = null
      self.selectedLanguage.SectionContact.sendMessage.message.value = null
      self.selectedLanguage.SectionContact.sendMessage.phone.value = null
      self.selectedLanguage.SectionContact.sendMessage.subject.value = null
    } catch (e) {
      context.commit('setLoadingButton', false)
      context.commit('setError', e)
    }
  },
}
