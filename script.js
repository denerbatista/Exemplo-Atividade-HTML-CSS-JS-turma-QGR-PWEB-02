const modal = document.querySelector("#modal-overlay");
const main = document.querySelector("main");
const title = document.querySelector("h1");
const btnEnviar = document.querySelector("#btn-enviar");
const pergunta1 = document.querySelector("#pergunta-1");
const pergunta2 = document.querySelector("#pergunta-2");
const pergunta3 = document.querySelector("#pergunta-3");
const pergunta4 = document.querySelector("#pergunta-4");
let contador = 0;
let interruptorModal = false;

const corretor = () => {
  if (pergunta1.value == "2") {
    contador++;
  }

  if (pergunta2.value == "4") {
    contador++;
  }

  if (pergunta3.value == "6") {
    contador++;
  }

  if (pergunta4.value == "8") {
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

  btnEnviar.style.visibility = "hidden";
  switchModal();
};

const switchModal = () => {
  interruptorModal = !interruptorModal;
  modal.style.display = interruptorModal ? "flex" : "none";
};

const reiniciar = () => {
  contador = 0;
  title.textContent = "Responda se for capaz...";
  main.style.backgroundColor = "purple";
  btnEnviar.style.visibility = "visible";
  pergunta1.value = "";
  pergunta2.value = "";
  pergunta3.value = "";
  pergunta4.value = "";
};
