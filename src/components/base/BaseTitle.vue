<script setup>
import { computed } from 'vue'

const props = defineProps({
    level: {
        type: Number,
        default: 2
    },
    text: {
        type: String,
        default: ''
    },
    uppercase: {
        type: Boolean,
        default: false
    },
    align: {
        type: String,
        default: 'left'
    },
})

const headingTag = computed(() => `h${props.level}`)

const baseClass = 'base-title'
const levelClass = computed(() => `base-title--h${props.level}`)
const alignClass = computed(() => `base-title--align-${props.align}`)
const upperClass = computed(() => props.uppercase ? 'base-title--uppercase' : '')

const classes = computed(() => [
    baseClass,
    levelClass.value,
    alignClass.value,
    upperClass.value,
])

</script>

<template>
    <component :is="headingTag" :class="classes">
        <slot>{{ text }}</slot>
    </component>
</template>

<style scoped>
.base-title {
    margin: 0;
    line-height: 1.2;

    &--h1 {
        font-size: 2.4rem;
        font-weight: 700;
    }

    &--h2 {
        font-size: 2rem;
        font-weight: 700;
    }

    &--h3 {
        font-size: 1.6rem;
        font-weight: 600;
    }

    &--h4 {
        font-size: 1.4rem;
        font-weight: 600;
    }

    &--uppercase {
        text-transform: uppercase;
    }

    &--align-left {
        text-align: left;
    }

    &--align-center {
        text-align: center;
    }

    &--align-right {
        text-align: right;
    }
}
</style>
