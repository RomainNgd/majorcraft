<script lang="ts" setup>
import romainsite from '@assets/images/romain.png'
import wayboxsite from '@assets/images/waybox.png'
useSeoMeta({
  title: 'Création de sites vitrines pro — MAjorCraft',
  description: 'MajorCraft by ROmain Nigond - Création de site vitrine à bas prix pour les indépendants',
  ogTitle: 'Accueil  – MajorCraft',
  ogDescription: "Une vitrine digitale esthétique est essentielle aujourd'hui. Confiez-la à un professionnel du web.",
  ogImage: '/logo-full.png',
})
</script>
*<template>
  <div class="text-black">
    <!-- Hero -->
    <section class="min-h-screen flex items-center px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div class="text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">Un site pro, simple, rapide et durable.</h1>
          <p class="text-lg text-gray-700 mb-8">Ton site en ligne en quelques jours, avec un design épuré, pensé pour inspirer confiance.</p>
          <NuxtLink to="/contact" class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Je veux mon site
          </NuxtLink>
        </div>
        <div>
          <img :src="romainsite" alt="Exemple site" class="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>

    <!-- Avantages -->
    <section class="py-20 px-4 bg-[#f7f0e1]">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 class="text-xl font-semibold mb-2">Mise en ligne rapide</h3>
          <p class="text-gray-600">Ton site est prêt en quelques jours, sans prise de tête.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Design minimaliste</h3>
          <p class="text-gray-600">Sobre, clair, élégant. Tout pour inspirer confiance.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">À partir de 200€</h3>
          <p class="text-gray-600">Pas d’abonnement, pas de surprise. C’est ton site, point.</p>
        </div>
      </div>
    </section>

    <!-- Mes créations - Carrousel centré si peu d'éléments -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-10">Mes créations</h2>
        <div class="overflow-x-auto">
          <div
            class="flex flex-wrap justify-center gap-6 sm:flex-nowrap sm:justify-start sm:w-max px-2"
          >
            <!-- Carte 1 -->
            <div class="min-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden">
              <img :src="wayboxsite" alt="Waybox site" class="w-full h-40 object-cover">
              <div class="p-4">
                <h3 class="font-semibold text-lg mb-2">WAYBOX</h3>
                <p class="text-sm text-gray-500 mb-3">Sauvegarde de données</p>
                <a href="https://waybox.fr" target="_blank" class="text-blue-600 underline text-sm">Voir le site</a>
              </div>
            </div>
            <!-- Carte 2 -->
            <div class="min-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden">
              <img :src="romainsite" alt="Site Romain Nigond" class="w-full h-40 object-cover">
              <div class="p-4">
                <h3 class="font-semibold text-lg mb-2">Romain Nigond</h3>
                <p class="text-sm text-gray-500 mb-3">Site personnel</p>
                <a href="https://romainnigond.fr" target="_blank" class="text-blue-600 underline text-sm">Voir le site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Process -->
    <section class="py-20 px-4 bg-[#f7f0e1]">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-10">Comment ça se passe ?</h2>
        <div class="grid md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 class="font-semibold mb-1">1. On discute</h3>
            <p class="text-sm text-gray-600">On échange par mail ou téléphone pour cerner tes besoins.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-1">2. Devis</h3>
            <p class="text-sm text-gray-600">Tu reçois un devis simple et clair. Pas de frais cachés.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-1">3. Réalisation</h3>
            <p class="text-sm text-gray-600">On design et on développe ton site en 3 à 5 jours.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-1">4. Mise en ligne</h3>
            <p class="text-sm text-gray-600">Ton site est prêt à être partagé au monde entier.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Forfaits maintenance -->
    <section class="py-20 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-8">Forfaits de maintenance</h2>
        <p class="text-gray-700 mb-10">Tu veux rester tranquille ? On s’occupe des mises à jour, de l’hébergement et du support.</p>
        <div class="grid sm:grid-cols-3 gap-6">
          <div class="border p-6 rounded-lg shadow-sm bg-white">
            <h3 class="font-semibold mb-2">1 an</h3>
            <p class="text-gray-600">A partir de 99€</p>
          </div>
          <div class="border p-6 rounded-lg shadow-sm bg-white">
            <h3 class="font-semibold mb-2">5 ans</h3>
            <p class="text-gray-600">A partir de 349€</p>
          </div>
          <div class="border p-6 rounded-lg shadow-sm bg-white">
            <h3 class="font-semibold mb-2">10 ans</h3>
            <p class="text-gray-600">A partir de 599€</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 px-4 text-center bg-[#f7f0e1]">
      <h2 class="text-3xl font-bold mb-6">Ton site t’attend.</h2>
      <NuxtLink to="/contact" class="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
        Contacte-moi maintenant
      </NuxtLink>
    </section>
  </div>
</template>
