<script setup>
import BaseCardText from '../components/base/BaseCardText.vue';
import BaseTitle from '../components/base/BaseTitle.vue';
import BaseText from '../components/base/BaseText.vue';
</script>

<template>
    <BaseTitle level="1" align="left">
        Elige una personalidad
    </BaseTitle>

    <BaseText>
        Cada diseño tiene algún tipo de personalidad. Un sitio bancario podría tratar de comunicar seguridad y
        profesionalismo,
        mientras que una startup moderna podría buscar un diseño que se sienta divertido y juguetón.
    </BaseText>

    <BaseText>
        A simple vista, darle una personalidad particular a un diseño puede sonar abstracto o poco concreto,
        pero mucho de ello se determina por algunos factores sólidos y específicos.
    </BaseText>

    <BaseTitle level="3">
        Elección de tipografía
    </BaseTitle>

    <BaseText>
        La tipografía juega un papel enorme en determinar cómo se siente un diseño.
        Si quieres un estilo elegante o clásico, podrías incorporar una tipografía serif en tu diseño.
    </BaseText>

    <BaseText>
        Para un aspecto más juguetón, podrías usar una sans serif redondeada.
    </BaseText>

    <BaseText>
        Si buscas un estilo más sobrio, o si quieres que otros elementos sean los que definan la personalidad,
        una sans serif neutral funciona muy bien.
    </BaseText>

    <BaseTitle level="3">
        Color
    </BaseTitle>

    <BaseText>
        Hay mucha ciencia sobre la psicología del color, pero en la práctica, lo que realmente necesitas
        es prestar atención a cómo te hacen sentir los colores.
    </BaseText>

    <BaseCardText :items="[
        'El azul es seguro y familiar — nadie se queja del azul.',
        'El dorado puede transmitir “costoso” y “sofisticado”.',
        'El rosa es más divertido y menos serio.'
    ]">
    </BaseCardText>

    <BaseText>
        Aunque elegir colores basándote solo en psicología no es siempre práctico, mucho tiene que ver con lo que te
        gusta
        y con entender por qué crees que un color es adecuado.
    </BaseText>

    <BaseTitle level="3">
        Bordes redondeados
    </BaseTitle>

    <BaseText>
        Aunque parezca un detalle pequeño, el grado en el que redondeas los bordes en un diseño
        puede tener un gran impacto en cómo se siente.
    </BaseText>

    <BaseCardText :items="[
        'Un borde ligeramente redondeado es neutral y no comunica mucha personalidad.',
        'Un borde muy redondeado se siente más juguetón.',
        'Sin bordes redondeados el diseño se siente más serio o formal.'
    ]">
    </BaseCardText>

    <BaseText>
        Elijas lo que elijas, es importante ser consistente. Mezclar esquinas cuadradas con esquinas redondeadas
        dentro de la misma interfaz casi siempre se ve peor que elegir una sola y mantenerla.
    </BaseText>

    <BaseTitle level="3">
        Lenguaje
    </BaseTitle>

    <BaseText>
        Aunque no es una técnica visual de diseño, las palabras que usas en una interfaz
        tienen una influencia enorme en su personalidad.
        Un tono menos personal puede sentirse más oficial o profesional,
        mientras que un lenguaje más amigable y casual hace que el sitio también se sienta más cercano.
    </BaseText>

    <BaseTitle level="3">
        Decidir qué es lo que realmente quieres
    </BaseTitle>

    <BaseText>
        Muchas veces tendrás una intuición del tipo de personalidad que quieres lograr.
        Pero si no la tienes, una buena forma de simplificar la decisión es observar otros sitios usados por el mismo
        público objetivo.
    </BaseText>

    <BaseCardText :items="[
        'Si la mayoría de ellos son “negocios serios”, quizás tu sitio también debería verse así.',
        'Si son más juguetones y con un poco de humor, quizá ese sea el camino adecuado para ti.'
    ]">
    </BaseCardText>

    <BaseText>
        Solo intenta no copiar demasiado a tus competidores directos; no quieres parecer una versión de segunda de algo
        más.
    </BaseText>


</template>