<script lang="ts" setup>
import logo from '@assets/images/logo.png'
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
        <nav class="space-x-4">
          <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
          <NuxtLink to="/offer" class="hover:underline">Offres</NuxtLink>
          <NuxtLink to="/about" class="hover:underline">A propos</NuxtLink>
          <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="bg-[#f7f6f6]">
      <slot />
    </main>

    <footer class="p-4 bg-[#f7f0e1] text-center text-sm">
      <nav class="space-x-4">
        <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
        <NuxtLink to="/offer" class="hover:underline">Offres</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">A propos</NuxtLink>
        <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
        <NuxtLink to="/legals" class="hover:underline">Mention légales</NuxtLink>
    </nav>
      © {{ new Date().getFullYear() }} MajorCraft. Tous droits réservés.
    </footer>
  </div>
</template>
