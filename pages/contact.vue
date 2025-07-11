<script setup lang="ts">

useSeoMeta({
  title: 'Contact — MajorCraft',
  description: 'MajorCraft by Romain Nigond - Contactez moi pour créer ou améliorez votre vitrine digital',
  ogTitle: 'Contact  – MajorCraft',
  ogDescription: "Une vitrine digitale esthétique est essentielle aujourd'hui. Contactez MajorCraft et confiez ce travail à un professionnel du web.",
  ogImage: '/logo-full.png',
})

const form = reactive({
  lastname: '',
  firstname: '',
  email: '',
  subject: 'one-page',
  text: ''
})

const success = ref(false)
const error = ref(false)
const loading = ref(false)


const envoyerFormulaire = async () => {
  success.value = false
  error.value = false
  loading.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    success.value = true
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}



</script>
<template>
  <section class="min-h-screen px-4 py-20 bg-white text-black">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-3xl font-bold mb-6">Prenez contact</h1>
      <p class="text-lg text-gray-700 mb-12">
        Et commençons à discuter de votre future vitrine digitale.
      </p>
    </div>
    <div v-if="success" class="bg-green-100 text-green-800 px-4 py-3 rounded text-sm mb-4">
      Votre message a bien été envoyé. Je vous réponds rapidement.
    </div>

    <div v-if="error" class="bg-red-100 text-red-800 px-4 py-3 rounded text-sm mb-4">
      Une erreur est survenue. Merci de réessayer ou de me contacter directement.
    </div>

    <!-- Formulaire -->
    <form @submit.prevent="envoyerFormulaire" class="space-y-6 max-w-2xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input v-model="form.lastname" type="text" placeholder="Nom" id="lastname" class="w-full border border-gray-300 p-3 rounded" />
        <input v-model="form.firstname" type="text" placeholder="Prénom" id="firstname" class="w-full border border-gray-300 p-3 rounded" />
      </div>
      <input v-model="form.email" type="email" placeholder="Adresse mail" id="email" class="w-full border border-gray-300 p-3 rounded" />
      <select v-model="form.subject" id="subject" class="w-full border border-gray-300 p-3 rounded">
        <option value="one-page">Offre One-page</option>
        <option value="five-page">Offre 5 pages</option>
        <option value="customize">Offre Personnalisée</option>
      </select>
      <textarea v-model="form.text" placeholder="Expliquez votre demande..." rows="6" id="text" class="w-full border border-gray-300 p-3 rounded resize-none"></textarea>
      <button
        type="submit"
        :disabled="loading"
        class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <svg v-if="loading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        <span>{{ loading ? 'Envoi en cours...' : 'Envoyer la demande' }}</span>
      </button>

    </form>


    <!-- Contact direct -->
    <div class="text-center mt-16 space-y-4">
      <h2 class="text-xl font-semibold">Ou contactez-moi directement :</h2>
      <div class="flex justify-center gap-4 flex-wrap">
        <a href="mailto:majorcraft.contact@gmail.com" class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          ✉️ majorcraft.contact@gmail.com
        </a>
        <a href="tel:+33781496949" class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          📞 07 83 17 32 32
        </a>
      </div>
    </div>
  </section>
</template>
