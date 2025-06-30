<script setup>
defineProps({
    url: String,
    imageSource: String,
    imageTextAlt: String,
    title: String,
    price: String,
    ranking: Number
})
</script>

<template>
    <article class="lodgments-popular-card">
        <a :href="url" class="card card-row p-5">
            <img :src="imageSource" alt="imageTextAlt" class="card-img" />

            <div class="card-details">
                <h4 class="card-heading">{{ title }}</h4>
                <p class="card-price">Nuit à partir de <b>{{ price }}</b></p>

                <div class="card-stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </a>
    </article>
</template>

<style scoped>
.lodgments-popular-card {
    margin-bottom: var(--gap);
}



.card-stars {
    margin-top: auto;
    font-size: 11px;
    color: var(--color-primary);
}

.card-stars i:not(:first-child) {
    margin-left: 3px;
}

.card-stars .empty {
    color: var(--color-tertiary);
}
</style>