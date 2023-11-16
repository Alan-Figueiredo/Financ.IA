const ativos = [
  "TGAR11.SA",
  "VGIR11.SA",
  "MXRF11.SA",
  "HGLG11.SA",
  "IRDM11.SA",
  "BRCR11.SA",
  "BTLG11.SA",
  "ativo8",
  "ativo9",
  "ativo10",
];
const seletorAtivos = document.getElementById("seletorAtivos");
const btnEnviar = document.getElementById("btnEnviar");



for(let i = 0; i < ativos.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.text = ativos[i];
    seletorAtivos.appendChild(option);
}

const seletorEmail = document.getElementById("seletorEmail");
const divEmail = document.getElementById("divEmail");


seletorEmail.addEventListener("change", function() {
    if (seletorEmail.value === "Sim") {
        divEmail.style.display = "block";
    } else {
        divEmail.style.display = "none";
    }
});

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    const inputEmail = document.getElementById("inputEmail").value;
    const inputData = document.getElementById("inputData").value;
    const select_email = seletorEmail.options[seletorEmail.selectedIndex].value;
    const select_ativos = seletorAtivos.options[seletorAtivos.selectedIndex].text;
    console.log(inputData);
    console.log(inputEmail);
    console.log(select_ativos);
    console.log(select_email);
    enviar_dados(inputData,inputEmail,select_ativos,select_email);
})

function enviar_dados(data,email,ativo,email_decision){

    const dados = {
      data_select: data,
      email_select: email,
      ativo_select: ativo,
      email_desicion: email_decision,
    };

    let url = "http://127.0.0.1:5000/api/previsao";
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
