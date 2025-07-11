<script setup>
useSeoMeta({
  title: 'Offres - MajorCraft',
  description: 'MajorCraft by Romain Nigond - Venez découvrir les différentes offre que je porpose chez MajorCraft',
  ogTitle: 'Offres  – MajorCraft',
  ogDescription: "Une vitrine digitale esthétique est essentielle aujourd'hui. Major Craft vous le propose, venez en découvrir mes offres pour indépendant.",
  ogImage: '/logo-full.png',
})
</script>
<template>
  <section class="min-h-screen px-4 py-20 bg-white text-black">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h1 class="text-3xl font-bold mb-4">Nos offres</h1>
      <p class="text-lg text-gray-700">Des sites simples, efficaces et évolutifs, avec des tarifs clairs et sans mauvaise surprise.</p>
    </div>

    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-4">
      <!-- Essentiel -->
      <div class="border p-6 rounded-lg shadow-sm bg-[#f9f9f9] flex flex-col justify-between">
        <div>
          <h2 class="text-xl font-semibold mb-2">Pack Essentiel</h2>
          <p class="text-gray-700 mb-4">À partir de <strong>200€</strong></p>
          <ul class="text-sm text-gray-600 space-y-2 mb-4">
            <li>• 1 page (type "one page")</li>
            <li>• Design personnalisé minimaliste</li>
            <li>• Responsive (mobile & tablette)</li>
            <li>• 1 aller-retour de modifs inclus</li>
            <li>• Livraison en 3 jours</li>
          </ul>
        </div>
        <p class="text-xs text-gray-500 mt-4">Modifications supplémentaires : +40€/h</p>
      </div>

      <!-- Pro -->
      <div class="border p-6 rounded-lg shadow-sm bg-[#f9f9f9] flex flex-col justify-between">
        <div>
          <h2 class="text-xl font-semibold mb-2">Pack Pro</h2>
          <p class="text-gray-700 mb-4">À partir de <strong>390€</strong></p>
          <ul class="text-sm text-gray-600 space-y-2 mb-4">
            <li>• Jusqu’à 5 pages</li>
            <li>• Formulaire de contact avancé</li>
            <li>• Référencement de base</li>
            <li>• 2 allers-retours de modifs inclus</li>
            <li>• Livraison en 5 jours</li>
          </ul>
        </div>
        <p class="text-xs text-gray-500 mt-4">Modifications supplémentaires : +40€/h</p>
      </div>

    <!-- Sur-mesure -->
    <div class="border p-6 rounded-lg shadow-sm bg-[#f9f9f9] flex flex-col justify-between">
    <div>
        <h2 class="text-xl font-semibold mb-2">Pack Sur-mesure</h2>
        <p class="text-gray-700 mb-4">Sur devis</p>
        <ul class="text-sm text-gray-600 space-y-2 mb-4">
        <li>• Site multi-pages ou avec fonctionnalités</li>
        <li>• Design premium et animations</li>
        <li>• Développement sur mesure</li>
        <li>• Maintenance possible en option</li>
        <li>• Accompagnement personnalisé</li>
        </ul>
    </div>
    <NuxtLink
        to="/contact"
        class="bg-black text-white px-6 py-3 rounded-full mt-4 mx-auto hover:bg-gray-800 transition"
    >
        Demander un devis
    </NuxtLink>
    </div>
    </div>
  </section>
</template>
