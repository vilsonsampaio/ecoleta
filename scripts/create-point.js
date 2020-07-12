function populateUFs() {
  const stateSelect = document.querySelector("select[name=uf]");
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(res => res.json())
    .then(states => {

      for (const state of states) {
        stateSelect.innerHTML += `<option value="${state.sigla}">${state.nome}</option>`
      }

    }
    )
}

populateUFs();

function getCities(event) {
  /*
  const stateInput = document.querySelector("input[name=state]"); // Selecionando o input do tipo hidden
  
  const indexOfSelectedState = event.target.selectedIndex; // Pega o value do option que foi clicado
  stateInput.value = event.target.options[indexOfSelectedState].value; // Guardando esse valor no input hidden;
  */


  const ufValue = event.target.value; // Pegando o value do option clicado para ser passado por parâmetro
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`; // Guardando na url o value do UF para ser passado o parâmetro

  const citySelect = document.querySelector("select[name=city]");

  if (ufValue == '') return citySelect.disabled = true; // Bloqueando o campo de cidade, caso selecione a opção 'Selecione o estado'
  
  citySelect.innerHTML = `<option value>Selecione a cidade</option>`; // Após selecionar outro estado, os antigos options de cidades são excluídos.
  citySelect.disabled = true; // Bloqueando o campo de cidade, após selecionar outro estado


  fetch(url)
    .then(res => res.json())
    .then(cities => {

      for (const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }

      citySelect.disabled = false;

    }
    )

}

const UF = document.querySelector("select[name=uf]");

UF.addEventListener("change", getCities);






// Ítens de coleta
const itemsToCollect = document.querySelectorAll('.items-grid li');

// Input escondido
const collectedItems = document.querySelector('input[name=items]');

let selectedItems = [];

function handleSelectedItem(event) {

  // Pegando o item selecionado
  const itemLi = event.target;

  // Adicionar ou remover a classe selected.  
  itemLi.classList.toggle('selected');

  // Pegando o ID do item selecionado
  const itemId = itemLi.dataset.id;


  // Verifica se há itens selecionados.
  // Se sim, pega os itens selecionados.
  const alreadySelected = selectedItems.findIndex(item => item == itemId);
  
  /* Outra forma de escrever o código acima 
    const alreadySelected = selectedItems.findIndex(
      function (item) {
        const itemFound = item == itemId;
        return itemFound;
      }
    );
  */

  // Se já estiver selecionado, tira da seleção.
  if (alreadySelected >= 0) {
    const filteredItems = selectedItems.filter(item => item != itemId);
    selectedItems = filteredItems;
  }
  // Senão, adiciona à seleção.
  else {
    selectedItems.push(itemId)
  }

  
  // Atualiza o campo escondido com os dados
  collectedItems.value = selectedItems;
}

itemsToCollect.forEach(item => {
  item.addEventListener('click', handleSelectedItem)
})