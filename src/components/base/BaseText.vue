<script setup>

const props = defineProps({
    text: {
        type: String,
        default: ''
    }
})

</script>

<template>
    <p v-if="text || $slots.default" class="text__body">
        <slot>
            {{ text }}
        </slot>
    </p>
</template>

<style scoped>
.text__body {
    margin: 1rem 0 1rem;
    font-size: 0.95rem;
    line-height: 1.6;

    &--small {
        font-size: 0.8rem;
    }

    &:hover {
        opacity: 0.8;
    }

    strong {
        font-weight: 700;
        text-decoration: underline;
    }
}
</style>