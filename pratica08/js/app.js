const pais = document.querySelector("#pais")

let selecionado = pais.options.selectedindex

console.log(pais.options[selecionado])

const passaporte = document.querySelector("#passaporte")

const padraoPassaporte = new RegExp("[a-zA-Z]{2}[0-9]{12}")

const enviar = document.querySelector("#enviar")
const validacaoPassaporte =document.querySelector("#validar-passaporte")



    validacaoPassaporte.classList ="validacao"


    if(padraoPassaporte.test(passaporte.value)){
        validacaoPassaporte.classList.add("valido")
        validacaoPassaporte.innerHTML ="Passaporte válido"
    }else{
        validacaoPassaporte.classList.add("invalido")
        validacaoPassaporte.innerHTML ="Passaporte inválido"
    }
    enviar.addEventListener("click",(e) =>{
        e.preventDefault()
        e.stopPropagation()
        
        addValidacaoText()
    })
    passaporte.addEventListener("keydown",(e) => {
        if(passaporte.value.length)
        passaporte.value = passaporte.value.slice

    })
   



