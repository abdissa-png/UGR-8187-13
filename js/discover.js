let artAndMusic = [{
    type: "image",
    content: ["St George.jpg", "The painting of St.George"],
    description: "Ethiopian Orthodox Church art is characterized by its unique blend of Christian and African influences, featuring iconic symbols, intricate patterns, and vivid colors. It includes illuminated manuscripts, crosses, icons, and church architecture."

}, {
    type: "image",
    content: ["bodyArt.jpg", "body art"],
    description: "Hamer people are known for their body art, which includes intricate scarification patterns and body painting, typically done by women. These designs symbolize different aspects of Hamer culture and are used for cultural and religious events and rituals."
}, {
    type: "audio",
    content: ["Benishangul_Gumz_Traditional_Music.mp3", "Benishangul Gumz Traditional Music"],
    description: "Benishangul-Gumuz music is traditional music characterized by its use of drums, horns, and string instruments. The music is typically played during cultural and religious events and rituals, and is known for its unique rhythms and melodies."
}, {
    type: "audio",
    content: ["Classical Ethiopian Flute.mp3", "Ethiopian flute music"],
    description: "Ethiopian flute music is a traditional music that is characterized by its use of flutes, typically made of bamboo, played alone or in ensemble with other instruments. The flutes are often accompanied by drums, percussion, and string instruments."
}];
let artAndMusicIndex = 0;
let peoples = [{
    type: "image",
    content: ["afar.jpg", "The people of Afar"],
    description: "The Afar, also known as the Danakil, are a semi-nomadic ethnic group primarily located in the Horn of Africa. They are known for their traditional pastoralist lifestyle and complex clan-based social structure."

}, {
    type: "image",
    content: ["Hamer.jpg", "The people of Hamer"],
    description: "The Hamer, also known as the Hamar, are an ethnic group primarily located in the Omo River valley in southern Ethiopia. They are known for their unique bull jumping ceremony and their traditional semi-nomadic lifestyle based on cattle herding."

}, {
    type: "image",
    content: ["gada.jpg", "the oromo people"],
    description: "The Gada system is a traditional political, economic and social system of the Oromo people in Ethiopia. It is a form of democratic governance that involves age-graded men's councils and is based on principles of equality and mutual aid."
}];
let peoplesIndex = 0;
let culture = [{
    type: "image",
    content: ["irreechaa.jpg", "the irreechaa celebrations"],
    description: "Irreechaa is an important annual religious festival of the Oromo people in Ethiopia. It is celebrated in honor of Waaqa, the Oromo god, and is marked by traditional dances, rituals and the sharing of food and drinks. It is celebrated in the month of October."
}, {
    type: "image",
    content: ["gifata.jpg", "The gifata celebrations"],
    description: "Gifaata or Gifaataa is a cultural festival celebrated by the Wolayta people in the Southern Region of Ethiopia. This festival is celebrated each year in September. In this celebration, the Wolayta accept the New Year and send off the old one. Gifaata means 'the begining' and is also considered the bridge from dark to light."
}, {
    type: "image",
    content: ["fichee-chambalaalla.jpg", "the fichee chambalaalla celebrations"],
    description: "Fichee Chambalaalla is a traditional religious festival celebrated by the Sidama people of Ethiopia. It is a three-day event that is celebrated annually on September 7th, 8th and 9th. The festival is celebrated to honor the spirits of the ancestors who are believed to protect the living and ensure a bountiful harvest."
}, {
    type: "image",
    content: ["ashenda.jpg", "The ashenda celebrations"],
    description: "Ashenda is an annual cultural festival of the Tigray people in Ethiopia, celebrated by young girls, marked by traditional dances, singing, and the wearing of traditional dresses, it is usually celebrated in August, it's a way of celebrating the end of fasting season of the Ethiopian Orthodox Church."
}];
let cultureIndex = 0;
let nature = [{
    type: "image",
    content: ["dalol.jpg", "Sulphur fields in Dalol"],
    description: "Dalol, also known as 'The Danakil Depression', is a desert area located in northeastern Ethiopia, known for its extreme heat, salt mines and unique geological formations. It is a popular destination for adventure tourists and for scientific research.",

}, {
    type: "image",
    content: ["highlands.jpg", "The highlands of Ethiopia"],
    description: "The highlands of Ethiopia are a mountainous region located in the central and northern part of the country, characterized by its rugged terrain, diverse climate and rich cultural heritage, including historic monasteries, ancient churches, and traditional villages."

}, {
    type: "image",
    content: ["grasslands.jpg", "The grasslands of Ethiopia"],
    description: "The grasslands of Ethiopia are a vast area of rolling hills, savannahs, and open woodlands, located mainly in the southern and southwestern parts of the country. They are home to diverse wildlife and pastoralist communities, and are known for their traditional practices of cattle herding and pastoralism."

}, {
    type: "image",
    content: ["omovalley.jpg", "The omo valley"],
    description: "The Omo Valley is a region located in the southern part of Ethiopia, known for its diverse ethnic groups, such as the Hamer, Mursi, and Karo, as well as its unique cultural practices, such as body painting and ritual scarification. It is also an important area for archeological research and a popular tourist destination."
}];
let natureIndex = 0;
let outdoor = [{
    type: "image",
    content: ["camping.jpg", "Camping Activity"],
    description: "Camping in Ethiopia offers a chance to explore diverse landscapes, from rugged mountains to lush forests. Enjoy hiking, bird watching, and cultural encounters with local tribes."

}, {
    type: "image",
    content: ["water park.jpg", "water park activities"],
    description: "Kuriftu water park is a recreational area featuring various water rides, slides, and pools for visitors to enjoy. It is a great place for families to have fun and beat the heat."

}, {
    type: "image",
    content: ["entotoPark.jpg", "Activities in Entoto park"],
    description: "Entoto park is a large, scenic park located in the city of Addis Ababa, Ethiopia. It features hiking trails, picnic areas, and a panoramic view of the city. It is a great place for a relaxing day out and to enjoy nature."

}];
let outdoorIndex = 0;
let events = [{
    type: "image",
    content: ["buildexpo.jpg", "Build expo logo"],
    description: "Build expo is a trade fair for the building and construction industry, showcasing the latest products, technologies and services from manufacturers and suppliers. It is a great event for professionals and companies in the field to network and discover new developments."
}, {
    type: "image",
    content: ["great ethiopian run.jpg", "Great Ethiopian Run"],
    description: "The Great Ethiopian Run is an annual international 10K road race held in Addis Ababa, Ethiopia. It attracts thousands of runners from around the world and is known for its scenic route and lively atmosphere. It is one of the biggest running event in Africa."
}];
let eventsIndex = 0;
let floraAndFauna = [{
    type: "image",
    content: ["nyala.jpg", "The mountain Nyala"],
    description: "Nyala is a species of antelope that is native to the grasslands and woodlands of Ethiopia. They are known for their spiral horns, which are longer in males, and their reddish-brown fur with white stripes. They are also known for their grace and beauty."

}, {
    type: "image",
    content: ["walia.jpg", "Walia Ibex"],
    description: "Walia is an endangered species of ibex. It is sometimes considered a subspecies of the Alpine ibex. Threats against the species include habitat loss, poaching, and restricted range; only about 500 individuals survived in the mountains of Ethiopia, concentrated in the Semien Mountains, largely due to past poaching and habitat depletion."
}, {
    type: "image",
    content: ["red fox.jpg", "the Ethiopian Red Wolves"],
    description: "Simien fox, is a canine native to the Ethiopian Highlands. In southeastern Ethiopia it is also known as the horse jackal. It is similar to the coyote in size and build, and is distinguished by its long and narrow skull, and its red and white fur."

}, {
    type: "image",
    content: ["geladababoon.jpg", "The gelada baboon"],
    description: "Gelada  sometimes called the bleeding-heart monkey or the gelada baboon, is a species of Old World monkey found only in the Ethiopian Highlands, living at elevations of 1,800–4,400 m (5,900–14,400 ft) above sea level."

}];
let floraAndFaunaIndex = 0;
let heritage = [{
    type: "image",
    content: ["Gonder.jpg", "The castles of gonder"],
    description: "Gondar, also spelled Gonder, is a city in the Amhara region of Ethiopia. It was the capital of the Ethiopian Empire from the 17th to the 19th century and is known for its well-preserved medieval castles and palaces."

}, {
    type: "image",
    content: ["harar.jpg", "the jegol wall"],
    description: "Harar is a city in eastern Ethiopia, known for its well-preserved medieval Islamic architecture and culture. It is the fourth holiest city in Islam and has been a center of Islamic learning for centuries."

}, {
    type: "image",
    content: ["lalibela.jpg", "Rock hewn churches of lalibela"],
    description: "Lalibela is a town in northern Ethiopia, known for its rock-hewn churches dating back to the 12th century. These churches, carved out of solid rock, are considered some of the most impressive architectural wonders of the medieval world."

}, {
    type: "image",
    content: ["tiya monolithic statues.jpg", "tiya monolithic statues.jpg"],
    description: "Tiya is an archaeological site located in the southern region of Ethiopia, known for its collection of ancient monolithic stelae, or standing stones. The site is believed to date back to the 14th century."

}];
let heritageIndex = 0;
let numOfObjects = 3;
window.addEventListener("resize", () => {
    if (window.innerWidth < 930) {
        numOfObjects = 1;
        loadScreen();
    } else if (window.innerWidth <= 1120) {
        numOfObjects = 2;
        loadScreen();

    } else if (window.innerWidth > 1120) {
        numOfObjects = 3;
        loadScreen();
    }
})

function loadObjects(object, index, containerId) {
    container = document.getElementById(containerId);
    container.innerHTML = "";
    index = index % object.length;
    for (let i = index; i < index + numOfObjects; i++) {
        if (object[i % object.length].type == "image") {
            division = document.createElement("figure");
            //division.className = "figureObject"
            division.className = "figure__grid"
            image = document.createElement("img");
            //image.className = "gridImages"
            image.className = "figure__img"
            image.src = "images/discover/" + object[i % object.length].content[0];
            image.alt = object[i % object.length].content[1];
            article = document.createElement("p");
            article.className = "figure__paragraph"
            article.innerHTML = object[i % object.length].description;
            division.appendChild(image);
            division.appendChild(article);
            container.appendChild(division);
        } else if (object[i % object.length].type == "audio") {
            division = document.createElement("figure");
            //division.className = "figureObject"
            division.className = "figure__grid"
            audio = document.createElement("audio");
            //audio.className = "gridAudios";
            audio.className = "figure__audio"
            audio.controls = "true";
            audio.src = "audios/" + object[i % object.length].content[0];
            audio.alt = object[i % object.length].content[1];
            article = document.createElement("p");
            article.className = "figure__paragraph"
            article.innerHTML = object[i % object.length].description;
            division.appendChild(audio);
            division.appendChild(article);
            container.appendChild(division);
        }
    }
}
let slidingObjects = [
    ["artAndMusicLeftButton", "artAndMusicRightButton", "artAndMusicImageContainer", artAndMusic, artAndMusicIndex],
    ["peoplesLeftButton", "peoplesRightButton", "peoplesImageContainer", peoples, peoplesIndex],
    ["cultureLeftButton", "cultureRightButton", "cultureImageContainer", culture, cultureIndex],
    ["natureLeftButton", "natureRightButton", "natureImageContainer", nature, natureIndex],
    ["outdoorLeftButton", "outdoorRightButton", "outdoorImageContainer", outdoor, outdoorIndex],
    ["eventsLeftButton", "eventsRightButton", "eventsImageContainer", events, eventsIndex],
    ["floraAndFaunaLeftButton", "floraAndFaunaRightButton", "floraAndFaunaImageContainer", floraAndFauna, floraAndFaunaIndex],
    ["heritageLeftButton", "heritageRightButton", "heritageImageContainer", heritage, heritageIndex]
];

slidingObjects.forEach(object => {
    document.getElementById(object[0]).onclick = function() {
        object[4] -= 1;
        loadObjects(object[3], object[4], object[2])
    };
    document.getElementById(object[1]).onclick = function() {
        object[4] += 1;
        loadObjects(object[3], object[4], object[2])
    };
})

function loadScreen() {
    loadObjects(artAndMusic, artAndMusicIndex, "artAndMusicImageContainer")
    loadObjects(peoples, peoplesIndex, "peoplesImageContainer")
    loadObjects(culture, cultureIndex, "cultureImageContainer")
    loadObjects(nature, natureIndex, "natureImageContainer")
    loadObjects(outdoor, outdoorIndex, "outdoorImageContainer")
    loadObjects(events, eventsIndex, "eventsImageContainer")
    loadObjects(floraAndFauna, floraAndFaunaIndex, "floraAndFaunaImageContainer")
    loadObjects(heritage, heritageIndex, "heritageImageContainer")
};
document.getElementById("dropdown-button").onclick = () => {
    dropdown = document.getElementById("dropdown");
    console.log("clicked", dropdown.style)
    if (dropdown.style.display == "") {
        dropdown.style.display = "inline-grid";
    } else {
        dropdown.style.display = "";
    }
}
window.addEventListener("load", () => {
    if (window.innerWidth < 930) {
        numOfObjects = 1;
        loadScreen();
    } else if (window.innerWidth <= 1120) {
        numOfObjects = 2;
        loadScreen();

    } else if (window.innerWidth > 1120) {
        numOfObjects = 3;
        loadScreen();
    }
})