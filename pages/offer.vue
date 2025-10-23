<script setup>
useSeoMeta({
  title: 'Offres - MajorCraft',
  description: 'Découvrez les offres MajorCraft : des sites modernes, efficaces et sans surprise pour artisans, associations et indépendants.',
  ogTitle: 'Offres – MajorCraft',
  ogDescription: "Une vitrine digitale esthétique est essentielle aujourd'hui. MajorCraft vous le propose, découvrez nos packs adaptés à vos besoins.",
  ogImage: '/logo-full.png',
})
</script>

<template>
  <section class="min-h-screen px-4 py-20 bg-gradient-to-br from-white to-gray-100 text-black">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h1 class="text-4xl font-extrabold mb-4 relative inline-block ">
        Mes Offres
        <span class="absolute left-0 bottom-0 w-full h-1 bg-amber-600 rounded-full scale-x-50 origin-left"></span>
      </h1>
      <p class="text-lg text-gray-700">Des sites simples, efficaces et évolutifs — avec des tarifs clairs et sans mauvaise surprise.</p>
    </div>

    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-10">
      <!-- Pack Essentiel -->
      <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition relative">
        <div class="absolute -top-3 left-6 bg-black text-white text-xs px-3 py-1 rounded-full">Starter</div>
        <h2 class="text-2xl font-bold mb-2 underline decoration-2 decoration-black underline-offset-4">Pack Essentiel</h2>
        <p class="text-gray-700 mb-6">À partir de <span class="font-semibold text-black text-lg">200€</span></p>

        <ul class="space-y-3 text-sm mb-6">
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> 1 page (type “one page”)</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Design minimaliste personnalisé</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Responsive (mobile & tablette)</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> 1 aller-retour de modifications</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Livraison en 3 jours</li>
          <li class="flex items-center gap-2 text-gray-500"><span class="text-red-500">✖</span> SEO de base</li>
          <li class="flex items-center gap-2 text-gray-500"><span class="text-red-500">✖</span> Fonctionnalités dynamiques</li>
        </ul>

        <p class="text-xs text-gray-500">Modifications supplémentaires : +40€/h</p>
      </div>

      <!-- Pack Pro -->
      <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition relative scale-105">
        <div class="absolute -top-3 left-6 bg-green-600 text-white text-xs px-3 py-1 rounded-full">Populaire</div>
        <h2 class="text-2xl font-bold mb-2 underline decoration-2 decoration-green-600 underline-offset-4">Pack Pro</h2>
        <p class="text-gray-700 mb-6">À partir de <span class="font-semibold text-green-600 text-lg">390€</span></p>

        <ul class="space-y-3 text-sm mb-6">
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Jusqu’à 5 pages</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Formulaire de contact avancé</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Référencement (SEO) de base</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> 2 allers-retours de modifications</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Livraison en 5 jours</li>
          <li class="flex items-center gap-2 text-gray-500"><span class="text-red-500">✖</span> Animations ou design premium</li>
          <li class="flex items-center gap-2 text-gray-500"><span class="text-red-500">✖</span> Maintenance incluse</li>
        </ul>

        <p class="text-xs text-gray-500">Modifications supplémentaires : +40€/h</p>
      </div>

      <!-- Pack Sur-mesure -->
      <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition relative">
        <div class="absolute -top-3 left-6 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Premium</div>
        <h2 class="text-2xl font-bold mb-2 underline decoration-2 decoration-purple-600 underline-offset-4">Pack Sur-mesure</h2>
        <p class="text-gray-700 mb-6"><span class="font-semibold text-purple-600 text-lg">Sur devis</span></p>

        <ul class="space-y-3 text-sm mb-6">
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Site multi-pages évolutif</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Design premium & animations</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Développement spécifique</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Accompagnement personnalisé</li>
          <li class="flex items-center gap-2 text-gray-800"><span class="text-green-500">✔</span> Maintenance en option</li>
          <li class="flex items-center gap-2 text-gray-500"><span class="text-red-500">✖</span> Prix fixe (sur devis)</li>
        </ul>

        <NuxtLink
          to="/contact"
          class="bg-purple-600 text-white px-6 py-3 rounded-full mx-auto block w-fit font-semibold hover:bg-purple-500 transition"
        >
          Demander un devis
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
