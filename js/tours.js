educationalTours = [];
piligrimageTours = [];
sportAndHikingTours = [];
historicalTours = [];
sightSeeingTours = [{
    image: "Ertale.jpg",
    alt: "fumaroles at ertale",
    header: "Ertale",
    description: "Ertale is a volcano located in the Afar Region of northeastern Ethiopia. It is part of the Danakil Depression, which is known for its extreme temperatures and unique geology. Ertale is a shield volcano, which means it has a broad, gently sloping shape and is composed primarily of basaltic lava flows. The volcano is still active and has erupted several times in recent years. The last known eruption was in 2011. The area around Ertale is also known for its salt mines, which are worked by local Afar people. It holds the lowest point in Ethiopia(Dalol).",
    link: "https://en.wikipedia.org/wiki/Erta_Ale"
}, {
    image: "Gonder.jpg",
    alt: "Castles of Gonder",
    header: "Gonder",
    description: "Gondar, also spelled Gonder, is a city in the Amhara region of Ethiopia. It was the capital of the Ethiopian Empire from the 17th to the 19th century and is known for its well-preserved medieval castles and palaces. The city is home to several UNESCO World Heritage sites, including the Royal Enclosure, which is a group of castles and palaces built by various emperors during the 17th and 18th centuries. The most famous of these is the Castle of Fasilides, which was built in the 17th century and is known for its unique architectural style.",
    link: "https://en.wikipedia.org/wiki/Gondar"
}, {
    image: "Hamer.jpg",
    alt: "People of the hamer tribe",
    header: "Hamer",
    description: "The Hamer people, also known as the Hammer or Hamar, are an ethnic group in southern Ethiopia. They are traditionally a semi-nomadic pastoralist people who raise cattle and other livestock. The Hamer are known for their distinctive customs and rituals, including the bull jumping ceremony, which is a rite of passage for young men.The Hamer are also known for their distinctive hairstyles and body painting. They are traditionally a very egalitarian society, with women playing a significant role in many aspects of their culture. ",
    link: "https://en.wikipedia.org/wiki/Hamar_people"
}, {
    image: "harar.jpg",
    alt: "The Jegol Wall",
    header: "Harar",
    description: "Harar is a city in eastern Ethiopia, known for its well-preserved medieval Islamic architecture and culture. It is the fourth holiest city in Islam and has been a center of Islamic learning for centuries. The city is surrounded by a wall, built in the 16th century, and is home to 82 mosques, three of which date back to the 10th century. The Harari people, the indigenous ethnic group of the city, have their own language and culture which is distinct from the surrounding areas.Harar is a UNESCO World Heritage site and a popular tourist destination, known for its unique blend of African and Islamic culture.",
    link: "https://en.wikipedia.org/wiki/Harar"
}, {
    image: "lalibela.jpg",
    alt: "The monolithic churuch of St.George",
    header: "Lalibela",
    description: "Lalibela is a town in northern Ethiopia, known for its rock-hewn churches dating back to the 12th century. These churches, carved out of solid rock, are considered some of the most impressive architectural wonders of the medieval world. The most famous of these is the Church of Saint George, which is believed to have been built during the reign of King Lalibela in the 12th century. The churches are still active places of worship and are considered a sacred site by the Ethiopian Orthodox Church. The town is a UNESCO World Heritage site and a popular tourist destination.",
    link: "https://en.wikipedia.org/wiki/Lalibela"
}, {
    image: "Simien mountains.jpg",
    alt: "The Chelalda baboon",
    header: "Simien mountains",
    description: "The Simien Mountains, also known as the Semien Mountains, are a mountain range located in northern Ethiopia. The highest peak in the range is Ras Dashan, which stands at an elevation of 4,543 meters. The range is home to a diverse array of flora and fauna, including the Ethiopian wolf, which is the most endangered canid species in the world. The Simien Mountains are also home to several endangered mammal species, including the Walia ibex and the Ethiopian bushbuck. The Simien Mountains are a UNESCO World Heritage site and a popular destination for hikers and trekkers.",
    link: "https://en.wikipedia.org/wiki/Simien_Mountains"
}, {
    image: "timket.jpg",
    alt: "The timket festivities",
    header: "Timket festival(Epiphany)",
    description: "Timket, also known as Epiphany, is an annual religious festival celebrated by the Ethiopian Orthodox Church.The festival is celebrated on January 19th and starts with a colorful procession, where replicas of the Ark of the Covenant are carried through the streets. On the second day, the faithful gather at a nearby river or body of water and participate in a reenactment of the baptism of Jesus. The final day is marked by a feast and the return of the replicas of the Ark of the Covenant to their respective churches. Timket is one major festivals in the country ",
    link: "https://en.wikipedia.org/wiki/Timkat"
}, {
    image: "tis abay water falls.jpg",
    alt: "The water falls at tis abay",
    header: "Tis Abay",
    description: "Tis Abay Falls, also known as Blue Nile Falls, is a waterfall located in the Amhara Region of Ethiopia. It is situated on the Blue Nile River, which is one of the main tributaries of the Nile River. The waterfall is one of the most spectacular in Ethiopia, with a total height of approximately 45 meters. The waterfall is particularly impressive during the rainy season when the water flow is at its highest. The waterfall is surrounded by a lush tropical forest, which is home to a diverse array of flora and fauna.",
    link: "https://en.wikipedia.org/wiki/Blue_Nile_Falls"
}, {
    image: "tiya monolithic statues.jpg",
    alt: "The tiya statues",
    header: "Tiya Monolithic Statues",
    description: "Tiya is an archaeological site located in the southern region of Ethiopia, known for its collection of ancient monolithic stelae, or standing stones. The site is believed to date back to the 14th century, and contains 36 stones, some of which are decorated with symbols and inscriptions. The stelae are arranged in rows and are believed to have been used for religious or ceremonial purposes. They are considered to be some of the most important examples of ancient Ethiopian culture and are recognized as a UNESCO World Heritage site. ",
    link: "https://en.wikipedia.org/wiki/Tiya"
}];
museumAndHeritageTours = [];
container = document.getElementById("container");
document.getElementById("educational").onclick = () => loadContainer(educationalTours);
document.getElementById("piligrimage").onclick = () => loadContainer(piligrimageTours);
document.getElementById("sportAndHiking").onclick = () => loadContainer(sportAndHikingTours);
document.getElementById("historical").onclick = () => loadContainer(historicalTours);
document.getElementById("sightSeeing").onclick = () => loadContainer(sightSeeingTours);
document.getElementById("museumAndHeritage").onclick = () => loadContainer(museumAndHeritageTours);

function loadContainer(tour) {
    if (tour.length == 0) {
        container.textContent = "";
        text = document.createElement("h1");
        text.className = "display-1 col-12 text-center";
        text.innerHTML = "Sorry,we currently do not have any tours in this category";
        container.appendChild(text);
    } else {
        container.textContent = "";
        tour.forEach(object => {
            image = document.createElement('img');
            image.src = "images/tours/" + object.image;
            image.alt = object.alt;
            image.className = "row h-50";
            division = document.createElement("figure");
            division.className = "col-12 col-sm-5 col-lg-3 card border-secondary";
            miniDivision = document.createElement("section");
            miniDivision.className = "card-body"
            header = document.createElement("h2");
            header.className = "card-title"
            article = document.createElement("p");
            article.className = "card-text"
            button = document.createElement("a");
            button.className = "btn btn-primary"
            header.innerHTML = object.header;
            article.innerHTML = object.description;
            button.innerHTML = "Explore";
            button.href = object.link;
            button.target = "_blank";
            miniDivision.appendChild(header);
            miniDivision.appendChild(article);
            miniDivision.appendChild(button);
            division.appendChild(image);
            division.appendChild(miniDivision);
            container.appendChild(division);
        });
    };
};
loadContainer(sightSeeingTours);