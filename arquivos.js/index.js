const button = document.querySelector(".advice-update")
const numeroID = document.querySelector(".advice-id")
const recado = document.querySelector(".advice-description")

async function trocarRecado(){
    const resposta = await fetch("https://api.adviceslip.com/advice")
    const conteudo = await resposta.json()
    const descricaoDoId = `Advice #${conteudo.slip.id}` 
    const addText = `"${conteudo.slip.advice}"`
    

    numeroID.innerHTML = descricaoDoId
    recado.innerHTML = addText
}

button.addEventListener("click", trocarRecado)

trocarRecado()