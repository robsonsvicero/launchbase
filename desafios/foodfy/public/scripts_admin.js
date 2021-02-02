//ADICIONAR INGREDIENTES
function addIngredient(){
  const ingredient = document.querySelector('#ingredients')
  const fieldContainer = document.querySelectorAll('.ingredient')

  //CLONA O ÚLTIMO INGREDIENTE
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

  //CASO ÚLTIMO CAMPO ESTEJA VAZIO ELE NÃO ADICIONA
  if (newField.children[0].value == "") return false

  //MANTEM O INPUT VAZIO
  newField.children[0].value = ""
  ingredient.appendChild(newField)
}

document.querySelector('.add-ingredient').addEventListener('click', addIngredient)

//ADICIONAR PREPARAÇÃO
function addPreparation(){
  const preparation = document.querySelector('#preparation')
  const fieldContainer = document.querySelectorAll('.preparation')

  //CLONA O ÚLTIMO MODO DE PREPARO
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

  //CASO ÚLTIMO CAMPO ESTEJA VAZIO ELE NÃO ADICIONA
  if (newField.children[0].value == "") return false

  //MANTEM O INPUT VAZIO
  newField.children[0].value = ""
  preparation.appendChild(newField)
}

document.querySelector('.add-preparation').addEventListener('click', addPreparation)