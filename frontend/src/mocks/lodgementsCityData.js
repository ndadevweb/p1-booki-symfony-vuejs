// function uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
//         const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
//         return v.toString(16)
//     })
// }

// const TITLES = [
//     'Auberge du Vieux Port',
//     'Hôtel Bleu',
//     'Le Panier Secret',
//     'Chez Amina',
//     'Les Mouettes',
//     'Villa Marine',
//     'Le Canebière Chic',
//     'Studio Central',
//     'Résidence du Sud',
//     'Maison Calanques',
//     'Petit Coin Bleu',
//     'Appartement Lumière',
//     'Chambre Soleil',
//     'Suite Méditerranée',
//     'Oasis Marseille'
// ]

// function randomTitle() {
//     const t = TITLES[Math.floor(Math.random() * TITLES.length)]

//     return t
// }

// function randomPrice() {
//     return `${Math.floor(Math.random() * 101) + 20}€`
// }

// function randomRating() {
//     return (Math.floor(Math.random() * 5) + 1).toString()
// }

// function generateLodgements() {
//     const lodgements = []
//     let count = 0
//     for (let page = 1; page <= 5; page++) {
//         const nb = (page < 5) ? 6 : 4
//         for (let i = 0; i < nb; i++) {
//             count++
//             lodgements.push({
//                 id: uuidv4(),
//                 url: "",
//                 imageSource: "/draft750x500.png",
//                 imageTextAlt: "Draft",
//                 title: randomTitle(),
//                 price: randomPrice(),
//                 rating: randomRating()
//             })
//         }
//     }
//     return lodgements
// }

// const lodgementsCityRaw = generateLodgements()
// const PAGE_SIZE = 6

// export function getLodgementsCityData(page = 1, location = "Marseille") {
//     const total = lodgementsCityRaw.length
//     const startIndex = (page - 1) * PAGE_SIZE
//     const items = lodgementsCityRaw.slice(startIndex, startIndex + PAGE_SIZE)
//     return {
//         page,
//         items,
//         location: `Hébergements à ${location}`,
//         total
//     }
// }

// export function fetchLodgementsCityMock({ page = 1, location = "Marseille", signal } = {}) {
//     return new Promise((resolve, reject) => {
//         const timer = setTimeout(() => {
//             resolve(getLodgementsCityData(page, location))
//         }, 1500)
//         if (signal) {
//             signal.addEventListener('abort', () => {
//                 clearTimeout(timer)
//                 reject(new Error('Request aborted'))
//             })
//         }
//     })
// }


// V2
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
        });
    }
    return lodgements;
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
