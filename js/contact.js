document.getElementById("dropdown-button").onclick = () => {
    dropdown = document.getElementById("dropdown");
    if (dropdown.style.display == "") {
        dropdown.style.display = "inline-grid";
    } else {
        dropdown.style.display = "";
    }
}

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
    alert("Your comment has been submited");
});