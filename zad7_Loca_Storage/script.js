// ===== ZAD6 (64653): fetch() ile JSON'dan veri çekme =====
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        var listaUmiejetnosci = document.getElementById('lista-umiejetnosci');
        listaUmiejetnosci.innerHTML = "";

        data.umiejetnosci.forEach(function(umiejetnosc) {
            var li = document.createElement('li');
            li.textContent = umiejetnosc;
            listaUmiejetnosci.appendChild(li);
        });

        var listaProjektow = document.getElementById('lista-projektow');
        listaProjektow.innerHTML = "";

        data.projekty.forEach(function(projekt) {
            var li = document.createElement('li');
            li.innerHTML = '<strong>' + projekt.nazwa + '</strong> – ' + projekt.opis;
            listaProjektow.appendChild(li);
        });

    })
    .catch(function(error) {
        console.error('Błąd podczas pobierania danych z JSON:', error);
    });


// ===== ZAD7: LocalStorage =====

// Sayfa yüklenince görevleri göster
document.addEventListener("DOMContentLoaded", function () {
    pokazZadania();
});

// Görev ekleme
function dodajZadanie() {
    var input = document.getElementById("input-zadanie");
    var wartosc = input.value.trim();

    if (wartosc === "") return;

    var zadania = JSON.parse(localStorage.getItem("zadania")) || [];

    zadania.push(wartosc);

    localStorage.setItem("zadania", JSON.stringify(zadania));

    input.value = "";

    pokazZadania();
}

// Görevleri listeleme
function pokazZadania() {
    var lista = document.getElementById("lista-zadan");
    if (!lista) return;

    lista.innerHTML = "";

    var zadania = JSON.parse(localStorage.getItem("zadania")) || [];

    zadania.forEach(function (zadanie, index) {
        var li = document.createElement("li");
        li.textContent = zadanie;

        var btn = document.createElement("button");
        btn.textContent = "Usuń";

        btn.style.marginLeft = "10px";

        btn.onclick = function () {
            usunZadanie(index);
        };

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

// Görev silme
function usunZadanie(index) {
    var zadania = JSON.parse(localStorage.getItem("zadania")) || [];

    zadania.splice(index, 1);

    localStorage.setItem("zadania", JSON.stringify(zadania));

    pokazZadania();
}


// ===== ZAD4 & ZAD5 Fonksiyonları =====

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