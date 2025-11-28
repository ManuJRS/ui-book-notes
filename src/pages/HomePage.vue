<script setup>
import BaseTitle from '../components/base/BaseTitle.vue';
import BaseCardText from '../components/base/BaseCardText.vue';
import BaseText from '../components/base/BaseText.vue';
</script>

<template>

    <article>
        <BaseTitle level="2" align="left" uppercase>
            Hola alineado y en mayúsculas
        </BaseTitle>


        <BaseText>
            Lorem ipsum <strong>dolor</strong> sit amet consectetur adipisicing elit. Delectus at nihil est velit
            eveniet amet!
        </BaseText>

        <BaseCardText title="Este es un ejemplo" :items="['Uno', 'Dos', 'tres', 'cuatro']">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat molestiae amet adipisci. Natus, quis
            consectetur aspernatur tenetur nihil ab.
        </BaseCardText>
    </article>
</template>