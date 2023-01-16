let artAndMusic = [{
    type: "image",
    content: ["St George.jpg", "The painting of St.George"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["bodyArt.jpg", "body art"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    type: "audio",
    content: ["Benishangul_Gumz_Traditional_Music.mp3", "Benishangul Gumz Traditional Music"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    type: "audio",
    content: ["Classical Ethiopian Flute.mp3", "Ethiopian flute music"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}];
let artAndMusicIndex = 0;
let peoples = [{
    type: "image",
    content: ["afar.jpg", "The people of Afar"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["Hamer.jpg", "The people of Hamer"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["gada.jpg", "the oromo people"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}];
let peoplesIndex = 0;
let culture = [{
    type: "image",
    content: ["irreechaa.jpg", "the irreechaa celebrations"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    type: "image",
    content: ["gifata.jpg", "The gifata celebrations"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    type: "image",
    content: ["fichee-chambalaalla.jpg", "the fichee chambalaalla celebrations"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    type: "image",
    content: ["ashenda.jpg", "The ashenda celebrations"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}];
let cultureIndex = 0;
let nature = [{
    type: "image",
    content: ["dalol.jpg", "Sulphur fields in Dalol"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["highlands.jpg", "The highlands of Ethiopia"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["grasslands.jpg", "The grasslands of Ethiopia"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["omovalley.jpg", "The omo valley"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}];
let natureIndex = 0;
let outdoor = [{
    type: "image",
    content: ["camping.jpg", "Camping Activity"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["water park.jpg", "water park activities"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["entotoPark.jpg", "Activities in Entoto park"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}];
let outdoorIndex = 0;
let events = [{
    type: "image",
    content: ["buildexpo.jpg", "Build expo logo"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    type: "image",
    content: ["great ethiopian run.jpg", "Great Ethiopian Run"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}];
let eventsIndex = 0;
let floraAndFauna = [{
    type: "image",
    content: ["nyala.jpg", "The mountain Nyala"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["walia.jpg", "Walia Ibex"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["red fox.jpg", "the Ethiopian Red Wolves"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["geladababoon.jpg", "The gelada baboon"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}];
let floraAndFaunaIndex = 0;
let heritage = [{
    type: "image",
    content: ["Gonder.jpg", "The castles of gonder"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["harar.jpg", "the jegol wall"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["lalibela.jpg", "Rock hewn churches of lalibela"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

}, {
    type: "image",
    content: ["tiya monolithic statues.jpg", "tiya monolithic statues.jpg"],
    description: "Lorem ipsum dolor sit amet,  Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."

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
            division.className = "figureObject"
            image = document.createElement("img");
            image.className = "gridImages"
            image.src = "images/discover/" + object[i % object.length].content[0];
            image.alt = object[i % object.length].content[1];
            article = document.createElement("p");
            article.innerHTML = object[i % object.length].description;
            division.appendChild(image);
            division.appendChild(article);
            container.appendChild(division);
        } else if (object[i % object.length].type == "audio") {
            division = document.createElement("figure");
            division.className = "figureObject"
            audio = document.createElement("audio");
            audio.className = "gridAudios";
            audio.controls = "true";
            audio.src = "audios/" + object[i % object.length].content[0];
            audio.alt = object[i % object.length].content[1];
            article = document.createElement("p");
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