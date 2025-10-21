<script setup lang="ts">
import { ref } from 'vue'
import heroImg from '@assets/images/restaurant/mock-resto-hero.jpg'
import dish1 from '@assets/images/restaurant/mock-dish1.jpg'
import dish2 from '@assets/images/restaurant/mock-dish2.jpg'
import dish3 from '@assets/images/restaurant/mock-dish3.jpg'

useSeoMeta({
  title: 'Exemple de site pour restaurant – MajorCraft',
  description: 'Découvrez un site au style raffiné et immersif pour restaurant gastronomique.',
  ogImage: heroImg,
})

const isOpen = ref(false)
</script>

<template>
  <div class="bg-[#1b0f2f] text-gray-100 min-h-screen">
    <!-- HEADER -->
    <header class="w-full bg-[#2e1a4d]/80 backdrop-blur-lg z-50 shadow-lg">
      <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 class="text-2xl font-bold text-purple-300">Le Jardin Violet</h1>
        <nav class="hidden md:flex space-x-6 text-gray-200">
          <NuxtLink to="/mock/restaurant" class="hover:text-purple-300">Accueil</NuxtLink>
          <NuxtLink to="/mock/restaurant#menu" class="hover:text-purple-300">Menu</NuxtLink>
          <NuxtLink to="/mock/restaurant#contact" class="hover:text-purple-300">Réservation</NuxtLink>
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
      <div v-if="isOpen" class="md:hidden bg-[#2e1a4d] text-center py-4 space-y-4">
        <NuxtLink to="/mock/restaurant" class="block hover:text-purple-300">Accueil</NuxtLink>
        <NuxtLink to="/mock/restaurant#menu" class="block hover:text-purple-300">Menu</NuxtLink>
        <NuxtLink to="/mock/restaurant#contact" class="block hover:text-purple-300">Réservation</NuxtLink>
      </div>
    </header>

    <!-- HERO -->
    <section class="relative min-h-[100vh] flex items-center justify-center text-center px-8 pt-24">
      <img :src="heroImg" class="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div class="relative z-10">
        <h1 class="text-6xl font-extrabold mb-4 text-purple-200 drop-shadow-lg">Le Jardin Violet</h1>
        <p class="text-xl text-gray-200 mb-8">Cuisine raffinée, produits de saison et ambiance feutrée.</p>
        <NuxtLink to="/mock/restaurant#menu" class="bg-purple-500 px-8 py-3 rounded-full text-white font-semibold hover:bg-purple-400 transition">
          Découvrir le menu
        </NuxtLink>
      </div>
    </section>

    <!-- MENU -->
    <section id="menu" class="py-24 px-8 bg-[#2e1a4d]/60 backdrop-blur-sm">
      <h2 class="text-4xl font-bold text-center text-purple-300 mb-12">Menu du Chef</h2>
      <div class="max-w-5xl mx-auto space-y-12">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <img :src="dish1" class="rounded-3xl shadow-xl w-full md:w-1/2 h-64 object-cover" />
          <div class="text-left md:w-1/2">
            <h3 class="text-2xl font-semibold text-purple-200 mb-2">Entrées</h3>
            <p class="text-gray-300 mb-3">Velouté de potiron aux éclats de noisettes — 9€</p>
            <p class="text-gray-300">Tartare de saumon frais, citron vert et gingembre — 12€</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row-reverse items-center gap-8">
          <img :src="dish2" class="rounded-3xl shadow-xl w-full md:w-1/2 h-64 object-cover" />
          <div class="text-left md:w-1/2">
            <h3 class="text-2xl font-semibold text-purple-200 mb-2">Plats</h3>
            <p class="text-gray-300 mb-3">Magret de canard au miel et romarin — 22€</p>
            <p class="text-gray-300">Risotto crémeux aux champignons sauvages — 19€</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <img :src="dish3" class="rounded-3xl shadow-xl w-full md:w-1/2 h-64 object-cover" />
          <div class="text-left md:w-1/2">
            <h3 class="text-2xl font-semibold text-purple-200 mb-2">Desserts</h3>
            <p class="text-gray-300 mb-3">Mousse au chocolat noir intense — 8€</p>
            <p class="text-gray-300">Tarte aux fruits rouges et crème pistache — 9€</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-24 bg-gradient-to-t from-[#3b0a57] to-[#1b0f2f] text-center">
      <h2 class="text-4xl font-bold text-purple-300 mb-4">Réservez votre table</h2>
      <p class="text-gray-300 mb-8">Un dîner, un moment, une expérience. Réservez dès maintenant.</p>
      <NuxtLink to="/" class="bg-purple-500 px-8 py-3 rounded-full hover:bg-purple-400 transition text-white font-semibold">
        Réserver
      </NuxtLink>
    </section>
  </div>
</template>
