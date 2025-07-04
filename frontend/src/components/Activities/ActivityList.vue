<script setup>
import { onMounted, ref, watch } from 'vue'
import { fetchActivitiesCity } from '@/api/activitiesCity.api'
import { useActivitiesStore } from '@/stores/activities.js'
import { useLodgementsCityStore } from '@/stores/lodgementsCity'

// DEV Only
import { fetchActivitiesMock } from '@/mocks/activitiesData'
//

import ActivityListItem from '@/components/Activities/ActivityListItem.vue'

const activitiesStore = useActivitiesStore()
const lodgementsCityStore = useLodgementsCityStore()

onMounted(async () => {
    activitiesStore.loading = true
    const location = lodgementsCityStore.lodgementsCityName
    const data = await fetchActivitiesMock({ location })
    activitiesStore.setActivities(data)
    activitiesStore.setActivitiesTitle(data.title)
    activitiesStore.loading = false
})

watch(
    () => lodgementsCityStore.lodgementsCityName,
    async (newLocation) => {
        let data = {}
        activitiesStore.loading = true
        activitiesStore.setActivities([])
        activitiesStore.setActivitiesTitle('')

        if (newLocation && newLocation.trim() !== '') {
            data = await fetchActivitiesMock({ location: newLocation })
        } else {
            data = await fetchActivitiesMock({ location: '' })
        }

        activitiesStore.setActivities(data)
        activitiesStore.setActivitiesTitle(data?.title)
        activitiesStore.loading = false
    }
)
</script>

<template>
    <section id="activites" class="container activities">
        <h3 class="heading-section" v-if="activitiesStore.loading === false && activitiesStore.activitiesTitle !== null">{{ activitiesStore.activitiesTitle }}</h3>
        <h3 class="heading-section" v-else-if="activitiesStore.loading === false && lodgementsCityStore.lodgementsCityName !== null">Activités à {{ lodgementsCityStore.lodgementsCityName }}</h3>
        <h3 class="heading-section" v-else>Chargement...</h3>

        <div class="activities-cards">
            <ActivityListItem
                v-for="activity in activitiesStore.activitiesList"
                :key="activity.id"
                :customClass="activity.customClass"
                :url="activity.url"
                :imageSource="activity.imageSource"
                :imageTextAlt="activity.imageTextAlt"
                :title="activity.title"
            />
        </div>
    </section>
</template>

<style scoped>
.activities {
    margin-top: 60px;
}

.activities .heading-section {
    margin: 0 0 22px 10px;
}

.activities-cards {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-content: space-between;
    padding: 0 10px;
    height: 445px;
}
</style>