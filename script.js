const toggles = document.querySelectorAll(".toggle");
const bom = document.getElementById("bom");
const barato = document.getElementById("barato");
const rapido = document.getElementById("rapido");

const doTheTrick = (theClickdOne) => {
    if (bom.checked && barato.checked && rapido.checked) {
        if (bom === theClickdOne) rapido.checked = false;
        if (barato === theClickdOne) bom.checked = false;
        if (rapido === theClickdOne) barato.checked = false;
    }
};

toggles.forEach((toggle) =>
toggle.addEventListener("change", (e) => doTheTrick(e.target))
);