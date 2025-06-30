<script setup>
    import ActivityListItem from '@/components/Activities/ActivityListItem.vue'

    const activities = [
        {
            id: '1',
            customClass: 'card-full',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Vieux Port'
        },
        {
            id: '2',
            customClass: 'card-medium-2',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Fort de Pomègues'
        },
        {
            id: '3',
            customClass: 'card-small-1',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Îles du Frioul'
        },
        {
            id: '4',
            customClass: 'card-full',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Parc National des Calanques'
        },
        {
            id: '5',
            customClass: 'card-small-2',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Notre-Dame-de-la-Garde'
        },
        {
            id: '6',
            customClass: 'card-medium-1',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Parc Longchamps'
        },
    ]
</script>

<template>
    <section id="activites" class="container activities">
        <h3 class="heading-section">Activités à Marseille</h3>

        <div class="activities-cards">
            <ActivityListItem
                v-for="activity in activities"
                :key="activity.id"
                :customClass="activity.customClass"
                :url="activity.url"
                :imageSource="activity.imageSource"
                :imageTextAlt="activity.imageTextAlt"
                :title="activity.title"
            />
        </div>
    </section>
</template>

<style scoped>
.activities {
    margin-top: 60px;
}

.activities .heading-section {
    margin: 0 0 22px 10px;
}

.activities-cards {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-content: space-between;
    padding: 0 10px;
    height: 445px;
}
</style>