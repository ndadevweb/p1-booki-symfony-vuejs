<script setup>
    import LodgementPopularListItem from '@/components/Lodgements/LodgementPopularListItem.vue'

    const lodgementsPopular = [
        {
            id: '1',
            url : '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Hôtel Le soleil du matin',
            price: '128€',
            rating: 5
        },
        {
            id: '2',
            url : '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: "Au coeur de l'eau Chambres d'hôtes",
            price: '71€',
            rating: 4
        },
        {
            id: '3',
            url : '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Hôtel Tout bleu et Blanc',
            price: '68€',
            rating: 4
        }
    ]
</script>

<template>
    <section class="lodgments-popular">
        <h3 class="heading-section lodgments-popular-heading">Les plus populaires<i class="fa-solid fa-star"></i></h3>

        <div class="lodgments-popular-cards">
            <LodgementPopularListItem
                v-for="lodgementPopular in lodgementsPopular"
                :key="lodgementPopular.id"
                :url="lodgementPopular.url"
                :imageSource="lodgementPopular.imageSource"
                :imageTextAlt="lodgementPopular.imageTextAlt"
                :title="lodgementPopular.title"
                :price="lodgementPopular.price"
                :rating="lodgementPopular.rating"
            />
        </div>
    </section>
</template>

<style scoped>
.lodgments-popular {
    --gap: 30px;
    flex: 0 1 420px;
    padding-bottom: 5px;

    padding: 40px;
    background: var(--color-tertiary);
    border-radius: var(--border-radius-medium);
    min-height: 625px;
}

.lodgments-popular-heading {
    display: flex;
    justify-content: space-between;
}

.lodgments-popular-heading i {
    font-size: 21px;
}

.lodgments-popular-cards {
    display: flex;
    flex-flow: column wrap;
}
</style>