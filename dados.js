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
  { dia: "19 e 20", mes: "Dez", nome: "OMAKE EDIÇÃO DE NATAL ", local: "Parque Dom Bosco, Itajaí-SC", status: "Ingressos abertos", link: "https://supertixs.com/e/omakenatal2026" }
];

// ---------- 3) GALERIA (ALBUNS DE FOTOS) ----------
// Cada album e um bloco { ... }. Coloque o mais NOVO por primeiro.
// Passo a passo para um album novo:
//   a) crie uma pasta dentro de "fotos", ex.: fotos/show-dezembro
//   b) coloque la as fotos (JPG, ate uns 1600 px, nomes simples sem acento)
//   c) copie o modelo abaixo e troque nome, data, pasta e a lista de fotos
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
  // 
  {
    nome: "KPOPWEEN",
    data: "Nov 2026",
    pasta: "fotos/kpopween",
    ajuste: "contain", cor: "#f892c4",
    fotos: Array.from({ length: 60 }, (_, i) => `kpopween (${i + 1}).jpg`)
  },

  },
  {
    nome: "Evento de exemplo B",
    data: "Out 2026",
    pasta: "fotos/exemplo-b",
    ajuste: "contain", cor: "#c4cf31",
    fotos: ["01.webp", "02.webp"]
  }
];
