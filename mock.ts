export const SERVICES = [
    // {
    //     name: 'One and a Half Hour Reiki',
    //     desc: 'Ease your stresses and enhance your overall state of being by getting your chakras massaged. This helps to increase your energy flow and reduce any past, present, and future blockages. This drastically improves the rest of your life.',
    //     price: 144,
    // },
    // {
    //     name: 'One and a Half Hour Animal Reiki',
    //     desc: 'Help increase your loved ones comfortability physically and emotionally. This encourages overall friendliness with human & other animal interaction. Not only does this make you and your animal feel better, it creates a more benfical living space too. A pet holds a constant love vibration that you consistetly interact with. Help increase that flow of love in the household!',
    //     price: 144,
    // },
    {
        name: 'One Hour Sound Healing',
        desc: 'Improve your cellular and emotional levels by resonating with sound. Release stresses and traumas that dont align anymore. This promotes a strong communicational foundation.',
        price: 111
    },
    {
        name: 'One Hour Group Sound Healing',
        desc: 'I welcome all of you with open arms to my dojo. The benefit of a group healing opposed to individual is the abundance of foundational healing energy to work with. This generates a much more impactful experience for everyone. If for any reason a member of the group is unable to be present, a virtual experience will be provided during the session. Im honored to travel to you for this. Extra miles incur additional fees.',
        price: 222,
        group: true
    },
    {
        name: 'One Hour Deep Dive Breath Flow',
        desc: 'My intuition carries us towards any benficial areas for you. Of course feel free to point me in a direction that aligns. This can range from breath work to focus training to mantras to finding inner peace and deepening comfortability with oneself.',
        price: 111
    },
    {
        name: 'One Hour Group Deep Dive Breath Flow',
        desc: 'I welcome all of you with open arms to my dojo. We are all connected through energy and consciousness. Utilizing that connection, I navigate us through areas that change everyones lives forever. Group sessions are far more impactful with the huge energetical foundation it brings. Im honored to travel to you for this. Extra miles incur additional fees.',
        price: 222,
        group: true
    },
    {
        name: 'One Hour Tarot Card Reading',
        desc: 'I use a variety of decks to guide you through any spiritual questions. Allow me to be your compass and reflector.',
        price: 111
    },
]

export const FEATUREDPRODUCTS = [
    {
        name: "Draíocht Oil",
        price: 22,
        description: (
            "Cinnamon & rose body garnish. Perfect in ceremony, aides in pain relief."
        ),
        image: "images/draiocht-oils/promo.jpg",
        title: "Draíocht"
    }, {
        name: "Moonlight Elixirs",
        price: 25,
        description: (
            "Bath Blend includes: Rose, Rosemary, Lavender, Cinnamon, Epsom Salt, and Pink Himalayan Salt."
        ),
        image: "images/moonlight-elixirs/aphrodite.jpg",
        title: "Aphrodite"
    }, {
        name: "Faerie Kisses",
        price: 15,
        description: (
            "This Lavender lip balm is full of magic, love, and all natural, organic ingredients."
        ),
        image: "images/faeri-kiss.jpg",
        title: "Faerie Kiss"
    }, 
]

export const PRODUCTS = [
    {
        type: "Moonlight Elixirs",
        products: [
            {
                name: "Desc",
                price: 0,
                description: "These Moonlight Elixirs are made with all natural, organic ingredients. Each one is charged under the full moon and receives a sound bath, infusing it with deep relaxation, love, and magic. This product comes with a mystery crystal hidden inside for a fun surprise! (The single use bags do NOT come with a crystal) Each jar comes with a reusable tea bag for you to pour the product in to help with easy clean up. Each herbal variation holds a different intention.",
                image: ''
            }, {
                name: "Moonlight Elixirs",
                price: 25,
                description: "Lavender, Blue lotus, Hops, Passion flower, Epsom salt, Pink Himalayan Salt (Helps with deep relaxation and sleep)",
                image: "images/moonlight-elixirs/luna.jpg",
                title: "Luna"
            },{
                name: "Moonlight Elixirs",
                price: 25,
                description: "Rose, Rosemary, Lavender, Cinnamon, Epsom Salt, Pink Himalayan Salt (Helps with deep relaxation and creating a romantic atmosphere)",
                image: "images/moonlight-elixirs/aphrodite.jpg",
                title: "Aphrodite"
            }
        ]
    }, {
        type: "Draíocht Oil",
        products: [
            {
                name: "Desc",
                price: 0,
                description: "Draíocht, an Irish word meaning to enchant or be enchanted. These aromatic oils can be used to garnish your body as a daily scent, in ceremony, or as aide in pain relief. Each one contains crystals and herbs relative to the intention of the oil.",
                image: ''
            }, {
                name: "Draíocht Oil",
                price: 22,
                description: "Cinnamon & Rose",
                image: "images/draiocht-oils/cinn-rose.jpg"
            },{
                name: "Draíocht Oil",
                price: 22,
                description: "Rosemary",
                image: "images/draiocht-oils/rosemary.jpg"
            },{
                name: "Draíocht Oil",
                price: 22,
                description: "Lavendar",
                image: "images/draiocht-oils/lavendar.jpg"
            }
        ]
    }, {
        type: "Faerie Kiss Lip Balms",
        products: [
            {
                name: "Desc",
                price: 0,
                description: "This lip balm is full of magic, love, and all natural, organic ingredients. Unlike other brands that have chemical additives causing your lips to become more irritated creating a cycle of dependency on their products, my Faerie Kisses will actually help heal and nourish chapped lips. In other words, you will be using the Faerie kisses everyday because you love it, not because you need it. You can also apply this on dry knuckles and other areas of the skin for nourishing results!",
                image: ''
            }, {
                name: "Faerie Kiss Lip Balm",
                price: 15,
                description: "Lavender",
                image: "images/faeri-kiss.jpg",
            },{
                name: "Faerie Kiss Lip Balm",
                price: 15,
                description: "Peppermint",
                image: "images/faeri-kiss.jpg"
            },{
                name: "Faerie Kiss Lip Balm",
                price: 15,
                description: "Rosemary & Eucalyptus",
                image: "images/faeri-kiss.jpg"
            },{
                name: "Faerie Kiss Lip Balm",
                price: 15,
                description: "Cinnamon",
                image: "images/faeri-kiss.jpg"
            },{
                name: "Faerie Kiss Lip Balm",
                price: 15,
                description: "Palo Santo",
                image: "images/faeri-kiss.jpg"
            }
        ]
    }
];

export const LEARNMORE = [
    {
        title: "Meditation",
        text: "Meditation is an ancient wellness practice that focuses on training self awareness and compassion. In recent years, research has found that meditation can reduce stress, anxiety, depression, addictions, pain management, improve focus and concentration, and increase feelings of calm and relaxation. The good news is anyone can do it, and its a simple practice to pick up, but it will take practice and consistency to feel the benefits.Meditation is about training your sense of self awareness and gaining a healthy perspective. You’re not trying to turn off your thoughts or feelings. You’re learning to observe them without judgment. Eventually, you may start to better understand them as a whole.",
        btnText: "Improve Your Brain"
    }, {
        title: "Sound Healing",
        text: "Sound healing is an ancient practice used to help activate the body’s natural healing system for deep restorative healing on a cellular and emotional level. The harmonizing effect produced by the sound creates a soothing effect throughout the entire body. When different sound vibrations and frequencies are created, it impacts the body and its meridians helping you promote deep relaxation, release emotional trauma, and relieve stress and anxiety. Sound is universal, it is a language that can be understood across all cultures and religions.",
        btnText: "Align Your Vibration"
    }
]