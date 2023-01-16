container = document.getElementById("container");
educationalTours = [];
piligrimageTours = [];
sportAndHikingTours = [];
historicalTours = [];
sightSeeingTours = [{
    image: "Ertale.jpg",
    alt: "fumaroles at ertale",
    header: "Ertale",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    image: "Gonder.jpg",
    alt: "Castles of Gonder",
    header: "Gonder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    image: "Hamer.jpg",
    alt: "People of the hamer tribe",
    header: "Hamer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    image: "harar.jpg",
    alt: "The Jegol Wall",
    header: "Harar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    image: "lalibela.jpg",
    alt: "The monolithic churuch of St.George",
    header: "Lalibela",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    image: "Simien mountains.jpg",
    alt: "The Chelalda baboon",
    header: "Simien mountains",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    image: "timket.jpg",
    alt: "The timket festivities",
    header: "Timket festival(Epiphany)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    image: "tis abay water falls.jpg",
    alt: "The water falls at tis abay",
    header: "Tis Abay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}, {
    image: "tiya monolithic statues.jpg",
    alt: "The tiya statues",
    header: "Tiya Monolithic Statues",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu."
}];
museumAndHeritageTours = [];
document.getElementById("educational").onclick = () => loadContainer(educationalTours);
document.getElementById("piligrimage").onclick = () => loadContainer(piligrimageTours);
document.getElementById("sportAndHiking").onclick = () => loadContainer(sportAndHikingTours);
document.getElementById("historical").onclick = () => loadContainer(historicalTours);
document.getElementById("sightSeeing").onclick = () => loadContainer(sightSeeingTours);
document.getElementById("museumAndHeritage").onclick = () => loadContainer(museumAndHeritageTours);
document.getElementById("dropdown-button").onclick = () => {
    dropdown = document.getElementById("dropdown");
    console.log("clicked", dropdown.style)
    if (dropdown.style.display == "") {
        dropdown.style.display = "inline-grid";
    } else {
        dropdown.style.display = "";
    }
}

function loadContainer(tour) {
    if (tour.length == 0) {
        container.textContent = "";
        text = document.createElement("h1");
        text.innerHTML = "Sorry,we currently do not have any tours in this category";
        container.appendChild(text);
    } else {
        container.textContent = "";
        tour.forEach(object => {
            image = document.createElement('img');
            image.src = "images/tours/" + object.image;
            image.alt = object.alt;
            image.className = "imageObject";
            division = document.createElement("figure");
            division.className = "containerObjects"
            miniDivision = document.createElement("section");
            miniDivision.class = "containerObjectText"
            header = document.createElement("h2");
            article = document.createElement("p");
            button = document.createElement("button");
            header.innerHTML = object.header;
            article.innerHTML = object.description;
            button.innerHTML = "Explore";
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