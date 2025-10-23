<script setup lang="ts">
import { reactive, ref } from 'vue'

useSeoMeta({
  title: 'Contact — MajorCraft',
  description: 'Contactez MajorCraft pour créer ou améliorer votre vitrine digitale, simplement et efficacement.',
  ogTitle: 'Contact – MajorCraft',
  ogDescription: 'Une vitrine digitale esthétique et performante. Contactez-moi pour un devis gratuit.',
  ogImage: '/logo-full.png',
})

const form = reactive({
  lastname: '',
  firstname: '',
  email: '',
  subject: 'one-page',
  text: '',
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
      body: form,
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
  <section class="min-h-screen bg-gradient-to-b from-white to-gray-100 text-black px-6 py-20">
    <!-- HEADER -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h1 class="text-5xl font-extrabold mb-4 relative inline-block">
        Contact
        <span class="absolute left-0 bottom-0 w-full h-1 bg-amber-600 rounded-full scale-x-50 origin-left"></span>
      </h1>
      <p class="text-lg text-gray-700 mt-4">
        Vous avez un projet ? Une idée ? Parlons-en.  
        Je vous réponds rapidement, sans jargon technique.
      </p>
    </div>

    <!-- CONTACT DIRECT -->
    <div class="text-center mb-16">
      <h2 class="text-xl font-semibold mb-6">Contact direct</h2>
      <div class="flex justify-center flex-wrap gap-4">
        <a
          href="mailto:r.nigondpro@gmail.com"
          class="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-amber-800 transition"
        >
          ✉️ <span>r.nigondpro@gmail.com</span>
        </a>
        <a
          href="tel:+33781496949"
          class="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-amber-800 transition"
        >
          📞 <span>07 81 49 69 49</span>
        </a>
        <a
          href="https://www.linkedin.com/in/romain-nigond/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-amber-800 transition"
        >
          💼 <span>LinkedIn</span>
        </a>

      </div>
    </div>

    <!-- FORMULAIRE -->
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
      <div class="text-center mb-10">
        <h3 class="text-2xl font-bold underline decoration-2 decoration-amber-600 underline-offset-4 mb-2">
          Laissez-moi un message
        </h3>
        <p class="text-gray-600">Remplissez ce formulaire, et je reviendrai vers vous rapidement.</p>
      </div>

      <!-- Messages -->
      <div v-if="success" class="bg-green-100 text-green-800 px-4 py-3 rounded-md text-sm flex items-center gap-2 mb-6">
        ✅ Votre message a bien été envoyé. Je vous réponds rapidement.
      </div>

      <div v-if="error" class="bg-red-100 text-red-800 px-4 py-3 rounded-md text-sm flex items-center gap-2 mb-6">
        ❌ Une erreur est survenue. Merci de réessayer ou de me contacter directement.
      </div>

      <form @submit.prevent="envoyerFormulaire" class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            v-model="form.lastname"
            type="text"
            placeholder="Nom"
            id="lastname"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            v-model="form.firstname"
            type="text"
            placeholder="Prénom"
            id="firstname"
            class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <input
          v-model="form.email"
          type="email"
          placeholder="Adresse mail"
          id="email"
          class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          v-model="form.subject"
          id="subject"
          class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="one-page">Offre One-page</option>
          <option value="five-page">Offre 5 pages</option>
          <option value="customize">Offre Personnalisée</option>
        </select>

        <textarea
          v-model="form.text"
          placeholder="Expliquez votre demande..."
          rows="6"
          id="text"
          class="w-full border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>

        <button
          type="submit"
          :disabled="loading"
          class="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-500 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto mx-auto"
        >
          <svg
            v-if="loading"
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          <span>{{ loading ? 'Envoi en cours...' : 'Envoyer la demande' }}</span>
        </button>
      </form>
    </div>

    <!-- FOOTER CTA -->
    <div class="text-center mt-20">
      <h3 class="text-lg text-gray-700 mb-4">Besoin d’un devis rapide ?</h3>
      <NuxtLink
        to="/offres"
        class="text-black underline underline-offset-4 hover:text-amber-600 decoration-amber-600 hover:decoration-black font-medium"
      >
        Découvrez mes offres →
      </NuxtLink>
    </div>
  </section>
</template>
