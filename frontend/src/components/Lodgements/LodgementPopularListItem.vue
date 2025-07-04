<script setup>
import Rating from '@/components/Rating/Rating.vue'

defineProps({
    url: String,
    imageSource: String,
    imageTextAlt: String,
    title: String,
    price: String,
    rating: String
})
</script>

<template>
    <article class="lodgments-popular-card">
        <a :href="url" class="card card-row p-5">
            <img :src="imageSource" alt="imageTextAlt" class="card-img" />

            <div class="card-details">
                <h4 class="card-heading">{{ title }}</h4>
                <p class="card-price">Nuit à partir de <b>{{ price }}</b></p>

                <Rating :rating="rating" />
            </div>
        </a>
    </article>
</template>

<style scoped>
.lodgments-popular-card:not(:last-child) {
    margin-bottom: var(--gap);
}
</style>