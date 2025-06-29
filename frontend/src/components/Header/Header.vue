<script setup>
import logo from '@/assets/images/logo/booki.png'
import Navigation from '@/components/Navigation/Navigation.vue'
</script>

<template>
    <header class="container header">
        <span>
            <img v-bind:src="logo" alt="Logo" title="Booki - Votre hébergement pour les vacances !" class="header-logo" />
        </span>

        <div class="header-heading">
            <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
            <p>En plein centre ville ou en pleine nature</p>
        </div>

        <Navigation />
    </header>
</template>

<style scoped>
.header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.header-logo {
    display: block;
    margin: 43px 0 0 30px;
    height: 45px;
}

.header-heading {
    order: 3;
    flex-basis: 100%;
    margin: 38px 0 0 15px;
}

.header-heading h1 {
    font: 600 22px var(--font-family);
    margin: 0;
}

.header-heading p {
    font: 400 16px var(--font-family);
    margin: 9px 0 0 0;
}
</style>