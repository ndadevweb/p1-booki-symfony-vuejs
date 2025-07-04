<script setup>
import { useApiData } from '@/composables/useApiData'
import { useStoreSync } from '@/composables/useStoreSync'
import { fetchFilters } from '@/api/filters.api'

import { useLodgementsFilterStore } from '@/stores/lodgementsFilter'

import ActivityList from '@/components/Activities/ActivityList.vue'
import LodgementCityList from '@/components/Lodgements/LodgementCityList.vue'
import LodgementPopularList from '@/components/Lodgements/LodgementPopularList.vue'

const { data: lodgementsFilters, loading: lodgementsFiltersLoading, error: lodgementsFiltersError, reload: reloadFilters } = useApiData(fetchFilters)

const filtersStore = useLodgementsFilterStore()
useStoreSync(lodgementsFilters, lodgementsFiltersLoading, lodgementsFiltersError, filtersStore, 'setFilters')
</script>

<template>
    <div class="container lodgments">
        <LodgementCityList />
        <LodgementPopularList />
    </div>

    <ActivityList />
</template>

<style scoped>
.lodgments {
    display: flex;
    column-gap: 40px;
    margin-top: 40px;
    padding: 0 30px;
}
</style>