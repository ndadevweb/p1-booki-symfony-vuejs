<script setup>
import { onMounted, ref, watch } from 'vue'
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
    const data = await fetchLodgementsCityMock({ page: page.value, location: lodgementsCityStore.lodgementsCityName || '' })
    lodgementsCityStore.appendLodgementsCity(data)
}

</script>

<template>
    <section id="hebergements" class="lodgments-city">
        <h3 class="heading-section" v-if="lodgementsCityStore.loading">Chargement...</h3>
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

        <button type="button" class="show-more cursor-pointer" :class="{ 'show-more-disabled': loading }"
            v-on:click="showMoreItems()" v-if="lodgementsCityStore.lodgementsCityList.length > 0"
            :disabled="loading === true">Afficher plus</button>
    </section>
</template>

<style scoped>
.lodgments-city {
    --gap: 30px;
    display: flex;
    flex-direction: column;
    flex: 0 1 880px;

    padding: 40px;
    background: var(--color-tertiary);
    border-radius: var(--border-radius-medium);
    min-height: 625px;
}

.lodgments-city-cards {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
    margin-bottom: 42px;
}

.show-more {
    border: none;
    background: none;
    align-self: flex-start;
    /* margin: auto 0 5px 0; */
    font: 700 18px var(--font-family);
    color: var(--color-text-two);
    transition: .25s;
}

.show-more:hover {
    color: var(--color-primary);
}

.show-more-disabled {
    cursor: not-allowed;
    opacity: .5;
}
</style>