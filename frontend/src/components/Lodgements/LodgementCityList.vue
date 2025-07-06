<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import { fetchLodgementsCity } from '@/api/lodgementsCity.api'
import { useLodgementsCityStore } from '@/stores/lodgementsCity'
import { useLodgementsFilterStore } from '@/stores/lodgementsFilter'

// DEV Only
import { fetchLodgementsCityMock } from '@/mocks/lodgementsCityData'
//

import LodgementCityListItem from '@/components/Lodgements/LodgementCityListItem.vue'

const page = ref(1)
const lodgementsCityStore = useLodgementsCityStore()
const filtersStore = useLodgementsFilterStore()

onMounted(async () => {
    lodgementsCityStore.loading = true
    const data = await fetchLodgementsCityMock({ page: 1 })
    lodgementsCityStore.setLodgementsCity(data)
    lodgementsCityStore.loading = false
})

watch(
    () => lodgementsCityStore.lodgementsCityName,
    async (newLocation) => {
        let data = {}
        page.value = 1
        lodgementsCityStore.loading = true
        lodgementsCityStore.lodgementsCityList = []
        if (newLocation && newLocation.trim() !== '') {
            data = await fetchLodgementsCityMock({ page: 1, location: newLocation })
        } else {
            data = await fetchLodgementsCityMock({ page: 1 })
        }
        lodgementsCityStore.setLodgementsCity(data)
        lodgementsCityStore.loading = false
    }
)

const showMoreItems = async () => {
    page.value += 1
    lodgementsCityStore.loading = true
    const data = await fetchLodgementsCityMock({ page: page.value, location: lodgementsCityStore.lodgementsCityName || '' })
    lodgementsCityStore.appendLodgementsCity(data)
    lodgementsCityStore.loading = false
}

const isLoading = computed(() => lodgementsCityStore.loading === true)

const hasLodgements = computed(() => lodgementsCityStore.lodgementsCityList.length > 0)

</script>

<template>
    <section id="hebergements" class="lodgments-city">
        <h3 class="heading-section" v-if="isLoading">Chargement...</h3>
        <h3 class="heading-section" v-else>{{ lodgementsCityStore.lodgementsCityWhere }}</h3>

        <div class="lodgments-city-cards">
            <LodgementCityListItem
                v-for="lodgementCity in lodgementsCityStore.lodgementsCityList"
                v-show="filtersStore.isMatch(lodgementCity.filters) === true"
                :key="lodgementCity.id"
                :url="lodgementCity.url"
                :imageSource="lodgementCity.imageSource"
                :imageTextAlt="lodgementCity.imageTextAlt"
                :title="lodgementCity.title"
                :price="lodgementCity.price"
                :rating="lodgementCity.rating" />
        </div>

        <button
            v-if="hasLodgements"
            type="button" class="show-more cursor-pointer"
            :class="{ 'show-more-disabled': isLoading }"
            v-on:click="showMoreItems()"
            :disabled="isLoading">Afficher plus</button>
    </section>
</template>

<style scoped>
.lodgments-city {
    --gap: 30px;
    display: grid;
    grid-template-rows: auto 1fr 65px;
    align-content: start;
    padding: 40px;
    background: var(--color-tertiary);
    border-radius: var(--border-radius-medium);
    min-height: 625px;
}

.lodgments-city-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: min-content;
    gap: 30px;
}

.show-more {
    border: none;
    background: none;
    
    align-self: end;
    justify-self: start;

    font: 700 18px var(--font-family);
    color: var(--color-text-two);
    transition: .25s;
    padding-bottom: 5px;
}

.show-more:hover {
    color: var(--color-primary);
}

.show-more-disabled {
    cursor: not-allowed;
    opacity: .5;
}
</style>