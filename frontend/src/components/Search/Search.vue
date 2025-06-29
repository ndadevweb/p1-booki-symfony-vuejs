<script setup>
import Form from '@/components/Search/Form/Form.vue'
import Filters from '@/components/Search/Filters/Filters.vue'
import Information from '@/components/Search/Information/Information.vue'
</script>

<template>
    <aside class="container search">
        <Form />
        <Filters />
        <Information message="Plus de 500 logements sont disponibles dans cette ville" />
    </aside>
</template>

<style scoped>
.search {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
</style>