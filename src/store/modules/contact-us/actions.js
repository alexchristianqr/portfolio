import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  async "ContactUs.sendMail"({ getters, commit }, params) {
    const toast = useToast();

    try {
      // Preparar los datos para enviar el email
      const url = `${getters.env.baseUrlEmailJS}/email/send`;
      const data = {
        service_id: getters.env.serviceIdEmailJS,
        template_id: getters.env.templateIdEmailJS,
        user_id: getters.env.publicKeyEmailJS,
        template_params: {
          fullname_invited: params.fullname,
          phone_invited: params.phone,
          subject_invited: params.subject,
          to_name: params.toName,
          to_email: params.toEmail,
          message: params.message,
          reply_to: params.replyTo
        }
      };

      // Hacer la solicitud
      const response = await axios.post(url, data);
      if (response.status === 200) {
        commit("setLoadingButton", false);
        toast.success("Mensaje enviado con éxito");
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      commit("setLoadingButton", false);
      commit("setError", error);
      toast.error("El mensaje no fue enviado. Inténtalo de nuevo.");
    }
  }
};
