popularTours = [{
    image: "afar.jpg",
    alt: "sulphur fields of afar",
    header: "Afar",
    article: "Ertale is a volcano located in the Afar Region of Ethiopia. It is part of the Erta Ale Range, which also includes the volcano Erta Ale. Ertale is a shield volcano, which means it is a broad volcano with gently sloping sides built up from fluid lava flows. It has a caldera at its summit and is one of the most active volcanoes in Ethiopia. It is situated in the Afar Depression, a desert area where several other active volcanoes are also located.",
    data: ["Ertale", "Dec 25,2022", "John Smith", "1199.99$"]
}, {
    image: "axum.jpg",
    alt: "monolithic obesilks of axum",
    header: "Axum",
    article: "Axum is an ancient city located in northern Ethiopia. It was the capital of the Aksumite Empire, which existed from the 1st century AD to the 10th century AD. The city is known for its well-preserved ruins, including monumental stelae, which are large stone obelisks, and the remains of palaces and tombs. The city also has religious significance as it is believed to be the site of the original Ark of the Covenant. Today, Axum is a UNESCO World Heritage Site and an important pilgrimage destination for Ethiopian Orthodox Christians.",
    data: ["Axum", "Jan 25,2023", "John Smith", "1299.99$"]
}];
bestDealTours = [{
    image: "gonder.jpg",
    alt: "the castles of gonder",
    header: "Gonder",
    article: "Gondar, also spelled Gonder, is a historic city in northern Ethiopia. It served as the capital of Ethiopia from the 17th to the 19th century and is known for its well-preserved castles and palaces from this period. The most famous of these is the Royal Enclosure, a complex of buildings that includes several castles, as well as a church. Gondar is also a significant religious center, with several churches and monasteries dating back to the 17th century. It was a vital city during the Zemene Mesafint era, a period of Ethiopian history marked by the power struggle of various regional lords.",
    data: ["Gonder", "Feb 25,2023", "John Smith", "1399.99$"]
}, {
    image: "hamer.jpg",
    alt: "the Hamer people",
    header: "Hamer",
    article: "The Hamer people are an ethnic group who live in the Omo River valley region of southern Ethiopia. They are known for their distinctive customs and traditions, such as bull jumping, a rite of passage for young men. This ceremony is an important aspect of Hamer culture and is performed to mark a boy's transition into adulthood. The Hamer people are also known for their elaborate body decoration, which includes scarification and the use of beads and shells. They are semi-nomadic pastoralist, and their livelihood mainly depends on the cattle, sheep, goat and other domestic animals.",
    data: ["South Omo", "Mar 25,2022", "John Smith", "1499.99$"]
}];
discountedTours = [{
    image: "harar.jpg",
    alt: "the Jegol wall",
    header: "Harar",
    article: "Harar, also spelled Harrar or Harer, is an ancient city in eastern Ethiopia. It is known for its well-preserved historical architecture and its cultural significance as a center of Islamic learning. The city is surrounded by walls, and within these walls, there are over 90 mosques, three of which date from the 10th century. It is also famous for the hyena man, who feed wild hyenas every night. Harar is also famous for its traditional markets, where you can find various traditional handicrafts, spices, and coffee beans. The city was included in the UNESCO World Heritage site in 2006.",
    data: ["Harar", "Apr 25,2022", "John Smith", "1599.99$"]
}, {
    image: "lalibela.jpg",
    alt: "monolithic churches of lalibela",
    header: "Lalibela",
    article: "Lalibela is a small town in northern Ethiopia known for its rock-hewn churches. These churches were carved out of solid rock during the 12th century and are considered some of the most remarkable examples of Ethiopian medieval architecture. The most famous of these churches is the Church of Saint George, which is carved out of a single piece of granite. Lalibela is considered a holy city by the Ethiopian Orthodox Tewahedo Church and is an important pilgrimage site. The churches are still in use today and are visited by thousands of people each year. The town is also a UNESCO World Heritage site.",
    data: ["Lalibela", "May 25,2022", "John Smith", "1299.99$"]
}];
newTours = [{
    image: "simien mountains.jpg",
    alt: "Gelada Baboons",
    header: "Simien Mountains",
    article: "The Simien Mountains, also known as the Simien Mountains National Park, is a mountain range located in northern Ethiopia. It is known for its dramatic landscapes, including deep gorges, rugged peaks, and plateaus. The range is home to a variety of wildlife, including the Ethiopian wolf, gelada monkey, and the Walia ibex, a wild goat found only in the Simien Mountains. The park is also a UNESCO World Heritage Site and offers hiking and trekking opportunities for visitors.",
    data: ["Simien Mountains", "Jun 25,2022", "John Smith", "1112.99$"]
}, {
    image: "tiya.jpg",
    alt: "statues of tiya",
    header: "Tiya",
    article: "Tiya is an archaeological site located in southern Ethiopia. It is known for its 36 standing stone monuments, or stelae, that date back to the 12th and 13th centuries AD. The stelae are adorned with intricate carvings, including symbols and inscriptions. The site was designated as a UNESCO World Heritage Site in 1980. It is also believed to be an important cultural and religious center during the ancient times. The Tiya stelae are also known for their mystery and unsolved riddles, as the inscriptions and symbols on the stelae are not deciphered yet. It is an important place for researchers and archaeologists.",
    data: ["Tiya", "Dec 25,2022", "John Smith", "1133.99$"]
}];
let currentObject;
let index = 0;
document.getElementById("popular").onclick = () => loadContainer(popularTours);
document.getElementById("best").onclick = () => loadContainer(bestDealTours);
document.getElementById("discounted").onclick = () => loadContainer(discountedTours);
document.getElementById("new").onclick = () => loadContainer(newTours);
document.getElementById("leftButton").onclick = function() {
    if (index == 0) {
        index = currentObject.length - 1
    } else {
        index -= 1;
    }
    loadContainer(currentObject, index);
};
document.getElementById("rightButton").onclick = function() {
    if (index == currentObject.length - 1) {
        index = 0
    } else {
        index += 1;
    }
    loadContainer(currentObject, index);
}

function loadContainer(object, index = 0) {
    currentObject = object
    console.log("clicked");
    document.getElementById("imageObject").src = "images/booking/" + object[index].image;
    document.getElementById("imageObject").alt = object[index].alt;
    document.getElementById("location").innerHTML = object[index].data[0];
    document.getElementById("date").innerHTML = object[index].data[1];
    document.getElementById("tourGuide").innerHTML = object[index].data[2];
    document.getElementById("cost").innerHTML = object[index].data[3];
    document.getElementById("header").innerHTML = object[index].header;
    document.getElementById("description").innerHTML = object[index].article;
}
document.getElementById("dropdown-button").onclick = () => {
    dropdown = document.getElementById("dropdown");
    console.log("clicked", dropdown.style)
    if (dropdown.style.display == "") {
        dropdown.style.display = "inline-grid";
    } else {
        dropdown.style.display = "";
    }
}
loadContainer(popularTours);

function getData(form) {
    var formData = new FormData(form);

    // iterate through entries...
    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }

    // ...or output as an object
    console.log(Object.fromEntries(formData));
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    getData(e.target);
    alert("Your booking has been reserved");
});