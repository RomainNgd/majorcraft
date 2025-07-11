<script setup>
useSeoMeta({
  title: 'A propos - MajorCraft',
  description: 'MajorCraft by Romain Nigond - Apprenais en plus sur moi et mes méthodes de travail',
  ogTitle: 'A propos  – MajorCraft',
  ogDescription: "Une vitrine digitale esthétique est essentielle aujourd'hui. Major Craft vous le propose, venez en apprendre plus sur mmoi et mes méthodes de travail",
  ogImage: '/logo-full.png',
})
</script>
<template>
  <section class="min-h-screen px-4 py-20 bg-white text-black">
    <div class="max-w-3xl mx-auto space-y-12">
      <!-- Intro -->
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">À propos</h1>
        <p class="text-lg text-gray-700">
          Derrière chaque site vitrine que je conçois, il y a une ambition simple : permettre à chaque professionnel, entrepreneur ou indépendant d’avoir une présence en ligne à la fois sobre, efficace et accessible.
        </p>
      </div>

      <!-- Qui je suis -->
      <div class="space-y-4 mt-16">
        <h2 class="text-xl font-semibold">Qui suis-je ?</h2>
        <p>
          Je m'appelle <strong>Romain</strong>, développeur web indépendant spécialisé dans la création de sites vitrines pour les petites structures. Je travaille seul, en direct avec mes clients, pour leur garantir un accompagnement personnalisé, sans intermédiaires.
        </p>
        <p>
          Mon approche repose sur la sobriété, la clarté et l’efficacité. Chaque projet est pensé pour refléter votre activité de manière professionnelle, sans superflu.
        </p>
      </div>

      <!-- Pourquoi cette offre -->
      <div class="space-y-4 mt-16">
        <h2 class="text-xl font-semibold">Pourquoi cette offre ?</h2>
        <p>
          J’ai constaté que de nombreux indépendants, artisans ou petites entreprises n’ont pas encore de site — ou se retrouvent avec une solution peu lisible, difficile à gérer ou hors budget.
        </p>
        <p>
          Mon objectif est de proposer une alternative claire : <strong>des sites vitrines professionnels à partir de 200€</strong>, livrés rapidement, sans abonnement, avec un design épuré et fiable.
        </p>
      </div>

      <!-- Ma méthode de travail -->
      <div class="space-y-4 mt-16">
        <h2 class="text-xl font-semibold">Ma méthode de travail</h2>
        <p>
          Je commence par échanger avec vous pour comprendre vos besoins, vos objectifs et votre univers. À partir de là, je vous propose une solution simple, sur-mesure, adaptée à votre activité.
        </p>
        <p>
          Les offres packagées permettent d'aller vite, mais je propose également des prestations personnalisées sur devis, incluant des fonctionnalités spécifiques, du contenu optimisé ou des besoins plus complexes.
        </p>
      </div>

      <!-- Ce que je vous garantis -->
      <div class="space-y-4 mt-16">
        <h2 class="text-xl font-semibold">Ce que je vous garantis</h2>
        <ul class="list-disc list-inside text-gray-700">
          <li>Un site responsive, rapide, pensé pour être compris et utilisé facilement</li>
          <li>Une image professionnelle qui inspire confiance</li>
          <li>Un contact humain, disponible et réactif</li>
          <li>Des délais respectés, et aucune mauvaise surprise sur le tarif</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="text-center pt-10 mt-16">
        <NuxtLink to="/contact" class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Me contacter
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
