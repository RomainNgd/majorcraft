<script setup lang="ts">
import { ref } from 'vue'
import heroImg from '@assets/images/association/mock-assoc-hero.jpg'
import act1 from '@assets/images/association/mock-assoc1.jpg'
import act2 from '@assets/images/association/mock-assoc2.jpg'
import act3 from '@assets/images/association/mock-assoc3.jpg'

useSeoMeta({
  title: 'Exemple de site pour association – MajorCraft',
  description: 'Découvrez une vitrine lumineuse et engageante pensée pour les associations locales.',
  ogImage: heroImg,
})

const isOpen = ref(false)
</script>

<template>
  <div class="bg-[#f6fff6] text-gray-900 min-h-screen">
    <!-- HEADER -->
    <header class="w-full bg-[#1e3d1f] text-white z-50 shadow-md">
      <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 class="text-2xl font-bold tracking-tight text-lime-300">Association du Sourire</h1>
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/mock/association" class="hover:text-lime-300">Accueil</NuxtLink>
          <NuxtLink to="/mock/association#actions" class="hover:text-lime-300">Nos actions</NuxtLink>
          <NuxtLink to="/mock/association#contact" class="hover:text-lime-300">Contact</NuxtLink>
        </nav>
        <button @click="isOpen = !isOpen" class="md:hidden">
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div v-if="isOpen" class="md:hidden bg-[#1e3d1f] text-center py-4 space-y-4">
        <NuxtLink to="/mock/association" class="block hover:text-lime-300">Accueil</NuxtLink>
        <NuxtLink to="/mock/association#actions" class="block hover:text-lime-300">Nos actions</NuxtLink>
        <NuxtLink to="/mock/association#contact" class="block hover:text-lime-300">Contact</NuxtLink>
      </div>
    </header>

    <!-- HERO -->
    <section class="pt-28 pb-16 bg-gradient-to-br from-lime-100 to-emerald-200 text-center">
      <h1 class="text-5xl font-extrabold text-[#1e3d1f] mb-4">Unissons nos forces 💚</h1>
      <p class="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
        Ensemble, nous construisons un avenir plus solidaire et durable.  
        Découvrez comment votre aide peut faire la différence.
      </p>
      <NuxtLink to="/mock/association#contact" class="bg-[#1e3d1f] text-white px-8 py-3 rounded-full hover:bg-[#2f5d2f] transition">
        Nous rejoindre
      </NuxtLink>
    </section>

    <!-- ACTIONS -->
    <section id="actions" class="py-20 px-6 bg-[#f0fff0]">
      <div class="max-w-5xl mx-auto text-center mb-12">
        <h2 class="text-3xl font-bold text-[#1e3d1f] mb-4">Nos actions principales</h2>
        <p class="text-gray-600">Chaque sourire compte. Voici quelques projets que nous soutenons localement.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition">
          <img :src="act1" class="w-full h-48 object-cover" alt="Action 1" />
          <div class="p-5">
            <h3 class="text-xl font-semibold text-[#1e3d1f] mb-2">Ateliers solidaires</h3>
            <p class="text-sm text-gray-600">Création, partage, inclusion : des moments d’échange pour tous.</p>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition">
          <img :src="act2" class="w-full h-48 object-cover" alt="Action 2" />
          <div class="p-5">
            <h3 class="text-xl font-semibold text-[#1e3d1f] mb-2">Soutien aux familles</h3>
            <p class="text-sm text-gray-600">Aide logistique, dons alimentaires et écoute bienveillante.</p>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition">
          <img :src="act3" class="w-full h-48 object-cover" alt="Action 3" />
          <div class="p-5">
            <h3 class="text-xl font-semibold text-[#1e3d1f] mb-2">Environnement</h3>
            <p class="text-sm text-gray-600">Sensibilisation et actions concrètes pour la planète.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-24 bg-[#1e3d1f] text-white text-center">
      <h2 class="text-3xl font-bold mb-6 text-lime-300">Rejoignez l’aventure</h2>
      <p class="max-w-xl mx-auto text-lg mb-10">
        Une heure, un sourire, une idée : tout compte 💪  
        Contactez-nous pour participer à nos prochaines initiatives.
      </p>
      <NuxtLink to="/" class="bg-lime-300 text-[#1e3d1f] px-8 py-3 rounded-full hover:bg-white transition">
        Nous contacter
      </NuxtLink>
    </section>
  </div>
</template>
