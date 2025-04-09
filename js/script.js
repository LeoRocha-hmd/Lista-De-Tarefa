let contador = 0;
let input = document.getElementById("input");
let btnAdd = document.querySelector("#btn_add");
let main = document.getElementById("area-main")



function addTarefa() {
    let valorInput = input.value;
    if ((valorInput !== 0) && (valorInput !== null) && (valorInput !== "") && (valorInput !== undefined)) {
        contador++;
        let NovoItem = `
        <div  id="${contador}" class ="lista-feita">
            <div id="icone-v"><i class="mdi mdi-circle-outline"></i></div>
            <div id="barra-t">
                ${valorInput}
            </div>
            <button class="btn-d" onclick="deletar(${contador})">
                <i class="mdi mdi-delete"></i>
            </button>
        </div>
    `
        main.innerHTML += NovoItem;
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}























/*let icone = document.getElementById("icone-v");
function onclique() {
    let NovoItem = `<main id="area-main">
    <div id="lista-clique">
            <div id="icone-v">
                <i class="mdi mdi-check-underline-circle"></i>
            </div>
            <div id="barra-t">
            ${valorInput
        }
            </div>
            <button id="btn-d"><i class="mdi mdi-delete"></i></button>
        </div>
</main>

`
}
*/


console.log(contador);
