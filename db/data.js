
const castles = [
    {
        "name": "Sleeping Beauty Castle",
        "imageUrl": "http://www.miceshots.com/usr/67/03-02-15-DSC_2448.jpg",
        "size": 50000,
        "location": "United States",
        "price": 1500000,
        "amenitites": {
            "window": 20, 
            "room": 10, 
            "prince": 1
        },
        "description": "Sleeping Beauty Castle is a fairy tale castle at the center of Disneyland and Hong Kong Disneyland. It is based on the late-19th century Neuschwanstein Castle in Bavaria, Germany.",
        "historyLink": "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle",
        "category": ["Disney", "Magic", "Princess"]
    },
    {
        "name": "Hogwarts School of Witchcraft and Wizardry",
        "imageUrl": "http://o.aolcdn.com/hss/storage/midas/ce16e49e6d36c7140d80e8d3d0d5e94f/203657234/Hogwarts+Castle+lights-WWoHP+at+USH.jpg",
        "size": 30000,
        "location": "Scotland",
        "price": 4000000,
        "description": "Hogwarts School of Witchcraft and Wizardry is the Scottish wizarding school, located in the Highlands of Scotland. It takes students from Scotland, England, Ireland, Northern Ireland and Wales. The castle is located in the mountains near a loch. The precise location of the school could never be uncovered because it was rendered Unplottable. To Muggles the school looks like an old abandoned castle.",
        "historyLink": "http://harrypotter.wikia.com/wiki/Hogwarts_School_of_Witchcraft_and_Wizardry",
        "category": ["Magic", "School", "Wizards", "Witches"]
    },
    {
        "name": "Castle Black",
        "imageUrl": "http://vignette2.wikia.nocookie.net/gameofthrones/images/7/7b/Castle_Black.jpg/revision/latest/scale-to-width-down/270?cb=20110920111941",
        "size": 10000,
        "location": "Northern end of the Kingsroad",
        "price": 1000000,
        "description": "Castle Black is the primary headquarters and redoubt of the Night's Watch. It is located roughly halfway along the length of the Wall on its southern side, at the northern end of the Kingsroad. It is a dark and chilling home to its garrison. Castle Black is one of only three manned castles left on the Wall along with Eastwatch-by-the-Sea and The Shadow Tower. There are nineteen castles along the Wall, but as their numbers fell over the centuries the Night's Watch had to abandon sixteen of them. Castle Black is located between the unmanned castles of Queensgate and Oakensheild.",
        "historyLink": "http://gameofthrones.wikia.com/wiki/Castle_Black",
        "category": ["Freezing", "John Snow"]
    },
    {
        "name": "Howl's Moving Castle",
        "imageUrl": 
            "https://ladygeekgirl.files.wordpress.com/2013/06/howls_moving_castle_artwork_prop_10.jpg",
        "size": 25250,
        "location": "anywhere",
        "price": 5126000,
        "amenities": {
            "windows": "varies",
            "turrets": "varies",
            "princes": 0,
            "unicorns": 0,
            "rooms": "varies"
        },
        "description": "Howl's castle is a tall, black building with four thin turrets. It seems to be made of blocks of coal (a suitable habitat for a fire demon) and is \"bespelled to hold together.\" It has four doors on the outside, although three are made inaccessible by an invisible wall.",
        "historyLink": "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle#Howl.27s_moving_castle",
        "category": ["Fire Demons", "Moves"]
    },
    {
        "name": "Hohenschwangau Castle",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hohenschwangau_von_Neuschwanstein1.jpg",
        "size": 25000,
        "location": "Germany",
        "price": 1500000,
        "amenitites": {
            "window": 25, 
            "room": 15, 
            "prince": 0
        },
        "description": "Hohenschwangau Castle is a 19th-century palace in southern Germany. It was the childhood residence of King Ludwig II of Bavaria and was built by his father, King Maximilian II of Bavaria. It is located in the German village of Hohenschwangau near the town of Füssen, part of the county of Ostallgäu in southwestern Bavaria, Germany, very close to the border with Austria.",
        "historyLink": "https://en.wikipedia.org/wiki/Hohenschwangau_Castle",
        "category": ["Historical"]
    },
    {
        "name": "Guimarães Castle",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Castelo_de_Guimar%C3%A3es_Castelo_da_Funda%C3%A7%C3%A3o.JPG",
        "size": 5000,
        "location": "Portugual",
        "price": 1100000,
        "amenitites": {
            "window": 15, 
            "room": 15, 
            "prince": 0
        },
        "description": "Guimarães Castle is the principal medieval castle in the municipality Guimarães, in the northern region of Portugal. It was built under the orders of Mumadona Dias in the 10th century to defend the monastery from attacks by Moors and Norsemen.",
        "historyLink": "https://en.wikipedia.org/wiki/Guimar%C3%A3es_Castle",
        "category": ["Military"]
    },
    {
        "name": "Lord of The Rings Castle",
        "imageUrl":
            "https://i.kinja-img.com/gawker-media/image/upload/s--3RLBRWl0--/c_scale,fl_progressive,q_80,w_800/1228896838095134565.jpg",
        "size": 25250,
        "location": "England",
        "price": 5888000,
        "amenitites": ['window', 'room', 'prince'],
        "description": "Howl's castle is a tall, black building with four thin turrets. It seems to be made of blocks of coal (a suitable habitat for a fire demon) and is \"bespelled to hold together.\" It has four doors on the outside, although three are made inaccessible by an invisible wall.",
        "historyLink": "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle#Howl.27s_moving_castle",
        "category": ["Fire Demons", "Moves"]
    },
    {
        "name": "Dracula Castle",
        "imageUrl":
            "http://www.bran-castle.com/assets/castle/02-full.jpg",
        "size": 25250,
        "location": "Romania",
        "price": 8888000,
        "amenitites": ["window", "room", "prince"],
        "description": "Howl's castle is a tall, black building with four thin turrets. It seems to be made of blocks of coal (a suitable habitat for a fire demon) and is \"bespelled to hold together.\" It has four doors on the outside, although three are made inaccessible by an invisible wall.",
        "historyLink": "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle#Howl.27s_moving_castle",
        "category": ["Fire Demons", "Moves"]
    },
    {
        "name": "Elsa's Ice Palace",
        "location": "Norway",
        "imageUrl": "https://s-media-cache-ak0.pinimg.com/564x/9c/03/57/9c0357de9130217ece6ffc58fae49332.jpg",
        "size": 30000,
        "price": 400000,
        "amenities": ["Free ice"],
        "description": "Elsa's Ice Palace was created by Elsa the Snow Queen in the 2013 Disney animated film Frozen, during the sequence of \"Let It Go\" on the North Mountain. This palace was where she was supposed to live in isolation in order to protect people from her so that she can be safe from getting into trouble. The menacing snowman and Elsa's personal guard, Marshmallow and the snowgies, live in the palace after Elsa vacated it.",
        "historyLink": "https://s-media-cache-ak0.pinimg.com/564x/9c/03/57/9c0357de9130217ece6ffc58fae49332.jpg",
        "category": ["Ice","Blue","Pricess"]
    }
]

    //users

const users = [
    {
        "firstName": "Aurore",
        "lastName": "Disney",
        "email": "aurore@disney.com",
        "username": "sleepyhead",
        "address": "1234 disneyway, anaheim, CA 91745",
        "password": "1234"
    },
    {
        "firstName": "Sophie",
        "lastName": "Howl",
        "email": "sophie.howl@gmail.com",
        "username": "sophie",
        "address": "5 Hanover Sq, New York City, NY, 10004",
        "password": "password"
    },
    {
        "firstName": "William",
        "lastName": "the Conqueror",
        "email": "wtc@gmail.com",
        "username": "theconqueror",
        "address": "Weberstr. 2 53113 BONN 1 GERMANY",
        "password": "321"
    },
    {
        "firstName": "Senhor Carlos",
        "lastName": "Manuel Pereira",
        "email": "carlos@gmail.com",
        "username": "scmp",
        "address": "Av das A’Augsa Livres Monte Trigo 7220 PORTEL PORTUGAL",
        "password": "1111"
    },
    {
        "firstName": "Gaston",
        "lastName": "Yuck",
        "email": "gaston@yuck.com",
        "username": "hairy",
        "address": "2230 disneyway, anaheim, CA 91745",
        "password": "123"
    }, 
    {
        "firstName": "Sebastian",
        "lastName": "UnderDaSea",
        "email": "seb@sea.com",
        "username": "crabby",
        "address": "9999 disneyway, anaheim, CA 91745",
        "password": "dasea"
    },
    {
        "firstName": "Edward",
        "lastName": "Snowden",
        "email": "snowden@nsa.org",
        "username": "notatraitor",
        "address": "1234 ex, Moscow, Russia 12345",
        "password": "1234"
    },
    {
        "firstName": "Hillary",
        "lastName": "Rodham",
        "email": "hillary@gmail.com",
        "username": "thehillary",
        "address": "123 Madison Ave, New York City, NY, 10004",
        "password": "3455"
    }
]


    //orders
// const orders = [
//     {
//         "date": "1/1/2016",
//         "shippingAddress": "1234 disneyway, anaheim, CA 91745"

//     },
//     {
//         "date": "10/31/2016",
//         "discountCode": "HALOWEEN",
//         "discountRate": "10",
//         "shippingAddress": "5 Hanover Sq., New York City, NY, 10004"
//     },
//     {
//         "date": "2016-11-08:11:00",
//         "discountCode": "",
//         "discountRate": "",
//         "shippingAddress": "Av das A’Augsa Livres Monte Trigo 7220 PORTEL PORTUGAL"
//     },
//     {
//         "date": "2016-11-08:11:00",
//         "discountCode": "",
//         "discountRate": "",
//         "shippingAddress": "Weberstr. 2 53113 BONN 1 GERMANY"
//     }
// ]
    //reviews + memories
const reviews = [
    {
        "content": "Beautiful castle in the happiest place on Earth!",
        "star": 5,
        "date": "2015-12-12",
        "subject": "AWESOME!"
    },
    {
        "content": "Very great castle",
        "star": 1,
        "date": "2016-10-31",
        "subject": "Great castle"
    },
    {
        "content": "The castle is great for family bonding, friendsgiving, and many more activities",
        "star": 5,
        "date": "2016-10-30",
        "subject": "Great castle"
    }, 
    {
        "content": "The castle's structure needs a bit more work.",
        "star": 3,
        "date": "2016-11-08",
        "subject": "Structure is questionable"
    },
    {
        "content": "Loved the towers, hated the rocks. Can I get a squishier castle please?",
        "star": 2,
        "date": "2015-06-18",
        "subject": "Too medieval"
    }, 
    {
        "content": "Umm I was told that there would be knights present? So disappointing....",
        "star": 3,
        "date": "2014-04-11",
        "subject": "Not medieval enough"
    },
    {
        "content": "I wish I could live here!",
        "star": 5,
        "date": "2016-11-1",
        "subject": "Love This Castle!",
        'castle_id': 2,
    },
    {
        "content": "I don't know what i'm supposed to do tonight but I'm sure it's not this!",
        "star": 2,
        "date": "2015-12-21",
        "subject": "Love and Hate!",
        'castle_id': 1
    }
]


module.exports = {castles,reviews,users}
//need to add orders and create orders model