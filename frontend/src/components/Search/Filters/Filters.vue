<script setup>
import { useLodgementsFilterStore } from '@/stores/lodgementsFilter';
import Filter from '@/components/Search/Filters/Filter.vue'

const filtersStore = useLodgementsFilterStore()
</script>

<template>
    <div class="search-filters">
        <h2>Filtres</h2>

        <div class="search-filters-items">
            <Filter
                v-if="filtersStore.filtersList.length"
                v-for="filter in filtersStore.filtersList"
                :key="filter.id"
                :icon="filter.icon"
                :title="filter.title"
            />
            <div v-else>CHARGEMENT DES FILTRES</div>
        </div>
    </div>
</template>

<style scoped>
.search-filters {
    --size-search-elements: 50px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-top: 30px;
    margin-left: 30px;
}

.search-filters h2 {
    margin-right: 35px;
    margin: 10px 35px 10px 0;
    font: 700 18px var(--font-family);
}

.search-filters-items {
    display: flex;
    flex-flow: row wrap;
    gap: 10px 25px;
}



/*
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
}

.search-filters-item:hover {
    border-color: var(--color-secondary);
    color: var(--color-primary);
    transform: scale(1.05);
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
*/
</style>