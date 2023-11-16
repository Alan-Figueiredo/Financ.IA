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

for (let i = 0; i < ativos.length; i++) {
  const option = document.createElement("option");
  option.value = i + 1;
  option.text = ativos[i];
  seletorAtivos.appendChild(option);
}

const meses = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21,
  22, 23, 24,
];
const seletorMeses = document.getElementById("seletorMeses");

for (let i = 1; i <= meses.length; i++) {
  const option = document.createElement("option");
  option.value = i * 30;
  option.text = meses[i - 1];
  seletorMeses.appendChild(option);
}

const inputPrecoMed = document.getElementById("inputPrecoMed");

btnEnviar.addEventListener("click", function (e) {
  e.preventDefault();
  const select_ativos = seletorAtivos.options[seletorAtivos.selectedIndex].text;
  const input_preco_med = inputPrecoMed.value;
  const select_dias = seletorMeses.options[seletorAtivos.selectedIndex].value;
  console.log(select_ativos);
  console.log(input_preco_med);
  console.log(select_dias);
  enviar_dados(select_ativos, input_preco_med, select_dias);
});

function enviar_dados(ativo, precoMedio, dias) {
  const dados = {
    ativo_select: ativo,
    precoMed_input: precoMedio,
    dias_select: dias,
  };

  let url = "http://127.0.0.1:5000/api/compra_e_venda";
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  })
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log("Erro " + e);
    });
}
