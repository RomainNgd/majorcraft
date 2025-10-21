<script setup lang="ts">
import { ref } from 'vue'
import heroImg from '@assets/images/artisan/mock-artisan-hero.jpg'
import work1 from '@assets/images/artisan/mock-artisan-work1.jpg'
import work2 from '@assets/images/artisan/mock-artisan-work2.jpg'
import work3 from '@assets/images/artisan/mock-artisan-work3.jpg'

useSeoMeta({
  title: 'Exemple de site pour artisan – MajorCraft',
  description:
    'Découvrez une vitrine moderne et percutante imaginée pour un artisan menuisier : un design industriel, des couleurs fortes et un ton contemporain.',
  ogImage: heroImg,
})

const isOpen = ref(false)
</script>

<template>
  <div class="bg-[#101418] text-gray-100 min-h-screen">
    <!-- HEADER -->
    <header class="w-full z-50 bg-[#0b0d0e]/90 backdrop-blur-md shadow-md">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 class="text-2xl font-bold text-[#f97316] tracking-tight">Dubois & Fils</h1>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-8 text-gray-200">
          <NuxtLink to="/mock/artisans" class="hover:text-[#f97316] transition">Accueil</NuxtLink>
          <NuxtLink to="/mock/artisans#projets" class="hover:text-[#f97316] transition">Projets</NuxtLink>
          <NuxtLink to="/mock/artisans#contact" class="hover:text-[#f97316] transition">Contact</NuxtLink>
        </nav>

        <!-- Burger -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-white focus:outline-none transition hover:text-[#f97316]"
        >
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="md:hidden bg-[#0b0d0e] border-t border-gray-700 text-center space-y-4 py-6 text-lg"
      >
        <NuxtLink
          to="/mock/artisans"
          class="block text-gray-200 hover:text-[#f97316] transition"
          @click="isOpen = false"
        >
          Accueil
        </NuxtLink>
        <NuxtLink
          to="/mock/artisans#projets"
          class="block text-gray-200 hover:text-[#f97316] transition"
          @click="isOpen = false"
        >
          Projets
        </NuxtLink>
        <NuxtLink
          to="/mock/artisans#contact"
          class="block text-gray-200 hover:text-[#f97316] transition"
          @click="isOpen = false"
        >
          Contact
        </NuxtLink>
      </div>
    </header>

    <!-- HERO -->
    <section class="relative min-h-[90vh] flex items-center px-8 md:px-20 pt-24">
      <img
        :src="heroImg"
        alt="Atelier artisan"
        class="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div class="relative z-10 max-w-3xl">
        <h1 class="text-5xl sm:text-6xl font-extrabold mb-6 text-white leading-tight">
          <span class="text-[#f97316]">Dubois & Fils</span><br />
          Menuiserie contemporaine à Lyon
        </h1>
        <p class="text-lg text-gray-300 mb-8">
          Artisanat moderne, matériaux nobles, finitions haut de gamme.  
          L’alliance parfaite entre tradition et design industriel.
        </p>
        <NuxtLink
          to="/mock/artisans#contact"
          class="inline-block bg-[#f97316] text-black px-8 py-3 rounded-full hover:bg-[#fb923c] transition font-semibold"
        >
          Demander un devis
        </NuxtLink>
      </div>
    </section>

    <!-- PRESENTATION -->
    <section class="py-24 px-8 md:px-20 bg-[#1b1f23]" id="projets">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-[#f97316] mb-6">Un savoir-faire unique</h2>
          <p class="text-gray-300 mb-8 leading-relaxed">
            Chaque meuble sortant de notre atelier est le fruit d’un travail minutieux,
            alliant passion, précision et innovation.  
            Nous créons des pièces durables, élégantes et audacieuses.
          </p>
          <div class="grid grid-cols-2 gap-4 text-center">
            <div class="bg-[#111315] p-6 rounded-xl border border-gray-700">
              <h3 class="font-bold text-gray-400 text-xl mb-2">🪚 Sur mesure</h3>
              <p class="text-sm text-gray-400">Adapté à chaque intérieur</p>
            </div>
            <div class="bg-[#111315] p-6 rounded-xl border border-gray-700">
              <h3 class="font-bold text-gray-400 text-xl mb-2">🌳 Bois local</h3>
              <p class="text-sm text-gray-400">Matériaux durables et certifiés</p>
            </div>
            <div class="bg-[#111315] p-6 rounded-xl border border-gray-700">
              <h3 class="font-bold text-gray-400 text-xl mb-2">⚒️ Fait main</h3>
              <p class="text-sm text-gray-400">Savoir-faire authentique</p>
            </div>
            <div class="bg-[#111315] p-6 rounded-xl border border-gray-700">
              <h3 class="font-bold text-gray-400 text-xl mb-2">🧭 Design</h3>
              <p class="text-sm text-gray-400">Style épuré et contemporain</p>
            </div>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-xl">
          <img :src="work1" alt="Travail artisan" class="w-full h-[450px] object-cover" />
        </div>
      </div>
    </section>

    <!-- REALISATIONS -->
    <section class="py-24 px-8 md:px-20 bg-[#f97316] text-black">
      <h2 class="text-4xl font-extrabold text-center mb-12">Nos dernières réalisations</h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          class="bg-white rounded-xl overflow-hidden hover:-translate-y-1 transition transform shadow-lg"
        >
          <img :src="work1" alt="Cuisine moderne" class="w-full h-60 object-cover" />
          <div class="p-5">
            <h3 class="text-xl font-bold mb-1">Cuisine bois & acier</h3>
            <p class="text-sm text-gray-700">Élégance industrielle et chaleur du bois.</p>
          </div>
        </div>
        <div
          class="bg-white rounded-xl overflow-hidden hover:-translate-y-1 transition transform shadow-lg"
        >
          <img :src="work2" alt="Table design" class="w-full h-60 object-cover" />
          <div class="p-5">
            <h3 class="text-xl font-bold mb-1">Table de salon design</h3>
            <p class="text-sm text-gray-700">Pièce centrale minimaliste et solide.</p>
          </div>
        </div>
        <div
          class="bg-white rounded-xl overflow-hidden hover:-translate-y-1 transition transform shadow-lg"
        >
          <img :src="work3" alt="Escalier bois noir" class="w-full h-60 object-cover" />
          <div class="p-5">
            <h3 class="text-xl font-bold mb-1">Escalier contemporain</h3>
            <p class="text-sm text-gray-700">Bois sombre et garde-corps métal noir.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section
      id="contact"
      class="py-24 px-6 text-center bg-gradient-to-br from-[#f97316] to-[#fbbf24] text-black"
    >
      <h2 class="text-4xl font-bold mb-6">Contactez Dubois & Fils</h2>
      <p class="text-lg mb-10 text-gray-800">
        Un projet, une idée, une rénovation ? Parlons-en ensemble dès maintenant.
      </p>
      <form class="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nom complet"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Adresse email"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          rows="4"
          placeholder="Votre message..."
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>
        <button
          type="submit"
          class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  </div>
</template>
