<script setup>
import { RouterLink } from 'vue-router';
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
          <h2 class="sidebar-title">Temas</h2>
          <ul class="sidebar-list">
            <li>
              <div class="sidebar-link">
                <RouterLink to="/" class="router-link">Inicio</RouterLink>
              </div>
            </li>
            <li>
              <div class="sidebar-link">
                <RouterLink to="/HowStart" class="router-link">Como empezar</RouterLink>
              </div>
            </li>
            <li>
              <div class="sidebar-link">
                <RouterLink to="/DetailsComesLater" class="router-link">Los detalles van después</RouterLink>
              </div>
            </li>
            <li>
              <div class="sidebar-link">
                <RouterLink to="/WorkInCycles" class="router-link">Trabaja en ciclos</RouterLink>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="app-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>
