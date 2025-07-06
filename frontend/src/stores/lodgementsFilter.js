import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLodgementsFilterStore = defineStore('filters', () => {
    const filtersList = ref([])
    const filtersChecked = ref([])
    const loading = ref(false)
    const error = ref(null)

    function setFilters(filters = []) {
        filtersList.value = filters
    }

    function toggle(filterID) {
        filterID = String(filterID)

        if (filtersChecked.value.includes(filterID) === false) {
            filtersChecked.value.push(filterID)
        } else {
            filtersChecked.value = filtersChecked.value.filter(checkedID => checkedID !== filterID)
        }
    }

    function isChecked(filterID) {
        return filtersChecked.value.includes(String(filterID))
    }

    function isMatch(filtersID = []) {
        if (filtersChecked.value.length === 0) {
            return true
        }

        const filtersCheckedString = filtersChecked.value.map(id => String(id))
        const filtersIDString = (filtersID || []).map(id => String(id))

        return filtersCheckedString.every(id => filtersIDString.includes(id)) === true
    }

    function resetChecked() {
        filtersChecked.value = []
    }

    function hasChecked() {
        return filtersChecked.value.length > 0
    }

    return {
        filtersList,
        filtersChecked,
        loading,
        error,
        setFilters,
        toggle,
        isChecked,
        isMatch,
        resetChecked,
        hasChecked
    }
})
