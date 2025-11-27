<script setup>
import BaseTitle from './components/base/BaseTitle.vue';
import BaseCardText from './components/base/BaseCardText.vue';
import BaseText from './components/base/BaseText.vue';
</script>

<template>
  <div class="app">
    <header class="app-header">
      <h1 class="app-title">UI Study Notes</h1>
      <p class="app-subtitle">Documentando mi avance del libro de UI</p>
    </header>
    <div class="app-layout">
      <aside class="app-sidebar">
        <nav>
          <h2 class="sidebar-title">Capítulos</h2>
          <ul class="sidebar-list">
            <li><button class="sidebar-link">Introducción</button></li>
            <li><button class="sidebar-link">Principios básicos</button></li>
            <li><button class="sidebar-link">Tipografía</button></li>
            <li><button class="sidebar-link">Color</button></li>
          </ul>
        </nav>
      </aside>

      <main class="app-content">
        <article>
          <BaseTitle :level="1" uppercase>
            Titulo de ejemplo
          </BaseTitle>

          <BaseText>
            Lorem ipsum <strong>dolor</strong> sit amet consectetur adipisicing elit. Delectus at nihil est velit
            eveniet amet!
          </BaseText>

          <BaseCardText title="Este es un ejemplo" :items="['Uno', 'Dos', 'tres']">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat molestiae amet adipisci. Natus, quis
            consectetur aspernatur tenetur nihil ab.
          </BaseCardText>
        </article>
      </main>
    </div>
  </div>
</template>
