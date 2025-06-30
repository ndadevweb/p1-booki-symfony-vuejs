<script setup>
import Rating from '@/components/Rating/Rating.vue'

defineProps({
    url: String,
    imageSource: String,
    imageTextAlt: String,
    title: String,
    price: String,
    rating: Number
})
</script>

<template>
    <article class="lodgments-city-card">
        <a :href="url" class="card card-column p-5">
            <img :src="imageSource" :alt="imageTextAlt" class="card-img" />

            <div class="card-details">
                <h4 class="card-heading">{{ title }}</h4>
                <p class="card-price">Nuit à partir de <b>{{ price }}</b></p>

                <Rating :rating="rating" />
            </div>
        </a>
    </article>
</template>

<style scoped>
.lodgments-city-card {
    flex: 1 1 calc( (100% / 3) - var(--gap));
}
</style>