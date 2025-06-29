<template>
    <nav class="navigation">
        <ul>
            <li><a href="#hebergements" class="navigation-active">Hébergements</a></li>
            <li><a href="#activites">Activités</a></li>
        </ul>
    </nav>
</template>

<style scoped>
.navigation {
    position: absolute;
    right: 20px;
    width: 315px;
}

.navigation ul {
    display: flex;
    justify-content: space-around;
}

.navigation a {
    display: block;
    padding: 45px 25px 0 25px;
    min-height: 80px;
    border-top: 3px solid transparent;
    color: #000;
    font-weight: 500;
    text-align: center;
    transition: .25s;
}

.navigation .navigation-active,
.navigation a:hover {
    border-top: 3px solid var(--color-primary);
    color: var(--color-primary);
}
</style>