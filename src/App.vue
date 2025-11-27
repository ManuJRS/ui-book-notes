<script setup>
</script>

<template>
  <div class="app">
    <!-- HEADER -->
    <header class="app-header">
      <h1 class="app-title">UI Study Notes</h1>
      <p class="app-subtitle">Documentando mi avance del libro de UI</p>
    </header>

    <!-- LAYOUT PRINCIPAL -->
    <div class="app-layout">
      <!-- COLUMNA IZQUIERDA: MENU -->
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

      <!-- COLUMNA CENTRAL: CONTENIDO -->
      <main class="app-content">
        <article>
          <h2>Introducción</h2>
          <p>
            Aquí vas a ir escribiendo tus notas del libro, resúmenes,
            ejemplos, screenshots mentales, etc.
          </p>

          <h3>Ejemplo de código</h3>

          <!-- BLOQUE DE CÓDIGO -->
          <pre class="code-block">
<code>&lt;div class="card"&gt;
  &lt;h2&gt;Título de ejemplo&lt;/h2&gt;
  &lt;p&gt;Este es un texto dentro de una card.&lt;/p&gt;
&lt;/div&gt;
</code>
          </pre>

          <h3>Resultado</h3>
          <!-- RESULTADO DEL CÓDIGO -->
          <div class="example-preview">
            <div class="card">
              <h2>Título de ejemplo</h2>
              <p>Este es un texto dentro de una card.</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>
