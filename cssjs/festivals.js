Images = [{
    image: "ashenda.jpg",
    alt: "Ashenda Celebrations"
}, {
    image: "irreechaa.jpg",
    alt: "Irreechaa Celebrations"
}, {
    image: "Meskel.jpg",
    alt: "Meskel Celebrations"
}, {
    image: "Timiket.jpg",
    alt: "Timket Celebrations"
}, {
    image: "fichee-chambalaalla.jpg",
    alt: "Fichee Chambalaalla celebrations"
}];
culturalpost = [{
    image: "ashenda.jpg",
    alt: "Ashenda Celebrations",
    header: "Ashenda",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://en.wikipedia.org/wiki/Ashenda"
}, {
    image: "irreechaa.jpg",
    alt: "Irreechaa Celebrations",
    header: "Irreecha",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://en.wikipedia.org/wiki/Irreechaa"
}];
religiousPost = [{
    image: "Meskel.jpg",
    alt: "Meskel Celebrations",
    header: "Meskel(Finding of the true cross)",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://en.wikipedia.org/wiki/Meskel"
}, {
    image: "Timiket.jpg",
    alt: "Timket Celebrations",
    header: "Timket(Epiphany)",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://en.wikipedia.org/wiki/Timkat"
}];
nationalFestivalPost = [{
    image: "newYear.jpg",
    alt: "Ethiopian new year",
    header: "Ethiopian new Year",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://en.wikipedia.org/wiki/Enkutatash",
}, {
    image: "adwa.jpg",
    alt: "Victory of Adwa Celebrations",
    header: "Victory of Adwa",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://en.wikipedia.org/wiki/Adwa_Victory_Day",
}];
localFestivalPost = [{
    image: "fichee-chambalaalla.jpg",
    alt: "Fichee Chambalaalla celebrations",
    header: "Fichee Chambalaalla",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://ich.unesco.org/en/RL/fichee-chambalaalla-new-year-festival-of-the-sidama-people-01054",
}, {
    image: "gifata.jpg",
    alt: "gifata celebrations",
    header: "Gifata",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://en.wikipedia.org/wiki/Gifaata",
}];
eventsPost = [{
    image: "great ethiopian run.jpg",
    alt: "Great Ethiopian Run",
    header: "Great Ethiopian Run",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://en.wikipedia.org/wiki/Great_Ethiopian_Run",
}, {
    image: "buildexpo.jpg",
    alt: "build Expo Africa 2023 Logo",
    header: "Build Expo Africa 2023",
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sagittis dolor, eu vulputate enim vestibulum a. Integer finibus turpis sed odio porttitor lobortis. Aenean vitae scelerisque libero, in vehicula dolor. Suspendisse potenti. Donec et placerat tellus, nec iaculis nibh. Proin id odio at arcu efficitur ornare. Pellentesque in suscipit arcu.",
    link: "https://www.expogr.com/ethiopia/buildexpo/",
}];
container = document.getElementById("container");
document.getElementById("cultural").onclick = () => loadContainer(culturalpost);
document.getElementById("religious").onclick = () => loadContainer(religiousPost);
document.getElementById("national").onclick = () => loadContainer(nationalFestivalPost);
document.getElementById("local").onclick = () => loadContainer(localFestivalPost);
document.getElementById("events").onclick = () => loadContainer(eventsPost);

function loadContainer(post) {
    for (let i = 0; i < Math.ceil(post.length / 2); i++) {
        container.innerHTML = "";
        division = document.createElement("figure");
        division.className = "figureContainer"
        image = document.createElement("img");
        image.src = "images/festivals/" + post[i].image;
        image.alt = post[i].alt;
        miniDivision = document.createElement("section");
        miniDivision.className = "textSection";
        header = document.createElement("h1");
        header.innerHTML = post[i].header;
        article = document.createElement("p");
        link = document.createElement("a");
        link.className = "figureContainerLink"
        link.target = "_blank";
        link.href = post[i].link;
        link.innerHTML = "Read More....";
        article.innerHTML = post[i].article;
        article.appendChild(link);
        miniDivision.appendChild(header);
        miniDivision.appendChild(article);
        division.appendChild(image);
        division.appendChild(miniDivision);
        container.appendChild(division);
        breakLine = document.createElement("hr");
        container.appendChild(breakLine);
    }
    SeeMore = document.createElement("button");
    SeeMore.id = "seeMoreButton";
    SeeMore.innerHTML = "See More";
    container.appendChild(SeeMore);
    SeeMore.onclick = function() {
        container.innerHTML = "";
        post.forEach(object => {
            division = document.createElement("figure");
            division.className = "figureContainer"
            image = document.createElement("img");
            image.src = "images/festivals/" + object.image;
            image.alt = object.alt;
            miniDivision = document.createElement("section");
            miniDivision.className = "textSection";
            header = document.createElement("h1");
            header.innerHTML = object.header;
            article = document.createElement("p");
            link = document.createElement("a");
            link.className = "figureContainerLink"
            link.target = "_blank";
            link.href = object.link;
            link.innerHTML = "Read More....";
            article.innerHTML = object.article;
            article.appendChild(link);
            miniDivision.appendChild(header);
            miniDivision.appendChild(article);
            division.appendChild(image);
            division.appendChild(miniDivision);
            container.appendChild(division);
            breakLine = document.createElement("hr");
            container.appendChild(breakLine);
        });
        document.getElementById("seeMoreButton").remove();
    }
}
loadContainer(religiousPost);
let slideIndex1 = 0;
let slideIndex2 = 0;
let numOfObjects = 3;
image = document.getElementById("imageObject1");
image.src = "images/festivals/" + Images[0].image;
image.alt = Images[0].alt;
document.getElementById("leftButton1").onclick = function() {
    if (slideIndex1 == 0) {
        slideIndex1 = Images.length - 1
    } else {
        slideIndex1 -= 1;
    }
    image.src = "images/festivals/" + Images[slideIndex1].image;
    image.alt = Images[slideIndex1].alt;
};
document.getElementById("rightButton1").onclick = function() {
    if (slideIndex1 == Images.length - 1) {
        slideIndex1 = 0
    } else {
        slideIndex1 += 1;
    }
    image.src = "images/festivals/" + Images[(slideIndex1 + 1) % Images.length].image;
    image.alt = Images[(slideIndex1 + 1) % Images.length].alt;
}

function loadImages(index) {
    document.getElementById("imageContainer2").innerHTML = "";
    for (let i = index; i < index + numOfObjects; i++) {
        imageObj = document.createElement("img");
        imageObj.className = "container2Images";
        imageObj.src = "images/festivals/" + Images[i % Images.length].image;
        imageObj.alt = Images[i % Images.length].alt;
        document.getElementById("imageContainer2").appendChild(imageObj);
    }
}

document.getElementById("leftButton2").onclick = () => {
    if (slideIndex2 - 1 >= 0) {
        slideIndex2 -= 1;
        loadImages(slideIndex2);
    } else {
        slideIndex2 = Images.length - 2;
        loadImages(slideIndex2);
    }
}
document.getElementById("rightButton2").onclick = () => {
    if (slideIndex2 + 1 < Images.length - 1) {
        slideIndex2 += 1
        loadImages(slideIndex2);
    } else {
        slideIndex2 = 0;
        loadImages(slideIndex2);
    }
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
window.addEventListener("resize", () => {
    if (window.innerWidth > 630) {
        numOfObjects = 3;
        loadImages(slideIndex2);
    } else {
        numOfObjects = 1;
        loadImages(slideIndex2);
    }
})
window.addEventListener("load", () => {
    if (window.innerWidth > 850) {
        numOfObjects = 3;
        loadImages(0);
    } else {
        numOfObjects = 1;
        loadImages(0);
    }
})
loadImages(0);