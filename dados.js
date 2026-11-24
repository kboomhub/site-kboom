// ==========================================================================
//  KBOOM - DADOS DO SITE
//  Abra este arquivo no Bloco de Notas (ou VS Code) e edite os textos.
//  CUIDADO: nao apague as aspas "", as virgulas , nem as chaves { }.
// ==========================================================================

// ---------- 1) REDES SOCIAIS E CONTATO ----------
// Deixe "" (vazio) para esconder o icone.
const CONFIG = {
  instagram: "https://www.instagram.com/kboomhub",
  tiktok: "https://www.tiktok.com/@kboomhub",
  youtube: "https://youtube.com/@kboomhub",
  x: "https://x.com/kboomhub",
  whatsapp: "https://wa.me/5547999163504",
  grupo: "https://chat.whatsapp.com/LSEOeWfsA5uKIoLtRunnky",
  email: ""   // so o endereco, ex.: "contato@email.com"
};

// ---------- 2) PROXIMOS EVENTOS ----------
// Cada evento e um bloco { ... }, separado por virgula.
// Para ADICIONAR: copie um bloco inteiro, cole abaixo e troque os textos.
// Para REMOVER: apague o bloco inteiro (com a virgula).
// "status": e o texto do botao (ex: Ingressos disponíveis). Se escrever Esgotado ou Encerrado, o botao some e aparece uma etiqueta vermelha.
// "link": endereco do ingresso ou do post. Deixe "" para nao mostrar o botao.
const EVENTOS = [
  { dia: "20", mes: "Nov", data: "2026-11-20", nome: "All-K Party LEVEL UP", local: "Bunker, Balneário Camboriú - SC", status: "Ingressos disponíveis", link: "https://articket.com.br/e/7326/all-k-party-level-up" },
  { dia: "19 e 20", mes: "Dez", data: "2026-12-19", fim: "2026-12-20", nome: "OMAKE EDIÇÃO DE NATAL", local: "Parque Dom Bosco, Itajaí-SC", status: "Ingressos disponíveis", link: "https://supertixs.com/e/omakenatal2026" }
];

// ---------- 3) GALERIA (ALBUNS DE FOTOS) ----------
// Cada album e um bloco { ... }. Coloque o mais NOVO por primeiro.
// Para um album novo: crie uma pasta em "fotos", suba as fotos e copie o modelo.
// A capa do album e a PRIMEIRA foto da lista, a nao ser que voce escolha outra com "capa":
//   capa: 12                  -> usa a foto numero 12 da lista (sem renomear nada)
//   capa: "capa.jpg"          -> usa um arquivo que esta na pasta do album
// Foto deitada preenche a capa inteira sozinha; foto em pe aparece inteira sobre a cor do album.
// Opcionais: ajuste_capa: "cover" (sempre preencher) ou "contain" (sempre inteira);
//            capa_foco: "50% 20%" (muda a parte que aparece quando a foto e cortada: esquerda-direita, cima-baixo).
//
// MODELO:
//   {
//     nome: "Nome do evento",
//     data: "Dez 2026",
//     pasta: "fotos/show-dezembro",
//     capa: 5,
//     fotos: ["001.jpg", "002.jpg", "003.jpg"]
//   },
const ALBUNS = [
  {
    nome: "KPOPWEEN",
    data: "Nov 2026",
    pasta: "fotos/kpopween",
    ajuste: "contain", cor: "#c32337",
    fotos: Array.from({ length: 92 }, (_, i) => `kpopween (${i + 1}).jpg`)
  },
  {
    nome: "OMAKE DE INVERNO",
    data: "Ago 2026",
    pasta: "fotos/omake-inverno",
    capa: 1,
    ajuste_capa:"contain",
    ajuste: "contain", cor: "#8fd3ff",
    fotos: Array.from({ length: 115 }, (_, i) => `omake-inverno (${i + 1}).jpg`)
  },
   {
    nome: "ALL-K PARTY: DEBUT EDITION",
    data: "Ago 2026",
    pasta: "fotos/allkdebut",
    capa: 15,
    ajuste_capa:"contain",
    ajuste: "contain", cor: "#5b31ff",
    fotos: Array.from({ length: 25 }, (_, i) => `allkdebut (${i + 1}) .jpg`)
  }
];

// ---------- 4) TEXTOS DO SITE ----------
// Troque o que estiver entre aspas. Se apagar uma linha inteira, volta o texto padrao.
const TEXTOS = {
  titulo_aba: "KBOOM | Hub de K-pop em Itajaí",
  hero_lema: "O “K” para além do pop",
  hero_sub: "Hub de fã pra fã: eventos, música e cultura K-pop em Itajaí e região.",

  eventos_titulo: "Próximos eventos",
  eventos_intro: "Anote na agenda e chame a galera.",

  galeria_titulo: "Galeria",
  galeria_intro: "Confira as fotos e faça download.",
  galeria_aviso: "Créditos: Kai e Gabi.",

  inscricoes_titulo: "Inscrições",
  inscricoes_intro: "Garanta sua vaga: é só clicar e preencher o formulário.",

  torcida_titulo: "Todo fandom cabe aqui",
  torcida_texto: "Qual é o seu lightstick?",

  quem_titulo: "Quem somos",
  quem_p1: "O Kboom é um hub feito de fã pra fã. Nasceu pra juntar quem vive K-pop e cultura pop na cena de Itajaí e região.",
  quem_p2: "Viver eras completas é saber que tudo precisa de conceito e cuidado. Por isso a gente faz consultoria, planejamento e criação para eventos e fandoms."
};

// ===== INSCRIÇÕES (links dos formulários do Google) =====
// Para adicionar: copie um bloco { ... }, cole abaixo (com vírgula no final) e troque os textos.
// Para remover: apague o bloco inteiro. Sem nenhum bloco, aparece "abrem em breve".
// status: "Abertas" ou "Encerradas" (se for Encerradas, o botão some).
const INSCRICOES = [
  {
    nome: "Concurso K-pop Cover Dance — OMAKE 2026",
    descricao: "20 de dezembro às 17h30 · Parque Dom Bosco, Rua José Gall, 75 · Itajaí/SC",
    dia: "20",
    mes: "Dez",
    data: "2026-12-20",   // dia do evento (aparece "Adicionar à agenda")
    hora: "17:30",        // opcional
    local: "Parque Dom Bosco, Rua José Gall, 75 - Itajaí/SC",
    // ate: "2026-12-10",   // opcional: último dia das inscrições. Depois dele fecha sozinho.
    status: "Abertas",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfIibRn09ZeLt7Phz3RAiayqtbjTt9Jlob_oVFHSxsEJECRMA/viewform"
  },
  // Para adicionar outra inscrição (dia e mes aparecem na faixa colorida, como nos eventos), copie o bloco acima, cole aqui e troque os textos.
];
