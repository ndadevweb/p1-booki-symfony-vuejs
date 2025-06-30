<script setup>
defineProps({
    customClass: {
        type: String,
        validator: value => ['card-full', 'card-medium-1', 'card-medium-2', 'card-small-1', 'card-small-2'].includes(value)
    },
    url: String,
    imageSource: String,
    imageTextAlt: String,
    title: String
})
</script>

<template>
    <article :class="['activity-card', customClass]">
        <a :href="url" class="card activity-lcard-ink">
            <img :src="imageSource" :alt="imageTextAlt" class="activity-card-image" />
            <h4 class="card-heading activity-card-heading">{{ title }}</h4>
        </a>
    </article>
</template>

<style scoped>
.activity-card-link {
    flex: 1 1 auto;
}

.activity-card {
    display: flex;
    width: calc(25% - 35px);
    background: #FFF;
    border-radius: var(--border-radius-medium);
}

.activity-card-image {
    object-fit: cover;
    width: 100%;
    height: calc(100% - 55px);
    border-radius: var(--border-radius-full-top);
}

.activity-card-heading {
    display: flex;
    align-items: center;
    margin: 0 20px;
    height: 55px;
}

.card-full {
    height: 445px;
}

.card-medium-1 {
    height: 210px;
}

.card-medium-2 {
    height: 235px;
}

.card-small-1 {
    height: 165px;
}

.card-small-2 {
    height: 195px;
}
</style>