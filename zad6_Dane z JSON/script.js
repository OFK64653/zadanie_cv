// ZAD6 (64653): fetch() ile data.json'dan veri çekme
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        var listaUmiejetnosci = document.getElementById('lista-umiejetnosci');
        data.umiejetnosci.forEach(function(umiejetnosc) {
            var li = document.createElement('li');
            li.textContent = umiejetnosc;
            listaUmiejetnosci.appendChild(li);
        });

        var listaProjektow = document.getElementById('lista-projektow');
        data.projekty.forEach(function(projekt) {
            var li = document.createElement('li');
            li.innerHTML = '<strong>' + projekt.nazwa + '</strong> – ' + projekt.opis;
            listaProjektow.appendChild(li);
        });

    })
    .catch(function(error) {
        console.error('Błąd podczas pobierania danych z JSON:', error);
    });

// --- ZAD4 ve ZAD5'ten gelen fonksiyonlar ---

function toggleInfo() {
    const section = document.getElementById("extra-info");
    section.style.display =
        section.style.display === "none" ? "block" : "none";
}

function changeTheme() {
    const theme = document.getElementById("theme-style");
    theme.setAttribute(
        "href",
        theme.getAttribute("href") === "red.css" ? "green.css" : "red.css"
    );
}

function showMessage() {
    alert("Witaj na moim CV!");
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    if (!name || !surname || !email || !message) {
        error.textContent = "Wszystkie pola są wymagane!";
        return false;
    }

    const regex = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/;

    if (!regex.test(name) || !regex.test(surname)) {
        error.textContent = "Imię i nazwisko mogą zawierać tylko litery!";
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        error.textContent = "Niepoprawny email!";
        return false;
    }

    success.textContent = "Formularz został wysłany!";
    return false;
}