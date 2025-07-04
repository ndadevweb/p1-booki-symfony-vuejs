import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActivitiesStore = defineStore('activities', () => {
    const activitiesList = ref([])
    const activitiesTitle = ref(null)

    const loading = ref(false)
    const error = ref(null)

    function setActivities(activities = []) {
        activitiesList.value = activities?.items || []
    }

    function setActivitiesTitle(title) {
        activitiesTitle.value = title
    }

    return {
        activitiesList,
        activitiesTitle,
        loading,
        error,
        setActivities,
        setActivitiesTitle
    }
})