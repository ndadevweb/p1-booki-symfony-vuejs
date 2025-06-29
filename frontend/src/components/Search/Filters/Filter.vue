<script setup>
const props = defineProps({
  icon: String,
  title: String
})
</script>

<template>
    <label class="search-filters-item cursor-pointer">
        <input type="checkbox" class="sr-only" />
        <span class="search-filters-item-icon">
            <i :class="['fa-solid', icon, 'full-center']"></i>
        </span>
        <span class="search-filters-item-text">{{ title }}</span>
    </label>
</template>

<style scoped>
.search-filters-item {
    display: flex;
    align-items: center;
    padding: 0 20px 0 0;
    height: var(--size-search-elements);
    background: var(--color-text-one);
    border: 3px solid var(--color-tertiary);
    border-radius: var(--size-search-elements);
    transform: scale(1);
    transition: .25s;
    /* overflow: hidden; */
}

.search-filters-item:hover,
.search-filters-item:has(input[type="checkbox"]:focus) {
    border-color: var(--color-secondary);
    color: var(--color-primary);
    transform: scale(1.05);
}

.search-filters-item:has(input[type="checkbox"]:checked) {
    border-color: var(--color-primary);
}

.search-filters-item-icon {
    flex-shrink: 0;
    width: calc(var(--size-search-elements) + 0px);
    height: calc(var(--size-search-elements) + 0px);
    position: relative;
    margin: 0 11px 0 -4px;
    background: var(--color-secondary);
    border-radius: var(--size-search-elements);
}

.search-filters-item-icon i {
    color: var(--color-primary);
    font-size: 18px;
}

.search-filters-item-text {
    font: 600 16px var(--font-family);
    white-space: nowrap;
}
</style>