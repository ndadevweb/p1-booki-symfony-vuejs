<template>
    <footer class="footer">
        <nav class="container footer-complementary">
            <ul class="footer-complementary-item">
                <li><h4>A propos</h4></li>
                <li><a href="#">Fonctionnement du site</a></li>
                <li><a href="">Conditions générales de vente</a></li>
                <li><a href="">Données et confidentialité</a></li>
            </ul>

            <ul class="footer-complementary-item">
                <li><h4>Nos hébergements</h4></li>
                <li><a href="">Charte qualité</a></li>
                <li><a href="">Soumettre votre hôtel</a></li>
            </ul>

            <ul class="footer-complementary-item">
                <li><h4>Assistance</h4></li>
                <li><a href="">Centre d'aide</a></li>
                <li><a href="">Nous contacter</a></li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
.footer {
    min-height: 218px;
    margin-top: 60px;
    padding-top: 45px;
    background: var(--color-tertiary);
}

.footer-complementary {
    display: flex;
    flex-direction: row;
}

.footer-complementary-item {
    width: calc(100% / 3);
}

.footer-complementary-item li {
    margin-bottom: 15px;
}

.footer-complementary-item a {
    color: var(--color-text-two);
    font: 500 15px var(--font-family);
    transition: .25s;
}

.footer-complementary-item a:hover {
    color: var(--color-primary);
}

.footer-complementary-item h4 {
    margin-bottom: 5px;
    font: 700 18px var(--font-family);
}
</style>