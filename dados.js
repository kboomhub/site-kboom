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
// "status": se escrever Esgotado ou Encerrado, a etiqueta fica vermelha.
// "link": endereco do ingresso ou do post. Deixe "" para nao mostrar o botao.
const EVENTOS = [
  { dia: "20", mes: "Nov", nome: "All-K Party LEVEL UP", local: "Bunker, Balneário Camboriú - SC", status: "Ingressos disponíveis", link: "https://articket.com.br/e/7326/all-k-party-level-up" },
  { dia: "19 e 20", mes: "Dez", nome: "OMAKE EDIÇÃO DE NATAL", local: "Parque Dom Bosco, Itajaí-SC", status: "Ingressos abertos", link: "https://supertixs.com/e/omakenatal2026" }
];

// ---------- 3) GALERIA (ALBUNS DE FOTOS) ----------
// Cada album e um bloco { ... }. Coloque o mais NOVO por primeiro.
// Para um album novo: crie uma pasta em "fotos", suba as fotos e copie o modelo.
// A PRIMEIRA foto da lista vira a capa do album.
//
// MODELO:
//   {
//     nome: "Nome do evento",
//     data: "Dez 2026",
//     pasta: "fotos/show-dezembro",
//     fotos: ["001.jpg", "002.jpg", "003.jpg"]
//   },
const ALBUNS = [
  {
    nome: "KPOPWEEN",
    data: "Nov 2026",
    pasta: "fotos/kpopween",
    ajuste: "contain", cor: "#f892c4",
    fotos: Array.from({ length: 60 }, (_, i) => `kpopween (${i + 1}).jpg`)
  }
];

// ---------- 4) TEXTOS DO SITE ----------
// Troque o que estiver entre aspas. Se apagar uma linha inteira, volta o texto padrao.
const TEXTOS = {
  hero_lema: "O “K” para além do pop",
  hero_sub: "Hub de fã pra fã: eventos, fotos e cultura pop em Itajaí e região.",

  eventos_titulo: "Próximos eventos",
  eventos_intro: "Anote na agenda e chame a galera.",

  galeria_titulo: "Galeria",
  galeria_intro: "Confira as fotos e faça download.",
  galeria_aviso: "Créditos: Kai e Gabi.",

  quem_titulo: "Quem somos",
  quem_p1: "O Kboom é um hub feito de fã pra fã. Nasceu pra juntar quem vive K-pop e cultura pop na cena de Itajaí e região.",
  quem_p2: "Viver eras completas é saber que tudo precisa de conceito e cuidado. Por isso a gente faz consultoria, planejamento e criação para eventos e fandoms."
};
