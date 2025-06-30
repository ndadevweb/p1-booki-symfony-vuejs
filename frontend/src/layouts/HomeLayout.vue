<script setup>
    import Header from '@/components/Header/Header.vue'
    import Navigation from '@/components/Navigation/Navigation.vue'
    import Search from '@/components/Search/Search.vue'
    import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
    <Header>
        <template v-slot:navigation>
            <Navigation />
        </template>
    </Header>

    <Search />

    <slot />

    <Footer />
</template>

<style scoped>

</style>