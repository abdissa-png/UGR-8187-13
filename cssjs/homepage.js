homepageImages = [{
    image: "afar.jpg",
    alt: "caravan traders in Afar"
}, {
    image: "ertale.jpg",
    alt: "sulphur fields in ertale"
}, {
    image: "konso.jpg",
    alt: "landscape of Konso"
}, {
    image: "lalibela.jpg",
    alt: "Monolithic churches of lalibela"
}, {
    image: "landscape1.jpg",
    alt: "Beautiful landscape"
}];
let index = 0;
image = document.getElementById("imageObject");
image.src = "images/homepage/" + homepageImages[0].image;
image.alt = homepageImages[0].alt;
document.getElementById("dropdown-button").onclick = () => {
    dropdown = document.getElementById("dropdown");
    console.log("clicked", dropdown.style)
    if (dropdown.style.display == "") {
        dropdown.style.display = "inline-grid";
    } else {
        dropdown.style.display = "";
    }
}
document.getElementById("leftButton").onclick = function() {
    if (index == 0) {
        index = homepageImages.length - 1
    } else {
        index -= 1;
    }
    image.src = "images/homepage/" + homepageImages[index].image;
    image.alt = homepageImages[index].alt;
};
document.getElementById("rightButton").onclick = function() {
    if (index == homepageImages.length - 1) {
        index = 0
    } else {
        index += 1;
    }
    image.src = "images/homepage/" + homepageImages[(index + 1) % homepageImages.length].image;
    image.alt = homepageImages[(index + 1) % homepageImages.length].alt;
}