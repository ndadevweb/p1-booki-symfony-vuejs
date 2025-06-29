<script setup>
defineProps({
    message: String
})
</script>

<template>
    <p class="search-information-message">
        <span class="information-icon"><i class="fa-solid fa-info full-center"></i></span>
        {{ message }}
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