let campoResultados = document.getElementById("resultados")
let bhaskaraInputA = document.getElementById("bhaskara_a")
let bhaskaraInputB = document.getElementById("bhaskara_b")
let bhaskaraInputC = document.getElementById("bhaskara_c")

function limparResultados() {
    campoResultados.innerHTML = ""
}

function escreverEmResultados(texto) {
    limparResultados()
    
    campoResultados.innerHTML = texto
}

function esegundograu() {
    if (
        bhaskaraInputA.value == "" || bhaskaraInputA.value == "0"
    ) {
        return true
    }
    return false
}

function calcularResultado() {
    let preResults = ["", "", ""]
    let a = bhaskaraInputA.value
    if (a == 0) {
        preResults[0] = "Não é equação de segundo grau."
        return preResults
    } 
    let b = bhaskaraInputB.value
    let c = bhaskaraInputC.value

    let D = Math.sqrt((b ** 2) - (4 * a * c))
    if (D < 0) {
        preResults[0] = "Não existem raízes reais!"
        return preResults
    }
    preResults[1] = (-b + D)/(2*a)
    preResults[2] = (-b - D)/(2*a)
    return preResults
}

function buscarTextoResultado(resultados) {
    let texto = ""
    if (resultados[0] !== "") {
        return resultados[0]
    }
    texto += "X<sub>1</sub>: " + resultados[1] + "<br />"
    texto += "X<sub>2</sub>: " + resultados[2]
    return texto
}