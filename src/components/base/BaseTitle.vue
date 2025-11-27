<script setup>
import { computed } from 'vue';

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
    }
})

const baseClass = computed(() => `base-title`)
const levelClass = computed(() => `base-title--h${props.level}`)
const alignClass = computed(() => `base-title--align-${props.align}`)
const upperClass = computed(() =>
    props.uppercase ? 'base-title--uppercase' : ''
)

const clasess = computed(() => [
    baseClass.value,
    levelClass.value,
    alignClass.value,
    upperClass.value,
])

</script>

<template>
    <component :is="levelClass" :class="clasess">
        <slot>{{ text }}</slot>
    </component>
</template>

<style scoped>
.base-title {
    margin: 0;
    line-height: 1.2;
}

.base-title--h1 {
    font-size: 2.4rem;
    font-weight: 700;
}

.base-title--h2 {
    font-size: 2rem;
    font-weight: 700;
}

.base-title--h3 {
    font-size: 1.6rem;
    font-weight: 600;
}

.base-title--h4 {
    font-size: 1.4rem;
    font-weight: 600;
}

.base-title--uppercase {
    text-transform: uppercase;
}

.base-title--align-left {
    text-align: left;
}

.base-title--align-center {
    text-align: center;
}

.base-title--align-right {
    text-align: right;
}
</style>