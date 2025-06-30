<script setup>
    import ActivityList from '@/components/Activities/ActivityList.vue'
    import LodgementCityList from '@/components/Lodgements/LodgementCityList.vue'
    import LodgementPopularList from '@/components/Lodgements/LodgementPopularList.vue'
</script>

<template>
    <div class="container lodgments">
        <LodgementCityList />
        <LodgementPopularList />
    </div>

    <ActivityList />
</template>

<style scoped>
.lodgments {
    display: flex;
    column-gap: 40px;
    margin-top: 40px;
    padding: 0 30px;
}
</style>