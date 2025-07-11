<script lang="ts" setup>
import { ref } from 'vue'
import logo from '@assets/images/logo.png'

const isOpen = ref(false)
</script>

<template>
  <div>
    <header class="p-4 bg-[#f7f0e1] shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img :src="logo" alt="Logo" class="w-16 mx-auto md:mx-0" />
          <h1 class="text-xl font-bold ml-5">
            MAJORCRAFT
          </h1>
        </div>

        <!-- Burger -->
        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Menu desktop -->
        <nav class="hidden md:flex space-x-4">
          <NuxtLink to="/" class="hover:underline" active-class="underline">Accueil</NuxtLink>
          <NuxtLink to="/offer" class="hover:underline" active-class="underline">Offres</NuxtLink>
          <NuxtLink to="/about" class="hover:underline" active-class="underline">A propos</NuxtLink>
          <NuxtLink to="/contact" class="hover:underline" active-class="underline">Contact</NuxtLink>
        </nav>
      </div>

      <!-- Menu mobile -->
      <div v-if="isOpen" class="md:hidden mt-4 space-y-2 px-4">
        <NuxtLink to="/" class="block hover:underline" @click="isOpen = false">Accueil</NuxtLink>
        <NuxtLink to="/offer" class="block hover:underline" @click="isOpen = false">Offres</NuxtLink>
        <NuxtLink to="/about" class="block hover:underline" @click="isOpen = false">A propos</NuxtLink>
        <NuxtLink to="/contact" class="block hover:underline" @click="isOpen = false">Contact</NuxtLink>
      </div>
    </header>

    <main class="bg-[#f7f6f6]">
      <slot />
    </main>

    <footer class="p-4 bg-[#f7f0e1] text-center text-sm">
      <nav class="space-x-4">
        <NuxtLink to="/" class="hover:underline" active-class="underline">Accueil</NuxtLink>
        <NuxtLink to="/offer" class="hover:underline" active-class="underline">Offres</NuxtLink>
        <NuxtLink to="/about" class="hover:underline" active-class="underline">A propos</NuxtLink>
        <NuxtLink to="/contact" class="hover:underline" active-class="underline">Contact</NuxtLink>
        <NuxtLink to="/legals" class="hover:underline" active-class="underline">Mention légales</NuxtLink>
      </nav>
      © {{ new Date().getFullYear() }} MajorCraft. Tous droits réservés.
    </footer>
  </div>
</template>
