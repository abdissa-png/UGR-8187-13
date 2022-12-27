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

function loadObjects(object, index, containerId) {
    container = document.getElementById(containerId);
    container.innerHTML = "";
    if (index + 3 > object.length) {
        for (let i = index; i < object.length; i++) {
            if (object[i].type == "image") {
                division = document.createElement("figure");
                division.style.display = "inline-grid";
                division.style.margin = "5px";
                image = document.createElement("img");
                image.src = "images/discover/" + object[i].content[0];
                image.style.height = "110px";
                image.alt = object[i].content[1];
                article = document.createElement("p");
                article.innerHTML = object[i].description;
                division.appendChild(image);
                division.appendChild(article);
                container.appendChild(division);
            } else if (object[i].type == "audio") {
                division = document.createElement("figure");
                division.style.display = "inline-block";
                division.style.margin = "5px";
                audio = document.createElement("audio");
                audio.controls = "true";
                audio.src = "audios/" + object[i].content[0];
                audio.alt = object[i].content[1];
                article = document.createElement("p");
                article.innerHTML = object[i].description;
                division.appendChild(audio);
                division.appendChild(article);
                container.appendChild(division);
            }
        }
    } else {
        for (let i = index; i < index + 3; i++) {
            if (object[i].type == "image") {
                division = document.createElement("figure");
                division.style.display = "inline-block";
                division.style.margin = "5px";
                image = document.createElement("img");
                image.src = "images/discover/" + object[i].content[0];
                image.alt = object[i].content[1];
                image.style.height = "110px";
                article = document.createElement("p");
                article.innerHTML = object[i].description;
                division.appendChild(image);
                division.appendChild(article);
                container.appendChild(division);
            } else if (object[i].type == "audio") {
                division = document.createElement("figure");
                division.style.display = "inline-block";
                division.style.margin = "5px";
                audio = document.createElement("audio");
                audio.controls = "true";
                audio.src = "audios/" + object[i].content[0];
                audio.alt = object[i].content[1];
                article = document.createElement("p");
                article.innerHTML = object[i].description;
                division.appendChild(audio);
                division.appendChild(article);
                container.appendChild(division);
            }
        }
    }
};
document.getElementById("artAndMusicLeftButton").onclick = function() {
    artAndMusicIndex -= 1;
    if (artAndMusicIndex >= 0) {

        loadObjects(artAndMusic, artAndMusicIndex, "artAndMusicImageContainer")
    }
};
document.getElementById("artAndMusicRightButton").onclick = function() {
    artAndMusicIndex += 1;
    if (artAndMusicIndex < artAndMusic.length - 2) {

        loadObjects(artAndMusic, artAndMusicIndex, "artAndMusicImageContainer")
    }
};
document.getElementById("peoplesLeftButton").onclick = function() {
    peoplesIndex -= 1;
    if (peoplesIndex >= 0) {

        loadObjects(peoples, peoplesIndex, "peoplesImageContainer")
    }
};
document.getElementById("peoplesRightButton").onclick = function() {
    peoplesIndex += 1;
    if (peoplesIndex < peoples.length - 2) {

        loadObjects(peoples, peoplesIndex, "peoplesImageContainer")
    }
};
document.getElementById("cultureLeftButton").onclick = function() {
    cultureIndex -= 1;
    if (cultureIndex >= 0) {

        loadObjects(culture, cultureIndex, "cultureImageContainer")
    }
};
document.getElementById("cultureRightButton").onclick = function() {
    cultureIndex += 1;
    if (cultureIndex < culture.length - 2) {

        loadObjects(culture, cultureIndex, "cultureImageContainer")
    }
};
document.getElementById("natureLeftButton").onclick = function() {
    natureIndex -= 1;
    if (natureIndex >= 0) {

        loadObjects(nature, natureIndex, "natureImageContainer")
    }
};
document.getElementById("natureRightButton").onclick = function() {
    natureIndex += 1;
    if (natureIndex < nature.length - 2) {

        loadObjects(nature, natureIndex, "natureImageContainer")
    }
};
document.getElementById("outdoorLeftButton").onclick = function() {
    outdoorIndex -= 1;
    if (outdoorIndex >= 0) {

        loadObjects(outdoor, outdoorIndex, "outdoorImageContainer")
    }
};
document.getElementById("outdoorRightButton").onclick = function() {
    outdoorIndex += 1;
    if (outdoorIndex < outdoor.length - 2) {

        loadObjects(outdoor, outdoorIndex, "outdoorImageContainer")
    }
};
document.getElementById("eventsLeftButton").onclick = function() {
    eventsIndex -= 1;
    if (eventsIndex >= 0) {

        loadObjects(events, eventsIndex, "eventsImageContainer")
    }
};
document.getElementById("eventsRightButton").onclick = function() {
    eventsIndex += 1;
    if (eventsIndex < events.length - 2) {

        loadObjects(events, eventsIndex, "eventsImageContainer")
    }
};
document.getElementById("floraAndFaunaLeftButton").onclick = function() {
    floraAndFaunaIndex -= 1;
    if (floraAndFaunaIndex >= 0) {

        loadObjects(floraAndFauna, floraAndFaunaIndex, "floraAndFaunaImageContainer")
    }
};
document.getElementById("floraAndFaunaRightButton").onclick = function() {
    floraAndFaunaIndex += 1;
    if (floraAndFaunaIndex < floraAndFauna.length - 2) {

        loadObjects(floraAndFauna, floraAndFaunaIndex, "floraAndFaunaImageContainer")
    }
};
document.getElementById("heritageLeftButton").onclick = function() {
    heritageIndex -= 1;
    if (heritageIndex >= 0) {

        loadObjects(heritage, heritageIndex, "heritageImageContainer")
    }
};
document.getElementById("heritageRightButton").onclick = function() {
    heritageIndex += 1;
    if (heritageIndex < heritage.length - 2) {

        loadObjects(heritage, heritageIndex, "heritageImageContainer")
    }
};
loadObjects(artAndMusic, artAndMusicIndex, "artAndMusicImageContainer")
loadObjects(peoples, peoplesIndex, "peoplesImageContainer")
loadObjects(culture, cultureIndex, "cultureImageContainer")
loadObjects(nature, natureIndex, "natureImageContainer")
loadObjects(outdoor, outdoorIndex, "outdoorImageContainer")
loadObjects(events, eventsIndex, "eventsImageContainer")
loadObjects(floraAndFauna, floraAndFaunaIndex, "floraAndFaunaImageContainer")
loadObjects(heritage, heritageIndex, "heritageImageContainer")