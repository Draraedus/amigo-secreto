//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let amigoSorteado = '';

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo");
  if(amigoSorteado !== '') {
    reiniciarSorteio();
  }
  if (nomeAmigo.value === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(nomeAmigo.value);
  nomeAmigo.value = "";
  atualizarListarAmigos();
}

function atualizarListarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    let amigoParaLista = criarElementoAmigo(amigo)
    listaAmigos.appendChild(amigoParaLista);
  });
}

function criarElementoAmigo(nomeDoAmigo) {
    const elementoAmigo = document.createElement("li");
    elementoAmigo.id = nomeDoAmigo;
    elementoAmigo.style.display = "flex";
    elementoAmigo.style.justifyContent = "space-between";
    elementoAmigo.style.alignItems = "center";

    const paragrafoNomeAmigo = document.createElement("p");
    paragrafoNomeAmigo.textContent = nomeDoAmigo;
    elementoAmigo.appendChild(paragrafoNomeAmigo);

    const botaoRemoverAmigo = document.createElement("button");
    botaoRemoverAmigo.textContent = "X";
    botaoRemoverAmigo.style.backgroundColor = "transparent";
    botaoRemoverAmigo.style.border = "none";
    botaoRemoverAmigo.style.boxShadow = "none";
    botaoRemoverAmigo.style.color = "red";

    botaoRemoverAmigo.onclick = function () {
        removerElementoAmigo(nomeDoAmigo);
    };

    elementoAmigo.appendChild(botaoRemoverAmigo);

    return elementoAmigo;
}

function removerElementoAmigo(nomeDoAmigo) {
  amigos = amigos.filter((amigo) => amigo !== nomeDoAmigo);
  atualizarListarAmigos();
}

function sortearAmigo() {
  let tamanhoListaAmigos = amigos.length;
  let listarAmigoSorteado = document.getElementById("resultado");
  if (tamanhoListaAmigos === 0) {
    alert("Por favor, adicione amigos para sortear.");
    return;
  }
    let numeroAmigoSorteado = Math.floor(Math.random() * tamanhoListaAmigos);
    amigoSorteado = amigos[numeroAmigoSorteado];
    listarAmigoSorteado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
    amigos = [];
    atualizarListarAmigos();
}


function reiniciarSorteio() {
  let listarAmigoSorteado = document.getElementById("resultado");
  listarAmigoSorteado.innerHTML = "";
  amigoSorteado = '';
}