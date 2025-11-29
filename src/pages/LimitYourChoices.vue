<script setup>
import BaseTitle from '../components/base/BaseTitle.vue';
import BaseText from '../components/base/BaseText.vue';
import BaseCardText from '../components/base/BaseCardText.vue';
</script>

<template>
    <BaseTitle level="1" align="left">
        Limita tus opciones
    </BaseTitle>

    <BaseText>
        Tener millones de colores y miles de fuentes para elegir puede sonar bien en teoría,
        pero en la práctica suele ser una maldición paralizante.
    </BaseText>

    <BaseText>
        Y no solo son las fuentes y colores — también puedes perder mucho tiempo
        agonizando sobre casi cualquier decisión menor de diseño.
    </BaseText>

    <BaseCardText :items="[
        '¿Este texto debería ser de 12px o 13px?',
        '¿Esta sombra debería tener 10% de opacidad o 15%?',
        '¿Este avatar debería medir 24px o 25px?',
        '¿Debería usar un peso de fuente medio para este botón o semibold?',
        '¿Este encabezado debería tener un margen inferior de 18px o 20px?'
    ]">
    </BaseCardText>

    <BaseText>
        Cuando diseñas sin restricciones, tomar decisiones es una tortura porque siempre habrá
        más de una opción “correcta”.
    </BaseText>

    <BaseText>
        Por ejemplo, estos botones tienen diferentes colores de fondo, pero es casi imposible
        notar la diferencia entre ellos solo mirándolos.
    </BaseText>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-6 border-2 rounded flex flex-col items-center">
            <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 bg-blue-400 text-white shadow-md rounded-full w-22 mb-2"
                type="button">
                Filled
            </button>
            <span>#60a5fa</span>
        </div>
        <div class="p-6 border-2 rounded flex flex-col items-center">
            <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 bg-blue-500 text-white shadow-md rounded-full w-22 mb-2"
                type="button">
                Filled
            </button>
            <span>#3b82f6</span>
        </div>
        <div class="p-6 border-2 rounded flex flex-col items-center">
            <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 bg-blue-600 text-white shadow-md rounded-full w-22 mb-2"
                type="button">
                Filled
            </button>
            <span>#2563eb</span>
        </div>
    </div>
    <BaseText>
        ¿Cómo se supone que tomes una decisión con confianza si ninguna de estas opciones sería realmente mala?
    </BaseText>

    <BaseTitle level="3">
        Define sistemas por adelantado
    </BaseTitle>

    <BaseText>
        En lugar de elegir valores manualmente de un conjunto infinito cada vez que necesitas tomar una decisión,
        comienza con un conjunto más pequeño de opciones.
    </BaseText>

    <BaseText>
        No abras el selector de color cada vez que necesites elegir un nuevo tono de azul —
        elige entre un set de 8–10 tonos definidos de antemano.
    </BaseText>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="p-6 border-2 bg-blue-100"></div>
        <div class="p-6 border-2 bg-blue-200"></div>
        <div class="p-6 border-2 bg-blue-300"></div>
        <div class="p-6 border-2 bg-blue-400"></div>
        <div class="p-6 border-2 bg-blue-500"></div>
        <div class="p-6 border-2 bg-blue-600"></div>
        <div class="p-6 border-2 bg-blue-700"></div>
        <div class="p-6 border-2 bg-blue-800"></div>
    </div>
    <BaseText>
        De la misma forma, no ajustes un tamaño de fuente píxel por píxel hasta que se vea perfecto.
        Define una escala tipográfica restrictiva y úsala para cualquier decisión futura de tamaño.
    </BaseText>
    <div class="grid grid-cols-1 gap-4">
        <div class="p-6 border-2 rounded">
            <div class="grid grid-cols-[auto,1fr] gap-4 items-center">
                <span class="text-[12px] leading-none">12px</span>
                <p class="text-[12px] leading-snug m-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, neque?
                </p>
            </div>
        </div>

        <div class="p-6 border-2 rounded">
            <div class="grid grid-cols-[auto,1fr] gap-4 items-center">
                <span class="text-[16px]">
                    16px
                </span>
                <p class="text-[16px] m-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quasi!
                </p>
            </div>
        </div>
        <div class="p-6 border-2 rounded">
            <div class="grid grid-cols-[auto,1fr] gap-4 items-center">
                <span class="text-[18px] m-0">
                    18px
                </span>
                <p class="text-[18px] m-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, voluptatem.
                </p>
            </div>
        </div>
        <div class="p-6 border-2">
            <div class="grid grid-cols-[auto,1fr] gap-4 items-center">
                <span class="text-[20px] m-0">
                    20px
                </span>
                <p class="text-[20px] m-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, iste!
                </p>
            </div>
        </div>
        <div class="p-6 border-2">
            <div class="grid grid-cols-[auto,1fr] gap-4 items-center">
                <span class="text-[22px]">
                    22px
                </span>
                <p class="text-[22px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, totam?
                </p>
            </div>
        </div>
    </div>

    <BaseText>
        Cuando construyes sistemas como este, solo haces el trabajo difícil una vez,
        en lugar de cada vez que diseñas una nueva pieza de UI.
        Es un poco más de trabajo al inicio, pero vale la pena — te ahorrará toneladas de fatiga de decisiones después.
    </BaseText>

    <BaseTitle level="3">
        Diseñar por eliminación
    </BaseTitle>

    <BaseText>
        Cuando diseñas usando un conjunto limitado de valores, tomar decisiones es mucho más fácil
        porque hay muchas menos opciones “correctas”.
    </BaseText>

    <BaseText>
        Por ejemplo, supongamos que intentas elegir un tamaño para un ícono.
        Has definido una escala donde tus únicas opciones pequeñas-medias son 12px, 16px, 24px y 32px.
    </BaseText>
    <BaseText>
        Para elegir la mejor opción, comienza adivinando cuál se verá mejor, tal vez 16px.
        Luego prueba los valores a los lados (12px y 24px) para comparar.
    </BaseText>

    <BaseText>
        Lo más probable es que dos de esas opciones parezcan malas de inmediato.
        Si son las opciones externas, ya terminaste — la del medio es la única buena.
    </BaseText>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="py-6 border-2 text-center">
            <button class="bg-pink-500 text-white text-sm px-6 py-3 rounded-full shadow mr-1 mb-1" type="button">
                <div class="flex justify-center items-center gap-2">
                    <i class="fas fa-heart text-[16px]"></i>
                    <span>16px</span>
                </div>
            </button>
        </div>
        <div class="py-6 border-2 text-center">
            <button class="bg-pink-500 text-white text-sm px-6 py-3 rounded-full shadow mr-1 mb-1" type="button">
                <div class="flex justify-center items-center gap-2">
                    <i class="fas fa-heart text-[24px]"></i>
                    <span>24px</span>
                </div>
            </button>
        </div>
        <div class="py-6 border-2 text-center">
            <button class="bg-pink-500 text-white text-sm px-6 py-3 rounded-full shadow mr-1 mb-1" type="button">
                <div class="flex items-center justify-center gap-2">
                    <i class="fas fa-heart text-[31px]"></i>
                    <span>31px</span>
                </div>
            </button>
        </div>
    </div>
    <BaseText>
        Si una de las externas se ve mejor, haz otra comparación usando esa como el nuevo “valor medio”
        y asegúrate de que no haya una mejor.
    </BaseText>

    <BaseText>
        Este enfoque funciona para cualquier cosa donde hayas definido un sistema.
        Cuando te limitas a un conjunto de opciones que se ven claramente diferentes entre sí,
        elegir la mejor es pan comido.
    </BaseText>

    <BaseTitle level="3">
        Sistematiza todo
    </BaseTitle>

    <BaseText>
        Cuantos más sistemas tengas, más rápido podrás trabajar y menos dudarás de tus decisiones.
    </BaseText>

    <BaseCardText :items="[
        'Tamaño de fuente',
        'Peso de fuente',
        'Altura de línea',
        'Color',
        'Margen',
        'Padding',
        'Width',
        'Height',
        'Sombras',
        'Border radius',
        'Border width',
        'Opacidad'
    ]">
    </BaseCardText>

    <BaseText>
        No tienes que definirlo todo desde el principio, solo asegúrate de abordar el diseño con una mentalidad
        orientada a sistemas.
        Busca oportunidades de introducir nuevos sistemas a medida que tomes nuevas decisiones,
        y trata de evitar tener que tomar la misma decisión menor dos veces.
    </BaseText>

    <BaseText>
        Diseñar con sistemas será un tema recurrente en este libro, y en capítulos posteriores hablaremos
        de cómo construir muchos de estos sistemas con más detalle.
    </BaseText>

</template>