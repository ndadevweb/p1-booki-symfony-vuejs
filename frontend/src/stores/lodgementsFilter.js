import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLodgementsFilterStore = defineStore('filters', () => {
    const filtersList = ref([])
    const loading = ref(false)
    const error = ref(null)

    function setFilters(filters = []) {
        filtersList.value = filters
    }

    return {
        filtersList,
        loading,
        error,
        setFilters
    }
})