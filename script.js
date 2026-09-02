/* =========================================
   DATA E HORA ATUAL
========================================= */

function updateDateTime() {

    const now = new Date();

    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    const date = now.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    dateElement.textContent =
        date.charAt(0).toUpperCase() + date.slice(1);

    timeElement.textContent = time;
}


/* Atualiza imediatamente */
updateDateTime();

/* Atualiza a cada segundo */
setInterval(updateDateTime, 1000);


/* =========================================
   CONTAGEM REGRESSIVA DO ANIVERSÁRIO
========================================= */

function getNextBirthday() {

    const now = new Date();

    const currentYear = now.getFullYear();

    let birthday = new Date(
        currentYear,
        8,  // Setembro = 8
        24,
        0,
        0,
        0
    );

    /*
        Se o aniversário deste ano já passou,
        usa o aniversário do próximo ano.
    */
    if (birthday <= now) {
        birthday = new Date(
            currentYear + 1,
            8,
            24,
            0,
            0,
            0
        );
    }

    return birthday;
}


function updateCountdown() {

    const now = new Date();
    const birthday = getNextBirthday();

    const difference = birthday - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("birthday-message").textContent =
            "Feliz aniversário! 🎂💕 Que seu novo ano seja lindo!";

        return;
    }

    const secondsTotal = Math.floor(difference / 1000);

    const days = Math.floor(secondsTotal / 86400);

    const hours = Math.floor(
        (secondsTotal % 86400) / 3600
    );

    const minutes = Math.floor(
        (secondsTotal % 3600) / 60
    );

    const seconds = secondsTotal % 60;


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


/* Atualiza imediatamente */
updateCountdown();

/* Atualiza a cada segundo */
setInterval(updateCountdown, 1000);


/* =========================================
   ANO DO RODAPÉ
========================================= */

document.getElementById("footer-year").textContent =
    `© ${new Date().getFullYear()}`;


/* =========================================
   EFEITO SUAVE AO CARREGAR A PÁGINA
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});
