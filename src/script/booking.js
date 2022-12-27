popularTours = [{
    image: "afar.jpg",
    alt: "sulphur fields of afar",
    header: "Afar",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti.",
    data: ["Ertale", "Dec 25,2022", "John Smith", "1199.99$"]
}, {
    image: "axum.jpg",
    alt: "monolithic obesilks of axum",
    header: "Axum",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti.",
    data: ["Axum", "Jan 25,2023", "John Smith", "1299.99$"]
}];
bestDealTours = [{
    image: "gonder.jpg",
    alt: "the castles of gonder",
    header: "Gonder",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti.",
    data: ["Gonder", "Feb 25,2023", "John Smith", "1399.99$"]
}, {
    image: "hamer.jpg",
    alt: "the Hamer people",
    header: "Hamer",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti.",
    data: ["South Omo", "Mar 25,2022", "John Smith", "1499.99$"]
}];
discountedTours = [{
    image: "harar.jpg",
    alt: "the Jegol wall",
    header: "Harar",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti.",
    data: ["Harar", "Apr 25,2022", "John Smith", "1599.99$"]
}, {
    image: "lalibela.jpg",
    alt: "monolithic churches of lalibela",
    header: "Lalibela",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti.",
    data: ["Lalibela", "May 25,2022", "John Smith", "1299.99$"]
}];
newTours = [{
    image: "simien mountains.jpg",
    alt: "Gelada Baboons",
    header: "Simien Mountains",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti.",
    data: ["Simien Mountains", "Jun 25,2022", "John Smith", "1112.99$"]
}, {
    image: "tiya.jpg",
    alt: "statues of tiya",
    header: "Tiya",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti.",
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
loadContainer(popularTours);