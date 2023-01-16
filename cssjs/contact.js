document.getElementById("dropdown-button").onclick = () => {
    dropdown = document.getElementById("dropdown");
    if (dropdown.style.display == "") {
        dropdown.style.display = "inline-grid";
    } else {
        dropdown.style.display = "";
    }
}