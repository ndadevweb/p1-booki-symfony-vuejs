function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

const NEIGHBORHOODS = {
    Lyon: [
        'Presqu\'île', 'Vieux Lyon', 'Croix-Rousse', 'Part-Dieu', 'Confluence',
        'Brotteaux', 'Monplaisir', 'Gerland', 'Bellecour', 'Guillotière'
    ],
    Paris: [
        'Montmartre', 'Le Marais', 'Bastille', 'Latin', 'Saint-Germain',
        'Champs-Élysées', 'Belleville', 'Opéra', 'La Villette', 'Bercy'
    ],
    Marseille: [
        'Le Panier', 'Vieux-Port', 'La Joliette', 'Castellane', 'Noailles',
        'Endoume', 'Saint-Victor', 'La Plaine', 'Cinq Avenues', 'Le Rouet'
    ],
    Montpellier: [
        'Écusson', 'Antigone', 'Port Marianne', 'Les Arceaux', 'Celleneuve',
        'Gambetta', 'Beaux-Arts', 'Figuerolles', 'Millénaire', 'Croix d\'Argent'
    ]
};

const CITY_CONFIG = {
    Lyon: { count: 37, imageSource: "images/mock/draft-lyon.png" },
    Paris: { count: 11, imageSource: "images/mock/draft-paris.png" },
    Marseille: { count: 45, imageSource: "images/mock/draft-marseille.png" },
    Montpellier: { count: 39, imageSource: "images/mock/draft-montpellier.png" },
};

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomPrice() {
    return `${Math.floor(Math.random() * 101) + 20}€`
}

function randomRating() {
    return (Math.floor(Math.random() * 5) + 1).toString()
}

function generateLodgementsForCity(city) {
    const { count, imageSource } = CITY_CONFIG[city];
    const neighborhoods = NEIGHBORHOODS[city];
    const lodgements = [];
    for (let i = 0; i < count; i++) {
        const quartier = randomFromArray(neighborhoods);
        const title = `${randomFromArray(['Hôtel', 'Auberge', 'Résidence', 'Studio', 'Appartement', 'Villa', 'Maison'])} ${quartier}`;
        lodgements.push({
            id: uuidv4(),
            url: "",
            imageSource,
            imageTextAlt: "Draft",
            title,
            price: randomPrice(),
            rating: randomRating(),
            filters: randomUniqueFilters()
        });
    }
    return lodgements;
}

function randomUniqueFilters() {
    const possible = [1, 2, 3, 4]
    const count = Math.floor(Math.random() * 4) + 1
    const shuffled = possible
        .slice()
        .sort(() => Math.random() - 0.5)

    return shuffled.slice(0, count)
}

const ALL_LODGEMENTS = {};
Object.keys(CITY_CONFIG).forEach(city => {
    ALL_LODGEMENTS[city] = generateLodgementsForCity(city);
});

const ALL_LODGEMENTS_FLAT = [
    ...ALL_LODGEMENTS.Lyon,
    ...ALL_LODGEMENTS.Paris,
    ...ALL_LODGEMENTS.Marseille,
    ...ALL_LODGEMENTS.Montpellier,
];

const PAGE_SIZE = 6;

export function getLodgementsCityData({ page = 1, location = null } = {}) {
    let city = null;
    let items = [];
    let total = 0;
    let where = "";

    if (location && ALL_LODGEMENTS[location]) {
        city = location;
        const lodgements = ALL_LODGEMENTS[city];
        total = lodgements.length;
        items = lodgements.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
        where = `Hébergements à ${city}`;
    } else if (location && !ALL_LODGEMENTS[location]) {
        city = location
        const lodgements = {}
        total = 0
        items = []
        where = "Aucun hébergement trouvé pour votre recherche"
    } else {
        total = ALL_LODGEMENTS_FLAT.length;
        items = ALL_LODGEMENTS_FLAT.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
        where = "Tous nos hébergements";
    }

    return {
        page,
        items,
        total,
        where,
    };
}

export function fetchLodgementsCityMock({ page = 1, location = null, signal } = {}) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            resolve(getLodgementsCityData({ page, location }));
        }, 3000);
        if (signal) {
            signal.addEventListener('abort', () => {
                clearTimeout(timer);
                reject(new Error('Request aborted'));
            });
        }
    });
}
