const modal = document.querySelector("#modal-overlay");
const main = document.querySelector("main");
const title = document.querySelector("h1");
const btnEnviar = document.querySelector("#btn-enviar");
const pergunta1 = document.querySelector("#pergunta-1");
const pergunta2 = document.querySelector("#pergunta-2");
const pergunta3 = document.querySelector("#pergunta-3");
const pergunta4 = document.querySelector("#pergunta-4");
const respostaPergunta1 = document.querySelector("#resposta-pergunta-1");
const respostaPergunta2 = document.querySelector("#resposta-pergunta-2");
const respostaPergunta3 = document.querySelector("#resposta-pergunta-3");
const respostaPergunta4 = document.querySelector("#resposta-pergunta-4");
const correcaoPergunta1 = document.querySelector("#correcao-pergunta-1");
const correcaoPergunta2 = document.querySelector("#correcao-pergunta-2");
const correcaoPergunta3 = document.querySelector("#correcao-pergunta-3");
const correcaoPergunta4 = document.querySelector("#correcao-pergunta-4");

let contador = 0;
let interruptorModal = false;

const corretor = () => {
  if (pergunta1.value == "2") {
    contador++;
    respostaPergunta1.style.color = "green";
  }

  if (pergunta2.value == "4") {
    7;
    respostaPergunta2.style.color = "green";
    contador++;
  }

  if (pergunta3.value == "6") {
    respostaPergunta3.style.color = "green";
    contador++;
  }

  if (pergunta4.value == "8") {
    respostaPergunta4.style.color = "green";
    contador++;
  }

  if (contador == 0) {
    main.style.backgroundColor = "red";
    title.textContent = "Que pena você errou todas !";
  } else if (contador > 0 && contador < 4) {
    main.style.backgroundColor = "yellow";
    title.textContent = "Poderia ser melhor você acertou " + contador + " !";
  } else {
    main.style.backgroundColor = "green";
    title.textContent = "Parabéns você gabaritou !";
  }

  escondeInput();
  switchModal();
  btnEnviar.style.visibility = "hidden";
  mostraResposta();
};

const switchModal = () => {
  interruptorModal = !interruptorModal;
  modal.style.display = interruptorModal ? "flex" : "none";
};

const mostraResposta = () => {
  respostaPergunta1.textContent =
    pergunta1.value == ""
      ? "Você não respondeu"
      : " Você respondeu: " + pergunta1.value;

  respostaPergunta2.textContent =
    pergunta2.value == ""
      ? "Você não respondeu"
      : " Você respondeu: " + pergunta2.value;

  respostaPergunta3.textContent =
    pergunta3.value == ""
      ? "Você não respondeu"
      : " Você respondeu: " + pergunta3.value;

  respostaPergunta4.textContent =
    pergunta4.value == ""
      ? "Você não respondeu"
      : " Você respondeu: " + pergunta4.value;

  correcaoPergunta1.textContent = "Reposta correta é: 2";
  correcaoPergunta2.textContent = "Reposta correta é: 4";
  correcaoPergunta3.textContent = "Reposta correta é: 6";
  correcaoPergunta4.textContent = "Reposta correta é: 8";
};

const escondeInput = () => {
  pergunta1.style.display = "none";
  pergunta2.style.display = "none";
  pergunta3.style.display = "none";
  pergunta4.style.display = "none";
};
const reiniciar = () => {
  contador = 0;
  title.textContent = "Responda se for capaz...";
  main.style.backgroundColor = "purple";
  btnEnviar.style.visibility = "visible";

  // Limpa as respostas
  pergunta1.value = "";
  pergunta2.value = "";
  pergunta3.value = "";
  pergunta4.value = "";

  // Mostra os inputs novamente
  pergunta1.style.display = "block";
  pergunta2.style.display = "block";
  pergunta3.style.display = "block";
  pergunta4.style.display = "block";

  respostaPergunta1.textContent = "";
  respostaPergunta2.textContent = "";
  respostaPergunta3.textContent = "";
  respostaPergunta4.textContent = "";
  correcaoPergunta1.textContent = "";
  correcaoPergunta2.textContent = "";
  correcaoPergunta3.textContent = "";
  correcaoPergunta4.textContent = "";
};
