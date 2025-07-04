<script setup>
defineProps({
    rating: {
        type: String,
        required: true
    }
})
const totalStars = 5
</script>

<template>
  <div class="card-stars">
    <i
      v-for="i in totalStars"
      :key="i"
      class="fa-solid fa-star"
      :class="{ empty: i > rating }"
    ></i>
  </div>
</template>

<style scoped>
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
