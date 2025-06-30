<script setup>
    import LodgementCityList from '@/components/Lodgements/LodgementCityList.vue'
</script>

<template>

    <div class="container lodgments">
        <LodgementCityList />
    </div>
    <!--
        <section id="hebergements" class="container lodgments">
            <div class="lodgments-city">
                <h3 class="heading-section">Hébergements à Marseille</h3>

                <div class="lodgments-city-cards">
                    <article class="lodgments-city-card">
                        <a href="#" class="card card-column p-5">
                            <img src="./images/hebergements/4_small/marcus-loke-WQJvWU_HZFo-unsplash.jpg" alt="Chambre composé d'un lit superposé avec deux fenêtres donnant une vue sur la rue" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Auberge La Cannebière</h4>
                                <p class="card-price">Nuit à partir de <b>25€</b></p>

                                <div class="card-stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star empty"></i>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="lodgments-city-card">
                        <a href="#" class="card card-column p-5">
                            <img src="./images/hebergements/4_small/fred-kleber-gTbaxaVLvsg-unsplash.jpg" alt="Chambre lumineuse et climatisée avec deux lits simple" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Hôtel du port</h4>
                                <p class="card-price">Nuit à partir de 52<b>€</b></p>

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
                    <article class="lodgments-city-card">
                        <a href="#" class="card card-column p-5">
                            <img src="./images/hebergements/4_small/reisetopia-B8WIgxA_PFU-unsplash.jpg" alt="Chambre avec un lit double, deux commodes et une armoire" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Hôtel Les mouettes</h4>
                                <p class="card-price">Nuit à partir de 76<b>€</b></p>

                                <div class="card-stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star empty"></i>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="lodgments-city-card">
                        <a href="#" class="card card-column p-5">
                            <img src="./images/hebergements/4_small/annie-spratt-Eg1qcIitAuA-unsplash.jpg" alt="Chambre lumineuse avec un lit double, deux commodes" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Hôtel de la mer</h4>
                                <p class="card-price">Nuit à partir de 46<b>€</b></p>

                                <div class="card-stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star empty"></i>
                                    <i class="fa-solid fa-star empty"></i>
                                </div>
                            </div>

                        </a>
                    </article>
                    <article class="lodgments-city-card">
                        <a href="#" class="card card-column p-5">
                            <img src="./images/hebergements/4_small/nicate-lee-kT-ZyaiwBe0-unsplash.jpg" alt="Chambre avec deux lits superposés" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Auberge Le Panier</h4>
                                <p class="card-price">Nuit à partir de <b>23€</b></p>

                                <div class="card-stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star empty"></i>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="lodgments-city-card">
                        <a href="#" class="card card-column p-5">
                            <img src="./images/hebergements/4_small/febrian-zakaria-M6S1WvfW68A-unsplash.jpg" alt="Chambre avec deux lits moyens, une télé et un bureau" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Hôtel chez Amina</h4>
                                <p class="card-price">Nuit à partir de 96<b>€</b></p>

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
                </div>

                <a href="#" class="show-more">Afficher plus</a>
            </div>

            <div class="lodgments-popular">
                <h3 class="heading-section lodgments-popular-heading">Les plus populaires<i class="fa-solid fa-star"></i></h3>

                <div class="lodgments-popular-cards">
                    <article class="lodgments-popular-card">
                        <a href="#" class="card card-row p-5">
                            <img src="./images/hebergements/4_small/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg" alt="Chambre avec un lit double et vue sur la rue" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Hôtel Le soleil du matin</h4>
                                <p class="card-price">Nuit à partir de 128<b>€</b></p>

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
                    <article class="lodgments-popular-card">
                        <a href="#" class="card card-row p-5">
                            <img src="./images/hebergements/4_small/aw-creative-VGs8z60yT2c-unsplash.jpg" alt="Chambre lumineuse avec un lit double et deux commodes" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Au coeur de l'eau Chambres d'hôtes</h4>
                                <p class="card-price">Nuit à partir de 71<b>€</b></p>

                                <div class="card-stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star empty"></i>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="lodgments-popular-card">
                        <a href="#" class="card card-row p-5">
                            <img src="./images/hebergements/4_small/febrian-zakaria-sjvU0THccQA-unsplash.jpg" alt="Chambre avec un lit double et deux commodes" class="card-img" />

                            <div class="card-details">
                                <h4 class="card-heading">Hôtel Tout bleu et Blanc</h4>
                                <p class="card-price">Nuit à partir de 68<b>€</b></p>

                                <div class="card-stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star empty"></i>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
        </section>

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