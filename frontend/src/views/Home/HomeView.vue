<script setup>
    import LodgementCityList from '@/components/Lodgements/LodgementCityList.vue'
    import LodgementPopularList from '@/components/Lodgements/LodgementPopularList.vue'
</script>

<template>

    <div class="container lodgments">
        <LodgementCityList />
        <LodgementPopularList />
    </div>
    <!--
        <section id="activites" class="container activities">
            <h3 class="heading-section">Activités à Marseille</h3>

            <div class="activities-cards">
                <article class="card-full">
                    <a href="#" class="card">
                        <img src="./images/activites/4_small/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg" alt="Vieux Port avec plusieurs bateaux à quai" />
                        <h4 class="card-heading">Vieux Port</h4>
                    </a>
                </article>
                <article class="card-medium-2">
                    <a href="#" class="card">
                        <img src="./images/activites/4_small/paul-hermann-QFTrLdQIRhI-unsplash.jpg" alt="Fort de Pomègues en hauteur sur une colline de rochers" />
                        <h4 class="card-heading">Fort de Pomègues</h4>
                    </a>
                </article>
                <article class="card-small-1">
                    <a href="#" class="card">
                        <img src="./images/activites/4_small/kevin-hikari-rV_Qd1l-VXg-unsplash.jpg" alt="Îles du Frioul au loin" />
                        <h4 class="card-heading">Îles du Frioul</h4>
                    </a>
                </article>
                <article class="card-full">
                    <a href="#" class="card">
                        <img src="./images/activites/4_small/kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg" alt="Parc National des Calanques avec une belle vue sur la mer" />
                        <h4 class="card-heading">Parc National des Calanques</h4>
                    </a>
                </article>
                <article class="card-small-2">
                    <a href="#" class="card">
                        <img src="./images/activites/4_small/florian-wehde-xW9e8gdotxI-unsplash.jpg" alt="Notre-Dame-de-la-Garde à l'horizon avec une vue sur la ville" />
                        <h4 class="card-heading">Notre-Dame-de-la-Garde</h4>
                    </a>
                </article>
                <article class="card-medium-1">
                    <a href="#" class="card">
                        <img src="./images/activites/4_small/lena-paulin-wH2-EJoDcV0-unsplash.jpg" alt="Parc Longchamps vue sur la fontaine avec la monument en arrière plan" />
                        <h4 class="card-heading">Parc Longchamps</h4>
                    </a>
                </article>
            </div>
        </section>
-->
</template>

<style scoped>
.lodgments {
    display: flex;
    column-gap: 40px;
    margin-top: 40px;
    padding: 0 30px;
}
</style>