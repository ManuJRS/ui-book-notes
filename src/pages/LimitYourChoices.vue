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

    <BaseText>
        De la misma forma, no ajustes un tamaño de fuente píxel por píxel hasta que se vea perfecto.
        Define una escala tipográfica restrictiva y úsala para cualquier decisión futura de tamaño.
    </BaseText>

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