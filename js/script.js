/* TABS */
const tabsButtons = document.querySelectorAll(".tabs__button");
const tabsContents = document.querySelectorAll(".tabs__content");

tabsButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.tab;

        tabsButtons.forEach(b => b.classList.remove("tabs__button--active"));
        tabsContents.forEach(c => c.classList.remove("tabs__content--active"));

        btn.classList.add("tabs__button--active");
        document.getElementById(target).classList.add("tabs__content--active");
    });
});

/* MODAL */
const modal = document.getElementById("cardModal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalText = document.getElementById("modalText");
const modalLong = document.getElementById("modalLong");
const closeModal = document.querySelector(".modal__close");

/* MODAL PROYECTOS PERSONALES */
const modalProyectos = document.getElementById("modalProyectos");
const modalProyectoTitle = document.getElementById("modalProyectoTitle");
const modalProyectoSubtitle = document.getElementById("modalProyectoSubtitle");
const modalProyectoText = document.getElementById("modalProyectoText");
const modalProyectoLong = document.getElementById("modalProyectoLong");
const closeProyectos = document.getElementById("closeProyectos");

// Seleccionar las tarjetas de los proyectos personales
const projectCards = document.querySelectorAll("#proyectos .card");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        modalProyectoTitle.textContent = card.querySelector(".card__title").textContent;
        modalProyectoSubtitle.textContent = card.querySelector(".card__subtitle").textContent;
        modalProyectoText.textContent = card.querySelector(".card__copy").textContent;
        modalProyectoLong.textContent = card.dataset.long;

        modalProyectos.style.display = "flex";
        document.body.classList.add("modal-open");
    });
});

closeProyectos.addEventListener("click", () => {
    modalProyectos.style.display = "none";
    document.body.classList.remove("modal-open");
});

window.addEventListener("click", e => {
    if (e.target === modalProyectos) {
        modalProyectos.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});


/* MODAL DATOS PERSONALES */
const cardDatos = document.getElementById("cardDatos");
const modalDatos = document.getElementById("modalDatosPersonales");
const closeDatos = document.getElementById("closeDatos");

cardDatos.addEventListener("click", () => {
    modalDatos.style.display = "flex";
    document.getElementById("modalOverlay").style.display = "block";
});

closeDatos.addEventListener("click", () => {
    modalDatos.style.display = "none";
    document.getElementById("modalOverlay").style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modalDatos) {
        modalDatos.style.display = "none";
        document.getElementById("modalOverlay").style.display = "none";
    }
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.querySelector(".card__title").textContent;
        modalSubtitle.textContent = card.querySelector(".card__subtitle").textContent;
        modalText.textContent = card.querySelector(".card__copy").textContent;
        modalLong.textContent = card.dataset.long;

        modal.style.display = "flex";
        document.body.classList.add("modal-open");
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); 
    }
});
