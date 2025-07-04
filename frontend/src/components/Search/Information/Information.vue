<script setup>
import { useLodgementsCityStore } from '@/stores/lodgementsCity'
import { computed } from 'vue'

const lodgementsCityStore = useLodgementsCityStore()
const message = computed(() => {
    const total = lodgementsCityStore.lodgementsCityTotal

    if (total === 0) {
        return "Aucun logement disponible dans cette ville"
    } else if (total === 1) {
        return "1 seul logement est disponible dans cette ville"
    } else {
        return `Plus de ${total} logements sont disponibles dans cette ville`
    }
})
</script>

<template>
    <p class="search-information-message">
        <span class="information-icon"><i class="fa-solid fa-info full-center"></i></span>
        <template v-if="lodgementsCityStore.loading == true">
            Calcul en cours...
        </template>
        <template v-else>
            {{ message }}
        </template>
    </p>
</template>

<style scoped>
.information-icon {
    position: relative;
    margin-right: 10px;
    padding: 10px;
    width: 24px;
    height: 24px;
    border: 1px solid var(--color-tertiary);
    border-radius: 50%;
    font-size: 14px;
    color: var(--color-primary);
}

.search-information-message {
    display: flex;
    align-items: center;
    margin: 35px 0 0 20px;
    font: 500 16px var(--font-family);
}
</style>