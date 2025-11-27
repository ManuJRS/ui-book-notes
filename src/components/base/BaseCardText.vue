<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },
    items: {
        type: Array,
        default: () => [],
    },
    showList: {
        type: Boolean,
        default: true,
    },
})
</script>

<template>
    <div class="base-card-text">
        <div v-if="title || $slots.title" class="base-card-text__header">
            <slot name="title">
                <h2 class="base-card-text__title">
                    {{ title }}
                </h2>
            </slot>
        </div>

        <p v-if="text || $slots.default" class="base-card-text__body">
            <slot>
                {{ text }}
            </slot>
        </p>

        <ul v-if="showList && items.length" class="base-card-text__list">
            <li v-for="(item, index) in items" :key="index" class="base-card-text__item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.base-card-text {
    margin-top: 0.75rem;
    padding: 1.5rem;
    background: #020617;
    border-radius: 0.75rem;
    border: 1px solid #1f2933;

    &__header {
        margin-bottom: 0.25rem;
    }

    &__title {
        margin: 0 0 0.75rem;
        font-size: 1.4rem;
        font-weight: 600;
    }

    &__body {
        margin: 0 0 1rem;
        font-size: 0.95rem;
        line-height: 1.6;
    }

    &__list {
        padding-left: 1.25rem;
        margin: 0;
    }

    &__item {
        margin-bottom: 0.25rem;
        list-style: disc;
        font-size: 0.95rem;
    }
}
</style>
