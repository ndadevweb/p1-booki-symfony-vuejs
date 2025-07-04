const LODGEMENTS = {
  Paris: [
    {
      id: "paris1",
      url: "",
      imageSource: "images/mock/draft-paris.png",
      imageTextAlt: "Draft Paris",
      title: "Hôtel Montmartre",
      price: "120€",
      rating: "5"
    },
    {
      id: "paris2",
      url: "",
      imageSource: "images/mock/draft-paris.png",
      imageTextAlt: "Draft Paris",
      title: "Auberge du Marais",
      price: "105€",
      rating: "5"
    },
    {
      id: "paris3",
      url: "",
      imageSource: "images/mock/draft-paris.png",
      imageTextAlt: "Draft Paris",
      title: "Résidence Belleville",
      price: "135€",
      rating: "5"
    }
  ],
  Lyon: [
    {
      id: "lyon1",
      url: "",
      imageSource: "images/mock/draft-lyon.png",
      imageTextAlt: "Draft Lyon",
      title: "Villa Croix-Rousse",
      price: "110€",
      rating: "5"
    },
    {
      id: "lyon2",
      url: "",
      imageSource: "images/mock/draft-lyon.png",
      imageTextAlt: "Draft Lyon",
      title: "Hôtel Bellecour",
      price: "98€",
      rating: "5"
    },
    {
      id: "lyon3",
      url: "",
      imageSource: "images/mock/draft-lyon.png",
      imageTextAlt: "Draft Lyon",
      title: "Auberge Presqu'île",
      price: "87€",
      rating: "5"
    }
  ],
  Marseille: [
    {
      id: "marseille1",
      url: "",
      imageSource: "images/mock/draft-marseille.png",
      imageTextAlt: "Draft Marseille",
      title: "Hôtel Vieux-Port",
      price: "125€",
      rating: "5"
    },
    {
      id: "marseille2",
      url: "",
      imageSource: "images/mock/draft-marseille.png",
      imageTextAlt: "Draft Marseille",
      title: "Auberge Le Panier",
      price: "75€",
      rating: "5"
    },
    {
      id: "marseille3",
      url: "",
      imageSource: "images/mock/draft-marseille.png",
      imageTextAlt: "Draft Marseille",
      title: "Résidence Joliette",
      price: "95€",
      rating: "5"
    }
  ],
  Montpellier: [
    {
      id: "montpellier1",
      url: "",
      imageSource: "images/mock/draft-montpellier.png",
      imageTextAlt: "Draft Montpellier",
      title: "Hôtel Antigone",
      price: "119€",
      rating: "5"
    },
    {
      id: "montpellier2",
      url: "",
      imageSource: "images/mock/draft-montpellier.png",
      imageTextAlt: "Draft Montpellier",
      title: "Auberge Écusson",
      price: "88€",
      rating: "5"
    },
    {
      id: "montpellier3",
      url: "",
      imageSource: "images/mock/draft-montpellier.png",
      imageTextAlt: "Draft Montpellier",
      title: "Résidence Les Arceaux",
      price: "102€",
      rating: "5"
    }
  ]
}

const GLOBAL_LODGEMENTS = [
  LODGEMENTS.Paris[0],
  LODGEMENTS.Lyon[1],
  LODGEMENTS.Marseille[2]
]

export function getLodgementsPopularData({ location = null } = {}) {
  if (location && LODGEMENTS[location]) {
    return {
      items: LODGEMENTS[location],
      total: LODGEMENTS[location].length
    }
  }
  if (!location || location.trim() === '') {
    return {
      items: GLOBAL_LODGEMENTS,
      total: GLOBAL_LODGEMENTS.length
    }
  }

  return { items: [], total: 0 }
}

export function fetchLodgementsPopularMock({ location = null, signal } = {}) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve(getLodgementsPopularData({ location }))
    }, 2000)
    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timer)
        reject(new Error('Request aborted'))
      })
    }
  })
}
