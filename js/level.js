const levels = [

    {
        id: 1,

        name: "Guayarte",

        world: {

            width: 0,
            height: 0

        },

        spawn: {

            x: 100,
            y: 330

        },

        requiredItems: {

            paper: 0,
            plastic: 1,
            metal: 1

        },

        info: {
            title: "ZONA RECUPERADA",
        
            subtitle: "Has ayudado a mantener limpia la plaza Guayarte.",
        
            question: "¿SABÍAS QUE...?",
        
            text: [
                "Guayarte es un espacio cultural",
                "y recreativo ubicado en Guayaquil,",
                "Ecuador. Aquí se realizan actividades",
                "artísticas, gastronómicas y de",
                "entretenimiento para la comunidad."
            ],
        
            image: "assets/info/guayarte.jpg",
        
            tags: [
                "CULTURA",
                "COMUNIDAD",
                "AMBIENTE"
            ]
        },

        background: "assets/backgrounds/guayarte.png",

        showPlatforms: false,

        showContainers: false,

        platforms: [

            {
                name: "Inicio",

                x: 0,
                y: 395,

                width: 450,
                height: 400
            },

            {
                name: "Plat1",

                x: 450,
                y: 520,

                width: 90,
                height: 400
            },

            {
                name: "Plat2",

                x: 540,
                y: 472,

                width: 158,
                height: 400
            },

            {
                name: "Vidrio1",

                class: "hazard",
                damage: 100,

                x: 698,
                y: 585,

                width: 225,
                height: 400
            },

            {
                name: "Bloque1",

                x: 775,
                y: 472,

                width: 70,
                height: 18
            },

            {
                name: "Plat3",

                x: 923,
                y: 438,

                width: 245,
                height: 400
            },

            {
                name: "Plat4",

                x: 1168,
                y: 507,

                width: 145,
                height: 400
            },

            {
                name: "Plat5",

                x: 1168,
                y: 345,

                width: 364,
                height: 18
            },

            {
                name: "Plat6",

                x: 1314,
                y: 540,

                width: 218,
                height: 400
            },

            {
                name: "Vidrio2",

                class: "hazard",
                damage: 100,

                x: 1532,
                y: 590,

                width: 205,
                height: 400
            },

            {
                name: "Plat7",

                x: 1737,
                y: 377,

                width: 500,
                height: 400
            },

            {
                name: "Bloque2",

                x: 1602,
                y: 450,

                width: 72,
                height: 18
            }

        ],

        enemies: [

            {
                name: "Botella1",

                x: 935,
                y: 374,

                width: 48,
                height: 48,

                sprite:"assets/enemies/plastic.png",

                speed: 2,

                direction: 1,

                damage: 10,

                health: 100,
                maxHealth: 100,

                patrolLeft: 935,
                patrolRight: 1160,

                dropItem: "plastic"
            },

            {
                name: "Basura1",

                x: 1198,
                y: 281,

                width: 48,
                height: 48,

                sprite:"assets/enemies/metal.png",

                speed: 1,

                direction: -1,

                damage: 20,

                health: 100,
                maxHealth: 100,

                patrolLeft: 1198,
                patrolRight: 1500,

                dropItem: "metal"
            }

        ],

        containers: [

            {
                type: "plastic",

                x: 1795,
                y: 325,

                width: 40,
                height: 55
            },

            {
                type: "metal",

                x: 1858,
                y: 325,

                width: 40,
                height: 55
            },

            {
                type: "paper",

                x: 1921,
                y: 325,

                width: 40,
                height: 55
            }

        ]

    }

];

let currentLevelIndex = 0;
const lastLevel = 0;

let level = levels[currentLevelIndex];