<script setup>
import { ref, computed } from 'vue'
import { useLodgementsCityStore } from '@/stores/lodgementsCity'
import { useLodgementsFilterStore } from '@/stores/lodgementsFilter'

const searchInput = ref('')
const lodgementsCityStore = useLodgementsCityStore()
const filtersStore = useLodgementsFilterStore()

const submitSearch = () => {
    const newLocation = searchInput.value.trim() || null
    lodgementsCityStore.setCityName(newLocation)
}

const resetSearch = () => {
    if (filtersStore.hasChecked() === true) {
        filtersStore.resetChecked()
    }

    if (lodgementsCityStore.lodgementsCityName !== null && lodgementsCityStore.lodgementsCityName !== '') {
        searchInput.value = ''
        lodgementsCityStore.setCityName('')
    }
}

const isLoading = computed(() => {
    return lodgementsCityStore.loading === true || filtersStore.loading === true
})

const disabledSubmitButton = computed(() => {
    if (searchInput.value.trim() === '') {
        return true
    }

    if (searchInput.value === lodgementsCityStore.lodgementsCityName) {
        return true
    }

    if (isLoading.value === true) {
        return true
    }

    return false
})

const disabledResetButton = computed(() => {
    if (filtersStore.hasChecked() === true) {
        return false
    }

    if (searchInput.value.trim() === '') {
        return true
    }

    if (isLoading.value === true) {
        return true
    }

    return false
})


</script>

<template>
    <form class="search-form" v-on:submit.prevent="submitSearch">
        <label for="search-field" class="cursor-pointer"><i class="fa-solid fa-location-dot full-center"></i></label>
        <input type="search" name="search" id="search-field" placeholder="Marseille, France" v-model="searchInput" :disabled="isLoading" />
        <button type="submit" class="cursor-pointer" :disabled="disabledSubmitButton">
            <i class="fas fa-search"></i>
            <span>Rechercher</span>
        </button>
        <button
            type="button"
            class="reset cursor-pointer"
            :disabled="disabledResetButton"
            v-on:click="resetSearch">
            Réinitialiser
        </button>
    </form>
</template>

<style scoped>
.search-form {
    --size-search-elements: 50px;
    display: flex;
    flex-direction: row;
    margin: 0 10px;
}

.search-form label,
.search-form input,
.search-form input[type="search"] {
    height: var(--size-search-elements);
}

.search-form label {
    position: relative;
    width: var(--size-search-elements);
    flex: 0 0 auto;
    background: var(--color-tertiary);
    border-radius: var(--border-round-full-left);
    font-size: 18px;
}

.search-form input[type="search"] {
    padding: 1%;
    width: 235px;
    font: 700 18px var(--font-family);
    border: 2px solid var(--color-tertiary);
    border-left: 2px solid transparent;
    border-right: none;
    transition: .25s;
}

.search-form input[type="search"]:focus {
    outline: none;
    border: 2px solid var(--color-primary);
    border-right: none;
}

.search-form button {
    padding: 0 1%;
    width: 135px;
    background: var(--color-primary);
    color: var(--color-text-one);
    font: 600 18px var(--font-family);
    border: 2px solid transparent;
    border-radius: 0 16px 16px 0;
    box-shadow: inset 0 0 0 var(--color-primary);
    transition: .25s;
}

.search-form button.reset {
    border-radius: 16px;
    margin-left: 2px;
}

.search-form button[disabled] {
    background: #DDD;
}

.search-form button .fa-search {
    display: none;
}
</style>