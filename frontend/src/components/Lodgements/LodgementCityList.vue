<script setup>
    import LodgementCityListItem from '@/components/Lodgements/LodgementCityListItem.vue'

    const lodgementsCity = [
        {
            id: '1',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Auberge La Cannbière',
            price: '25€',
            rating: 4
        },
        {
            id: '2',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Hôtel du port',
            price: '52€',
            rating: 5
        },
        {
            id: '3',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Hôtel Les mouettes',
            price: '76€',
            rating: 4
        },
        {
            id: '4',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Hôtel de la mer',
            price: '46€',
            rating: 3
        },
        {
            id: '5',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Auberge Le Panier',
            price: '23€',
            rating: 4
        },
        {
            id: '6',
            url: '',
            imageSource: '/draft750x500.png',
            imageTextAlt: 'Draft',
            title: 'Hôtel chez Amina',
            price: '96€',
            rating: 5
        }
    ]
</script>

<template>
    <section id="hebergements" class="lodgments-city">
        <h3 class="heading-section">Hébergements à Marseille</h3>

        <div class="lodgments-city-cards">
            <LodgementCityListItem
                v-for="lodgementCity in lodgementsCity"
                :key="lodgementCity.id"
                :url="lodgementCity.url"
                :imageSource="lodgementCity.imageSource"
                :imageTextAlt="lodgementCity.imageTextAlt"
                :title="lodgementCity.title"
                :price="lodgementCity.price"
                :rating="lodgementCity.rating"
            />
        </div>

        <button type="button" class="show-more cursor-pointer">Afficher plus</button>
    </section>
</template>

<style scoped>
.lodgments-city {
    --gap: 30px;
    display: flex;
    flex-direction: column;
    flex: 0 1 880px;

    padding: 40px;
    background: var(--color-tertiary);
    border-radius: var(--border-radius-medium);
    min-height: 625px;
}

.lodgments-city-cards {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
}

.show-more {
    border: none;
    background: none;
    align-self: flex-start;
    margin: auto 0 5px 0;
    font: 700 18px var(--font-family);
    color: var(--color-text-two);
    transition: .25s;
}

.show-more:hover {
    color: var(--color-primary);
}
</style>