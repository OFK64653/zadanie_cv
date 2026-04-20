// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function () {
    console.log("Strona załadowana!");
});

// 🔥 Gizli alan aç/kapa
function toggleInfo() {
    const section = document.getElementById("extra-info");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// 🔥 Tema değiştir (red ↔ green)
function changeTheme() {
    const theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "red.css") {
        theme.setAttribute("href", "green.css");
    } else {
        theme.setAttribute("href", "red.css");
    }
}

// 🔥 Alert mesaj
function showMessage() {
    alert("Witaj na moim CV!");
}