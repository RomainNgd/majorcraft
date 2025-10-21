<script lang="ts" setup>
import website from '@assets/images/website.png'
import wayboxsite from '@assets/images/waybox.png'
import asso from '@assets/images/mock/asso.JPG'
import resto from '@assets/images/mock/violet.JPG'
import artisan from '@assets/images/mock/dubois.JPG'

useSeoMeta({
  title: 'Création de sites vitrines pour artisans — MAjorCraft',
  description: 'MajorCraft by Romain Nigond – Création de sites web modernes et accessibles pour artisans, associations et petites entreprises locales.',
  ogTitle: 'Création de sites vitrines modernes – MajorCraft',
  ogDescription: 'Offrez à votre activité une vitrine professionnelle, rapide à mettre en ligne et sans galère technique.',
  ogImage: '/logo-full.png',
})
</script>

<template>
  <div class="text-black">
    <!-- Hero -->
    <section class="min-h-screen flex items-center px-4 bg-gradient-to-b from-white to-[#f7f0e1]">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div class="text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Des <span class="text-amber-600">sites web modernes</span><br>
            pensés pour les <span class="underline decoration-amber-600">artisans</span> et petites structures.
          </h1>
          <p class="text-lg text-gray-700 mb-8">
            Votre activité mérite une vitrine claire, esthétique et visible.<br>
            Je m’occupe de tout, sans jargon technique.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <NuxtLink to="/contact" class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Demander un devis gratuit
            </NuxtLink>
            <NuxtLink to="/offres" class="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              Voir les offres
            </NuxtLink>
          </div>
        </div>
        <div class="hidden sm:block">
          <img :src="website" alt="Exemple de site web" class="rounded-xl">
        </div>
      </div>
    </section>


    <!-- Cibles + mini previews -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto grid sm:grid-cols-3 gap-16 text-center">
        <!-- Artisans -->
        <div>
          <h3 class="text-xl font-semibold mb-2">🛠️ Artisans</h3>
          <p class="text-gray-600 mb-6">Montrez vos réalisations et gagnez de nouveaux clients.</p>
          <NuxtLink to="/mock/artisans" class="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img :src="artisan" alt="Exemple site artisan" class="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
            <div class="p-4">
              <p class="text-sm text-gray-500">Voir la démo →</p>
            </div>
          </NuxtLink>
        </div>

        <!-- Restaurants -->
        <div>
          <h3 class="text-xl font-semibold mb-2">🍽️ Restaurants</h3>
          <p class="text-gray-600 mb-6">Présentez votre menu et facilitez les réservations.</p>
          <NuxtLink to="/mock/restaurant" class="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img :src="resto" alt="Exemple site restaurant" class="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
            <div class="p-4">
              <p class="text-sm text-gray-500">Voir la démo →</p>
            </div>
          </NuxtLink>
        </div>

        <!-- Associations -->
        <div>
          <h3 class="text-xl font-semibold mb-2">🤝 Associations</h3>
          <p class="text-gray-600 mb-6">Informez vos membres simplement et efficacement.</p>
          <NuxtLink to="/mock/association" class="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img :src="asso" alt="Exemple site association" class="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
            <div class="p-4">
              <p class="text-sm text-gray-500">Voir la démo →</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Avantages -->
    <section class="py-20 px-4 bg-[#f7f0e1]">
      <h2 class="text-3xl font-bold mb-10 text-center">⚡Ma promesse</h2>
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 class="text-xl font-semibold mb-2 underline decoration-amber-600">Mise en ligne rapide</h3>
          <p class="text-gray-600">Votre site est prêt en quelques jours, sans stress.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 class="text-xl font-semibold mb-2 underline decoration-amber-600 ">Design soigné</h3>
          <p class="text-gray-600">Sobre, clair et professionnel. Idéal pour inspirer confiance.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 class="text-xl font-semibold mb-2 underline decoration-amber-600">Petit prix</h3>
          <p class="text-gray-600">Pas d’abonnement, pas de surprise. Votre site vous appartient.</p>
        </div>
      </div>
    </section>

    <!-- Mes créations -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">✨ Mes réalisations</h2>
        <div class="flex flex-wrap justify-center gap-6 sm:flex-nowrap sm:justify-start sm:w-max px-2">
          <div class="min-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 transition">
            <img :src="wayboxsite" alt="Waybox site" class="w-full h-40 object-cover">
            <div class="p-4">
              <h3 class="font-semibold text-lg mb-2">WAYBOX</h3>
              <p class="text-sm text-gray-500 mb-3">Sauvegarde de données</p>
              <a href="https://waybox.fr" target="_blank" class="text-amber-700 underline text-sm">Voir le site</a>
            </div>
          </div>
          <div class="min-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 transition">
            <img :src="website" alt="Site Romain Nigond" class="w-full h-40 object-cover">
            <div class="p-4">
              <h3 class="font-semibold text-lg mb-2">Romain Nigond</h3>
              <p class="text-sm text-gray-500 mb-3">Site personnel</p>
              <a href="https://romainnigond.fr" target="_blank" class="text-amber-700 underline text-sm">Voir le site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process -->
    <section class="py-20 px-4 bg-[#f7f0e1]">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-10">🔧 Comment ça se passe ?</h2>
        <div class="grid md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 class="font-semibold mb-1 text-amber-700">1. On discute</h3>
            <p class="text-sm text-gray-600">Par mail ou téléphone, on définit ensemble vos besoins.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-1 text-amber-700">2. Devis clair</h3>
            <p class="text-sm text-gray-600">Vous recevez un devis transparent, sans frais cachés.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-1 text-amber-700">3. Réalisation rapide</h3>
            <p class="text-sm text-gray-600">Je conçois et développe votre site en 3 à 5 jours.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-1 text-amber-700">4. Mise en ligne</h3>
            <p class="text-sm text-gray-600">Votre vitrine digitale est prête à être partagée au monde entier.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action final -->
    <section class="py-20 px-4 text-center bg-gradient-to-b from-[#f7f0e1] to-white">
      <h2 class="text-3xl font-bold mb-6">🚀 Prêt à lancer votre site ?</h2>
      <NuxtLink to="/contact" class="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
        Contactez-moi dès maintenant
      </NuxtLink>
    </section>
  </div>
</template>
