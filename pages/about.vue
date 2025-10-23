<script setup>
useSeoMeta({
  title: 'À propos - MajorCraft',
  description: "Découvrez MajorCraft : ma philosophie, ma méthode et mes engagements pour créer des sites vitrines accessibles, modernes et humains.",
  ogTitle: 'À propos – MajorCraft',
  ogDescription: "Une vitrine digitale esthétique et fiable, conçue avec soin. Découvrez mon approche centrée sur la simplicité et la clarté.",
  ogImage: '/logo-full.png',
})
</script>

<template>
  <section class="min-h-screen px-6 py-20 bg-gradient-to-br from-white to-gray-50 text-black">
    <div class="max-w-5xl mx-auto space-y-24">
      <!-- INTRO -->
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-5xl font-extrabold mb-4 relative inline-block">
          À propos
          <span class="absolute left-0 bottom-0 w-full h-1 bg-amber-600 rounded-full scale-x-50 origin-left"></span>
        </h1>
        <p class="text-lg text-gray-700 leading-relaxed mt-4">
          Derrière chaque site vitrine que je conçois, il y a une ambition simple :  
          <span class="font-semibold">offrir aux professionnels une présence en ligne sobre, claire et impactante</span> — sans complexité inutile.
        </p>
      </div>

      <!-- QUI JE SUIS -->
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-2xl font-bold mb-4 underline decoration-2 decoration-green-500 underline-offset-4">Qui suis-je ?</h2>
          <p class="text-gray-700 mb-4">
            Je m'appelle <strong>Romain</strong>, développeur web indépendant et créateur de <strong>MajorCraft</strong>.  
            J’accompagne les artisans, indépendants et petites structures dans leur présence digitale.
          </p>
          <p class="text-gray-700">
            Je privilégie une approche <strong>humaine et directe</strong>, sans intermédiaire, pour des échanges simples et efficaces.
          </p>
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <ul class="space-y-3 text-gray-700 text-sm">
            <li class="flex items-center gap-2"><span class="text-green-500">👨‍💻</span> 5+ ans d’expérience</li>
            <li class="flex items-center gap-2"><span class="text-green-500">💡</span> Spécialisé dans le développement web</li>
            <li class="flex items-center gap-2"><span class="text-green-500">🌍</span> Basé à Lille</li>
            <li class="flex items-center gap-2"><span class="text-green-500">🤝</span> Collaboration directe et transparente</li>
          </ul>
        </div>
      </div>

      <!-- POURQUOI CETTE OFFRE -->
      <div class="bg-white rounded-2xl p-10 shadow-md border border-gray-100">
        <h2 class="text-2xl font-bold mb-6 underline decoration-2 decoration-blue-600 underline-offset-4">Pourquoi cette offre ?</h2>
        <p class="text-gray-700 mb-4">
          Beaucoup d’indépendants et de petites entreprises n’ont pas encore de site — ou ont une solution peu claire, difficile à gérer ou trop coûteuse.
        </p>
        <p class="text-gray-700">
          Mon objectif : <strong>rendre la visibilité web accessible à tous</strong>, grâce à des sites vitrines professionnels à partir de <span class="text-blue-600 font-semibold">200€</span>,
          sans abonnement ni complexité technique.
        </p>
      </div>

      <!-- MA MÉTHODE -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <h2 class="text-2xl font-bold mb-4 underline decoration-2 decoration-amber-500 underline-offset-4">Ma méthode de travail</h2>
          <p class="text-gray-700 mb-4">
            Chaque projet débute par un échange pour comprendre vos besoins, vos objectifs et votre univers.  
            Je conçois ensuite une solution <strong>simple, sur mesure et cohérente</strong> avec votre identité.
          </p>
          <p class="text-gray-700">
            Vous pouvez opter pour un <strong>pack prêt à l’emploi</strong> ou un <strong>site entièrement personnalisé</strong> selon vos ambitions.
          </p>
        </div>
        <div class="order-1 md:order-2 bg-gradient-to-br from-amber-100 to-white border border-amber-200 rounded-2xl p-6 shadow-inner">
          <ul class="space-y-3 text-gray-700 text-sm">
            <li class="flex items-center gap-2"><span class="text-amber-500">📝</span> Brief et découverte du projet</li>
            <li class="flex items-center gap-2"><span class="text-amber-500">🎨</span> Proposition design adaptée</li>
            <li class="flex items-center gap-2"><span class="text-amber-500">💻</span> Développement rapide et clean</li>
            <li class="flex items-center gap-2"><span class="text-amber-500">🚀</span> Mise en ligne & accompagnement</li>
          </ul>
        </div>
      </div>

      <!-- GARANTIES -->
      <div class="text-center bg-gray-900 text-white py-16 rounded-3xl px-8 shadow-lg">
        <h2 class="text-3xl font-bold mb-8 underline decoration-2 decoration-green-400 underline-offset-4">Ce que je vous garantis</h2>
        <div class="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-xl mt-1">✔</span>
            <p>Un site rapide, responsive et accessible</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-xl mt-1">✔</span>
            <p>Une image professionnelle et crédible</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-xl mt-1">✔</span>
            <p>Des échanges humains et réactifs</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-xl mt-1">✔</span>
            <p>Des délais respectés, sans frais cachés</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center pt-10">
        <h3 class="text-xl mb-4 text-gray-800">Prêt à donner vie à votre projet ?</h3>
        <NuxtLink
          to="/contact"
          class="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition font-semibold"
        >
          Me contacter
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
