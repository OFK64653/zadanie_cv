
document.addEventListener("DOMContentLoaded", function () {
    console.log("Strona załadowana!");
});


function toggleInfo() {
    const section = document.getElementById("extra-info");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}


function changeTheme() {
    const theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "red.css") {
        theme.setAttribute("href", "green.css");
    } else {
        theme.setAttribute("href", "red.css");
    }
}


function showMessage() {
    alert("Witaj na moim CV!");
}
