import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLodgementsPopularStore = defineStore('lodgementsPopular', () => {
    const lodgementsPopularList = ref([])

    const loading = ref(false)
    const error = ref(null)

    function setLodgementsPopular(lodgementsPopular = []) {
        lodgementsPopularList.value = lodgementsPopular?.items || []
    }

    return {
        lodgementsPopularList,
        loading,
        error,
        setLodgementsPopular
    }
})