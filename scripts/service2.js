const ativos = ["ativo1", "ativo2", "ativo3", "ativo4", "ativo5", "ativo6", "ativo7", "ativo8", "ativo9", "ativo10"];
const seletorAtivos = document.getElementById("seletorAtivos");

for(let i = 0; i < ativos.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.text = ativos[i];
    seletorAtivos.appendChild(option);
}

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    const select_ativos = seletorAtivos.options[seletorAtivos.selectedIndex].text;
    console.log(select_ativos);
    enviar_dados(select_ativos);
})

function enviar_dados(ativo){

    const dados = {
      ativo_select: ativo
    };

    let url = "http://127.0.0.1:5000/api/venda_futura";
    fetch(url,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
    })
    .catch((e) => {
        console.log("Erro " + e)
    })
}
