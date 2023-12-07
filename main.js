

const chave = "a3bd26f69815a360d24b73570b5c2206"

function dadosTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Clima em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".previsao").innerHTML = dados.weather [0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade){
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
dadosTela(dados)
}

function toqueinalupa() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}