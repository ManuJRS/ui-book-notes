<script setup>
import BaseCardText from '../components/base/BaseCardText.vue';
import BaseText from '../components/base/BaseText.vue';
import BaseTitle from '../components/base/BaseTitle.vue';
</script>

<template>
    <BaseTitle level="1" align="left">
        El tamaño no lo es todo
    </BaseTitle>

    <BaseText>
        Confiar demasiado en el tamaño de fuente para controlar tu jerarquía es un error —
        a menudo lleva a que el contenido principal sea demasiado grande y el contenido secundario demasiado pequeño.
    </BaseText>

    <BaseText>
        En lugar de dejarle todo el trabajo al tamaño de fuente, intenta usar el peso de la fuente o el color para
        lograr lo mismo.
    </BaseText>

    <BaseText>
        Por ejemplo, hacer un elemento primario más bold te permite usar un tamaño de fuente razonable,
        y al mismo tiempo comunica mejor su importancia.
    </BaseText>

    <BaseText>
        De la misma manera, usar un color más suave para el texto secundario,
        en lugar de un tamaño de fuente diminuto, deja claro que ese texto es menos importante
        sin sacrificar tanto la legibilidad.
    </BaseText>

    <BaseText>
        Intenta limitarte a dos o tres colores:
    </BaseText>

    <BaseCardText :items="[
        'Un color oscuro para el contenido principal (como un título de artículo).',
        'Un gris para el contenido secundario (como la fecha de publicación).',
        'Un gris más claro para contenido terciario (como un aviso de derechos de autor).'
    ]">
    </BaseCardText>

    <BaseText>
        De forma similar, dos pesos de fuente suelen ser suficientes para trabajo de UI:
    </BaseText>

    <BaseCardText :items="[
        'Un peso normal (400 o 500, dependiendo de la fuente) para la mayor parte del texto.',
        'Un peso más fuerte (600 o 700) para el texto que necesitas enfatizar.'
    ]">
    </BaseCardText>

    <BaseText>
        Evita usar pesos de fuente por debajo de 400 para UI — pueden funcionar para títulos grandes,
        pero son demasiado difíciles de leer en tamaños pequeños.
        Si estás considerando usar un peso más ligero para restar importancia a un texto,
        usa mejor un color más claro o un tamaño de fuente más pequeño.
    </BaseText>

</template>