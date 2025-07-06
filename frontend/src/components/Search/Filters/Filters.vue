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
                :id="filter.id"
                :icon="filter.icon"
                :title="filter.title"
                :checked="filtersStore.isChecked(filter.id)"
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
</style>