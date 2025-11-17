/* ================= TABS ================= */
const tabsButtons = document.querySelectorAll(".tabs__button");
const tabsContents = document.querySelectorAll(".tabs__content");

tabsButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.tab;

        // Activar la pestaña seleccionada
        tabsButtons.forEach(b => b.classList.remove("tabs__button--active"));
        tabsContents.forEach(c => c.classList.remove("tabs__content--active"));

        btn.classList.add("tabs__button--active");
        document.getElementById(target).classList.add("tabs__content--active");
    });
});

/* ================= MODALES ================= */
// MODAL GENERAL
const modal = document.getElementById("cardModal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalText = document.getElementById("modalText");
const modalLong = document.getElementById("modalLong");
const closeModal = document.querySelector("#cardModal .modal__close");

// MODAL PROYECTOS
const modalProyectos = document.getElementById("modalProyectos");
const modalProyectoTitle = document.getElementById("modalProyectoTitle");
const modalProyectoSubtitle = document.getElementById("modalProyectoSubtitle");
const modalProyectoText = document.getElementById("modalProyectoText");
const modalProyectoLong = document.getElementById("modalProyectoLong");
const closeProyectos = document.getElementById("closeProyectos");

// MODAL DATOS PERSONALES
const cardDatos = document.getElementById("cardDatos");
const modalDatos = document.getElementById("modalDatosPersonales");
const closeDatos = document.getElementById("closeDatos");
const modalOverlay = document.createElement("div");
modalOverlay.id = "modalOverlay";
document.body.appendChild(modalOverlay);

/* ========= FUNCIONES DE APERTURA Y CIERRE DE MODALES ========= */
function openModal(modalElement) {
    modalElement.style.display = "flex";
    document.body.classList.add("modal-open");
    modalOverlay.style.display = "block";
}

function closeModalFunc(modalElement) {
    modalElement.style.display = "none";
    document.body.classList.remove("modal-open");
    modalOverlay.style.display = "none";
}

/* ========= TARJETAS DE PROYECTOS ========= */
const projectCards = document.querySelectorAll("#proyectos .card");
projectCards.forEach(card => {
    card.addEventListener("click", () => {
        modalProyectoTitle.textContent = card.querySelector(".card__title").textContent;
        modalProyectoSubtitle.textContent = card.querySelector(".card__subtitle").textContent;
        modalProyectoText.textContent = card.querySelector(".card__copy").textContent;
        modalProyectoLong.textContent = card.dataset.long;

        openModal(modalProyectos);
    });
});

/* ========= TARJETAS GENERALES (FORMACIÓN Y EXPERIENCIA) ========= */
const generalCards = document.querySelectorAll(".card:not(#cardDatos):not(#proyectos .card)");
generalCards.forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.querySelector(".card__title").textContent;
        modalSubtitle.textContent = card.querySelector(".card__subtitle").textContent;
        modalText.textContent = card.querySelector(".card__copy").textContent;
        modalLong.textContent = card.dataset.long;

        openModal(modal);
    });
});

/* ========= TARJETA DATOS PERSONALES ========= */
cardDatos.addEventListener("click", () => openModal(modalDatos));

/* ========= CIERRE DE MODALES ========= */
closeModal.addEventListener("click", () => closeModalFunc(modal));
closeProyectos.addEventListener("click", () => closeModalFunc(modalProyectos));
closeDatos.addEventListener("click", () => closeModalFunc(modalDatos));

window.addEventListener("click", (e) => {
    if (e.target === modal) closeModalFunc(modal);
    if (e.target === modalProyectos) closeModalFunc(modalProyectos);
    if (e.target === modalDatos) closeModalFunc(modalDatos);
});
