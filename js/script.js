/* ================= TABS ================= */
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

/* ================= MODALES ================= */
// MODAL GENERAL
const modal = document.getElementById("cardModal");
const closeModal = modal.querySelector(".modal__close");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalText = document.getElementById("modalText");
const modalLong = document.getElementById("modalLong");

// MODAL PROYECTOS
const modalProyectos = document.getElementById("modalProyectos");
const closeProyectos = modalProyectos.querySelector(".modal__close");
const modalProyectoTitle = document.getElementById("modalProyectoTitle");
const modalProyectoSubtitle = document.getElementById("modalProyectoSubtitle");
const modalProyectoText = document.getElementById("modalProyectoText");
const modalProyectoLong = document.getElementById("modalProyectoLong");

// MODAL DATOS PERSONALES
const cardDatos = document.getElementById("cardDatos");
const modalDatos = document.getElementById("modalDatosPersonales");
const closeDatos = modalDatos.querySelector(".modal__close");

/* FUNCIONES PARA ABRIR Y CERRAR MODALES */
function openModal(modalEl) {
    modalEl.style.display = "flex";
    document.body.classList.add("modal-open");
}

function closeModalFunc(modalEl) {
    modalEl.style.display = "none";
    document.body.classList.remove("modal-open");
}

/* TARJETAS DE PROYECTOS */
document.querySelectorAll("#proyectos .card").forEach(card => {
    card.addEventListener("click", () => {
        modalProyectoTitle.textContent = card.querySelector(".card__title").textContent;
        modalProyectoSubtitle.textContent = card.querySelector(".card__subtitle").textContent;
        modalProyectoText.textContent = card.querySelector(".card__copy").textContent;
        modalProyectoLong.textContent = card.dataset.long;
        openModal(modalProyectos);
    });
});

/* TARJETAS GENERALES (FORMACIÓN Y EXPERIENCIA) */
document.querySelectorAll("#formacion .card, #experiencia .card").forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.querySelector(".card__title").textContent;
        modalSubtitle.textContent = card.querySelector(".card__subtitle").textContent;
        modalText.textContent = card.querySelector(".card__copy").textContent;
        modalLong.textContent = card.dataset.long;
        openModal(modal);
    });
});

/* TARJETA DATOS PERSONALES */
cardDatos.addEventListener("click", () => openModal(modalDatos));

/* CIERRE DE MODALES */
closeModal.addEventListener("click", () => closeModalFunc(modal));
closeProyectos.addEventListener("click", () => closeModalFunc(modalProyectos));
closeDatos.addEventListener("click", () => closeModalFunc(modalDatos));

/* CIERRE AL HACER CLICK FUERA */
window.addEventListener("click", e => {
    if (e.target === modal) closeModalFunc(modal);
    if (e.target === modalProyectos) closeModalFunc(modalProyectos);
    if (e.target === modalDatos) closeModalFunc(modalDatos);
});

