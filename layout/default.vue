<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>

<!-- 
  Složka layouts/ slouží k vytvoření základního rozvržení (obalu) pro všechny 
  stránky ve složce pages/. Pomáhá ti znovu používat strukturu jako hlavička, 
  navigace, patička apod. 
-->

<!-- 
  <slot /> je zástupné místo, kam se vloží obsah z jiného souboru nebo komponenty.

  Ve Vue (a tedy i v Nuxtu) se slot používá např. v layoutu, aby se na jeho 
  místo vykreslila konkrétní stránka. 
-->