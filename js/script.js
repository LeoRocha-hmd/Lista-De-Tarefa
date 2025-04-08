let input = document.getElementById("input");
let btnAdd = document.getElementById("btn_add");
let main = document.getElementById("area-main")
function addTarefa() {
    let valorInput = input.value;
    if ((valorInput !== 0) && (valorInput !== null) && (valorInput !== "") && (valorInput !== undefined)) {
        let NovoItem = `<main id="area-main">
        <div id="lista-feita">
            <div id="icone-v"><i class="mdi mdi-circle-outline"></i></div>
            <div id="barra-t">
                ${valorInput}
            </div>
            <button id="btn-d">
                <i class="mdi mdi-delete"></i>
            </button>
        </div>
    </main>

    `
        main.innerHTML += NovoItem;

    }
}