let skins = [
  { nome: "Anciã Vandal", arma: "Vandal", colecao: "Anciã", preco: 1775, efeitos: true, animacao: false },
  { nome: "Saqueador Vandal", arma: "Vandal", colecao: "Saqueador", preco: 1775, efeitos: true, animacao: true },
  { nome: "Glitchpop Phantom", arma: "Phantom", colecao: "Glitchpop", preco: 2175, efeitos: true, animacao: true },
  { nome: "Singularidade Phantom", arma: "Phantom", colecao: "Singularidade", preco: 2175, efeitos: true, animacao: true },
  { nome: "Cimitarra Faca", arma: "Faca", colecao: "Cimitarra", preco: 1750, efeitos: false, animacao: false },
  { nome: "Oni Phantom", arma: "Phantom", colecao: "Oni", preco: 1775, efeitos: true, animacao: true },
  { nome: "Dragão Vandal", arma: "Vandal", colecao: "Anciã", preco: 2475, efeitos: true, animacao: true },
  { nome: "Neo Oeste Sheriff", arma: "Sheriff", colecao: "Neo Oeste", preco: 1775, efeitos: true, animacao: false }
];

let armaDesejada;
let querEfeitos, querAnimacao;
let skinsRecomendadas = [];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Skins de Valorant", 20, 30);

  armaDesejada = prompt("Para qual arma você gostaria de uma skin? (Ex: Vandal, Phantom, Faca)").toLowerCase();
  querEfeitos = prompt("Você quer skins com efeitos visuais e sonoros? (sim/não)").toLowerCase() === "sim";
  querAnimacao = prompt("Você quer skins com animação de inspeção? (sim/não)").toLowerCase() === "sim";

  for (let skin of skins) {
    if (skin.arma.toLowerCase() === armaDesejada) {
      if ((querEfeitos && skin.efeitos) || !querEfeitos) { // Se quer efeitos, verifica se a skin tem; se não quer, qualquer skin serve
        if ((querAnimacao && skin.animacao) || !querAnimacao) { // Mesma lógica para animação
          skinsRecomendadas.push(skin.nome);
        }
      }
    }
  }

  if (skinsRecomendadas.length > 0) {
    text("Skins recomendadas para você:", 20, 70);
    for (let i = 0; i < skinsRecomendadas.length; i++) {
      text("- " + skinsRecomendadas[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhuma skin encontrada com suas preferências.", 20, 70);
  }
}
