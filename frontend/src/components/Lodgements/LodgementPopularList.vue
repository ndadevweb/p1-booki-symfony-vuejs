<script setup>
import { onMounted, ref, watch } from 'vue'
import { fetchLodgementsPopular } from '@/api/lodgementsPopular.api'
import { useLodgementsPopularStore } from '@/stores/lodgementsPopular'
import { useLodgementsCityStore } from '@/stores/lodgementsCity'

// DEV Only
import { fetchLodgementsPopularMock } from '@/mocks/lodgementsPopularData'
//
import LodgementPopularListItem from '@/components/Lodgements/LodgementPopularListItem.vue'

const lodgementsPopularStore = useLodgementsPopularStore()
const lodgementsCityStore = useLodgementsCityStore()

onMounted(async () => {
    lodgementsPopularStore.loading = true
    const location = lodgementsCityStore.lodgementsCityName
    const data = await fetchLodgementsPopularMock({ location })
    lodgementsPopularStore.setLodgementsPopular(data)
    lodgementsPopularStore.loading = false
})

watch(
    () => lodgementsCityStore.lodgementsCityName,
    async (newLocation) => {
        let data = {}
        lodgementsPopularStore.loading = true
        lodgementsPopularStore.setLodgementsPopular([])

        if (newLocation && newLocation.trim() !== '') {
            data = await fetchLodgementsPopularMock({ location: newLocation.trim() })
        } else {
            data = await fetchLodgementsPopularMock({ location: '' })
        }

        lodgementsPopularStore.setLodgementsPopular(data)
        lodgementsPopularStore.loading = false
    }
)

</script>

<template>
    <section class="lodgments-popular">
        <h3 class="heading-section lodgments-popular-heading">Les plus populaires<i class="fa-solid fa-star"></i></h3>

        <div class="lodgments-popular-cards">
            <LodgementPopularListItem
                v-for="lodgementPopular in lodgementsPopularStore.lodgementsPopularList"
                :key="lodgementPopular.id"
                :url="lodgementPopular.url"
                :imageSource="lodgementPopular.imageSource"
                :imageTextAlt="lodgementPopular.imageTextAlt"
                :title="lodgementPopular.title"
                :price="lodgementPopular.price"
                :rating="lodgementPopular.rating"
            />
        </div>
    </section>
</template>

<style scoped>
.lodgments-popular {
    --gap: 30px;
    flex: 0 1 420px;
    padding-bottom: 5px;

    padding: 40px;
    background: var(--color-tertiary);
    border-radius: var(--border-radius-medium);
    min-height: 625px;
}

.lodgments-popular-heading {
    display: flex;
    justify-content: space-between;
}

.lodgments-popular-heading i {
    font-size: 21px;
}

.lodgments-popular-cards {
    display: flex;
    flex-flow: column wrap;
}
</style>