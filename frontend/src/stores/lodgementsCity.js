import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLodgementsCityStore = defineStore('lodgementsCity', () => {
    const lodgementsCityName = ref(null)
    const lodgementsCityWhere = ref(null)
    const lodgementsCityList = ref([])
    const lodgementsCityTotal = ref(0)

    const loading = ref(false)
    const error = ref(null)

    function setLodgementsCity(lodgementsCity = []) {
        lodgementsCityWhere.value = lodgementsCity?.where || ''
        lodgementsCityList.value = lodgementsCity?.items || []
        lodgementsCityTotal.value = lodgementsCity?.total || 0
    }

    function appendLodgementsCity(lodgementsCity = []) {
        lodgementsCityList.value = [
            ...lodgementsCityList.value,
            ...(lodgementsCity.items || [])
        ]
        if (lodgementsCityTotal.value !== lodgementsCity.total) {
            lodgementsCityTotal.value = lodgementsCity.total
        }
        if (lodgementsCity.location) {
            lodgementsCityWhere.value = lodgementsCity.location
        }
    }

    function resetLodgementsCity() {
        lodgementsCityList.value = []
        lodgementsCityTotal.value = 0
        loading.value = false
        error.value = null
    }

    function setCityName(cityName) {
        lodgementsCityName.value = cityName
    }

    return {
        lodgementsCityWhere,
        lodgementsCityList,
        lodgementsCityTotal,
        loading,
        error,
        setLodgementsCity,
        appendLodgementsCity,
        lodgementsCityName,
        setCityName,
        resetLodgementsCity
    }
})