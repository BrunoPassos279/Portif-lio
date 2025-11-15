const linguagens = {
  html: { exp: "5 Meses", tipo: "Acadêmico / Profissional", nivel: "Intermediário", diferencial: "Boas práticas e semântica", img: "/src/assets/icons/html-colorida.svg" },
  css: { exp: "5 Meses", tipo: "Acadêmico / Profissional", nivel: "Intermediário", diferencial: "Estilização avançada", img: "/src/assets/icons/css-colorida.svg" },
  js: { exp: "3 Meses", tipo: "Acadêmico", nivel: "Básico", diferencial: "Lógica", img: "/src/assets/icons/javascript-colorida.svg" }
};

const botoes = document.querySelectorAll(".circulo-lingua");
const exp = document.getElementById("lang-exp");
const tipo = document.getElementById("lang-tipo");
const nivel = document.getElementById("lang-nivel");
const diferencial = document.getElementById("lang-diferencial");
const imagem = document.querySelector(".content-ling > img");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const lang = botao.dataset.lang;

    botoes.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    atualizarTexto(exp, linguagens[lang].exp);
    atualizarTexto(tipo, linguagens[lang].tipo);
    atualizarTexto(nivel, linguagens[lang].nivel);
    atualizarTexto(diferencial, linguagens[lang].diferencial);
    atualizarImagem(imagem, linguagens[lang].img);
  });
});

function atualizarTexto(elemento, novoTexto) {
    elemento.style.opacity = 0;     
    elemento.style.transform = "translateY(-5px)"; 
    setTimeout(() => {
        elemento.textContent = novoTexto;
        elemento.style.opacity = 1;   
        elemento.style.transform = "translateY(0)";
    }, 150); 
}

function atualizarImagem(elemento, novoSrc) {
    elemento.style.opacity = 0;             
    elemento.style.transform = "scale(0.95)"; 
    setTimeout(() => {
        elemento.src = novoSrc;              
        elemento.style.opacity = 1;          
        elemento.style.transform = "scale(1)";
    }, 150); 
}

const toggle = document.getElementById("toggle-skills");
const cardTitle = document.getElementById("card-title");
const cardList = document.getElementById("card-list");

const softSkills = [
  "Comunicação",
  "Trabalho em equipe",
  "Proatividade",
  "Autodidata",
  "Responsabilidade",
  "Adaptabilidade",
  "Organização",
  "Aprendizado contínuo"
];

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Photoshop",
  "Git",
  "produção de vídeo",
  "Figma",
  "Inglês (Básico)"
];

toggle.addEventListener("change", () => {
  if(toggle.checked) {
    atualizarConteudo(cardTitle, "Skills");
    atualizarLista(cardList, skills);
  } else {
    atualizarConteudo(cardTitle, "Soft Skills");
    atualizarLista(cardList, softSkills);
  }
});

function atualizarConteudo(elemento, novoTexto) {
  elemento.style.opacity = 0;
  elemento.style.transform = "translateY(-5px)";
  setTimeout(() => {
    elemento.textContent = novoTexto;
    elemento.style.opacity = 1;
    elemento.style.transform = "translateY(0)";
  }, 150);
}

function atualizarLista(elemento, novoArray) {
  elemento.style.opacity = 0;
  elemento.style.transform = "translateY(-5px)";
  setTimeout(() => {
    elemento.innerHTML = novoArray.map(item => `<li>${item}</li>`).join("");
    elemento.style.opacity = 1;
    elemento.style.transform = "translateY(0)";
  }, 150);
}
