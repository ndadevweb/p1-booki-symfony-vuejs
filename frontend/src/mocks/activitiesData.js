const IMAGES_URL = import.meta.env.VITE_API_IMAGES_URL

const ACTIVITIES = {
    paris: [
        {
            id: "activity-paris1", customClass: "card-full", url: "", imageSource: IMAGES_URL+"/mock/draft-paris.png", imageTextAlt: "Activity Paris", title: "Tour Eiffel"
        },
        {
            id: "activity-paris2", customClass: "card-medium-2", url: "", imageSource: IMAGES_URL+"/mock/draft-paris.png", imageTextAlt: "Activity Paris", title: "Musée du Louvre"
        },
        {
            id: "activity-paris3", customClass: "card-small-1", url: "", imageSource: IMAGES_URL+"/mock/draft-paris.png", imageTextAlt: "Activity Paris", title: "Montmartre & Sacré-Cœur"
        },
        {
            id: "activity-paris4", customClass: "card-full", url: "", imageSource: IMAGES_URL+"/mock/draft-paris.png", imageTextAlt: "Activity Paris", title: "Croisière sur la Seine"
        },
        {
            id: "activity-paris5", customClass: "card-small-2", url: "", imageSource: IMAGES_URL+"/mock/draft-paris.png", imageTextAlt: "Activity Paris", title: "Jardin du Luxembourg"
        },
        {
            id: "activity-paris6", customClass: "card-medium-1", url: "", imageSource: IMAGES_URL+"/mock/draft-paris.png", imageTextAlt: "Activity Paris", title: "Champs-Élysées"
        }
    ],
    lyon: [
        {
            id: "activity-lyon1", customClass: "card-full", url: "", imageSource: IMAGES_URL+"/mock/draft-lyon.png", imageTextAlt: "Activity Lyon", title: "Basilique de Fourvière"
        },
        {
            id: "activity-lyon2", customClass: "card-medium-2", url: "", imageSource: IMAGES_URL+"/mock/draft-lyon.png", imageTextAlt: "Activity Lyon", title: "Vieux Lyon & Traboules"
        },
        {
            id: "activity-lyon3", customClass: "card-small-1", url: "", imageSource: IMAGES_URL+"/mock/draft-lyon.png", imageTextAlt: "Activity Lyon", title: "Parc de la Tête d’Or"
        },
        {
            id: "activity-lyon4", customClass: "card-full", url: "", imageSource: IMAGES_URL+"/mock/draft-lyon.png", imageTextAlt: "Activity Lyon", title: "Musée des Confluences"
        },
        {
            id: "activity-lyon5", customClass: "card-small-2", url: "", imageSource: IMAGES_URL+"/mock/draft-lyon.png", imageTextAlt: "Activity Lyon", title: "Mur des Canuts"
        },
        {
            id: "activity-lyon6", customClass: "card-medium-1", url: "", imageSource: IMAGES_URL+"/mock/draft-lyon.png", imageTextAlt: "Activity Lyon", title: "Place Bellecour"
        }
    ],
    marseille: [
        {
            id: "activity-marseille1", customClass: "card-full", url: "", imageSource: IMAGES_URL+"/mock/draft-marseille.png", imageTextAlt: "Activity Marseille", title: "Vieux Port"
        },
        {
            id: "activity-marseille2", customClass: "card-medium-2", url: "", imageSource: IMAGES_URL+"/mock/draft-marseille.png", imageTextAlt: "Activity Marseille", title: "Fort de Pomègues"
        },
        {
            id: "activity-marseille3", customClass: "card-small-1", url: "", imageSource: IMAGES_URL+"/mock/draft-marseille.png", imageTextAlt: "Activity Marseille", title: "Îles du Frioul"
        },
        {
            id: "activity-marseille4", customClass: "card-full", url: "", imageSource: IMAGES_URL+"/mock/draft-marseille.png", imageTextAlt: "Activity Marseille", title: "Parc National des Calanques"
        },
        {
            id: "activity-marseille5", customClass: "card-small-2", url: "", imageSource: IMAGES_URL+"/mock/draft-marseille.png", imageTextAlt: "Activity Marseille", title: "Parc National des Calanques"
        },
        {
            id: "activity-marseille6", customClass: "card-medium-1", url: "", imageSource: IMAGES_URL+"/mock/draft-marseille.png", imageTextAlt: "Activity Marseille", title: "Parc Longchamps"
        }
    ],
    montpellier: [
        {
            id: "activity-montpellier1", customClass: "card-full", url: "", imageSource: IMAGES_URL+"/mock/draft-montpellier.png", imageTextAlt: "Activity Montpellier", title: "Place de la Comédie"
        },
        {
            id: "activity-montpellier2", customClass: "card-medium-2", url: "", imageSource: IMAGES_URL+"/mock/draft-montpellier.png", imageTextAlt: "Activity Montpellier", title: "Jardin des Plantes"
        },
        {
            id: "activity-montpellier3", customClass: "card-small-1", url: "", imageSource: IMAGES_URL+"/mock/draft-montpellier.png", imageTextAlt: "Activity Montpellier", title: "Musée Fabre"
        },
        {
            id: "activity-montpellier4", customClass: "card-full", url: "", imageSource: IMAGES_URL+"/mock/draft-montpellier.png", imageTextAlt: "Activity Montpellier", title: "Promenade du Peyrou"
        },
        {
            id: "activity-montpellier5", customClass: "card-small-2", url: "", imageSource: IMAGES_URL+"/mock/draft-montpellier.png", imageTextAlt: "Activity Montpellier", title: "Plage du Grand Travers"
        },
        {
            id: "activity-montpellier6", customClass: "card-medium-1", url: "", imageSource: IMAGES_URL+"/mock/draft-montpellier.png", imageTextAlt: "Activity Montpellier", title: "Cathédrale Saint-Pierre"
        }
    ]
}

const GLOBAL_ACTIVITIES = [
    ...ACTIVITIES.paris,
    ...ACTIVITIES.lyon,
    ...ACTIVITIES.marseille,
    ...ACTIVITIES.montpellier
]

const CLASS_ORDER = [
    "card-full",
    "card-medium-2",
    "card-small-1",
    "card-full",
    "card-small-2",
    "card-medium-1"
]

function shuffleArray(arr) {
    return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

function capitalize(str) {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// export function getActivitiesData({ location = null } = {}) {
//     if (location && ACTIVITIES[location.toLowerCase()]) {
//         return {
//             title: `Activités à ${capitalize(location)}`,
//             items: ACTIVITIES[location.toLowerCase()]
//         }
//     }

//     if (location && !ACTIVITIES[location.toLowerCase()]) {
//         return {
//             title: "Aucune activité trouvée pour votre recherche",
//             items: []
//         }
//     }

//     return {
//         title: "Activités de toutes les villes",
//         items: shuffleArray(GLOBAL_ACTIVITIES)
//     }
// }
export function getActivitiesData({ location = null } = {}) {
    if (location && ACTIVITIES[location.toLowerCase()]) {
        return {
            title: `Activités à ${capitalize(location)}`,
            items: ACTIVITIES[location.toLowerCase()]
        }
    }

    if (location && !ACTIVITIES[location.toLowerCase()]) {
        return {
            title: "Aucune activité trouvée pour votre recherche",
            items: []
        }
    }

    let shuffled = shuffleArray(GLOBAL_ACTIVITIES).slice(0, 6)
    shuffled = shuffled.map((activity, idx) => ({
        ...activity,
        customClass: CLASS_ORDER[idx] || activity.customClass
    }))

    return {
        title: "Activités de toutes les villes",
        items: shuffled
    }
}

export function fetchActivitiesMock({ location = null, signal } = {}) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            resolve(getActivitiesData({ location }))
        }, 2000)
        if (signal) {
            signal.addEventListener('abort', () => {
                clearTimeout(timer)
                reject(new Error('Request aborted'))
            })
        }
    })
}