const cartas = [
  {
    "id": 1,
    "imagem": "img/image-knight-recrutas.jpg",
    "titulo": "Soldados recrutas",
    "descricao": "Uma guilda sombria e habilidosa, especializada em furtividade e estratégia. Sob a liderança do enigmático Grão-Mestre das Sombras, eles protegem os reinos da escuridão. Habilidades únicas e lealdade inabalável são sua marca registrada."
  },
  {
    "id": 2,
    "imagem": "img/image-mago-necromante.jpg",
    "titulo": "Mago Necromante",
    "descricao": "Mestre das Artes Obscuras. Domina magias sombrias e necromancia, invocando mortos-vivos e manipulando almas. Poderoso, mas perigoso, o Mago Necromante controla a vida e a morte em seu bel-prazer, desafiando inimigos com suas habilidades sinistras."
  }, 
  {
    "id": 3, 
    "imagem": "img/image-mago-skeleto.jpg",
    "titulo": "Mago sombrio",
    "descricao": "Uma mago sombrio habilidoso, especializado em furtividade e estratégia. Sob a liderança do enigmático Grão-Mestre das Sombras, eles protegem os reinos da escuridão. Habilidades únicas e lealdade inabaláveis ​​são sua marca registrada."
  },
  {
    "id": 4,
    "imagem": "img/image-paladino-alado.jpg",
    "titulo": "Paladino Alado",
    "descricao": "Armado com fé e justiça, este paladino é abençoado com asas divinas que irrompem da armadura. Ele é um símbolo de proteção e esperança, voando alto para lutar contra o mal. Sua devoção o torna uma força imparável no campo de batalha."
  },
  {
    "id": 5,
    "imagem": "img/image-paladino.jpg"
    "titulo": "Paladino comun",
    "descricao": "Defensor destemido da justiça, equipado com espada e escudo. Este paladino luta incansavelmente contra as trevas e protege os oprimidos. Sua coragem e lealdade inspiram aliados e são uma força constante no combate contra o mal."
  },
  {
    "id": 6,
    "imagem": "img/image-shogun.jpg"
    "titulo": "Shogun destemido",
    "descricao": "Líder imponente e destemido, comandante das artes marciais. Este Shogun é um estrategista habilidoso, pronto para enfrentar qualquer desafio. Sua coragem é uma inspiração para seus seguidores, e sua perícia no combate é emprestada, tornando-o um líder formidável no campo de batalha."
  }  {
    "id": 7, 
    "imagem": "img/image-inseto-demonio.jpg"
    "titulo": "Inseto demonio",
    "descricao": "Uma criatura grotesca e infernal, que rasteja as profundezas do submundo. Seu exoesqueleto é revestido de chamas demoníacas, e suas tendências estão sedentárias por destruição. Este é perverso encarnando o horror e a corrupção, lançando uma sombra sinistra sobre o campo de batalha."
  },
  {
    "id": 8,
    "imagem": "img/image-espirito-floresta.jpg",
    "titulo": "Espirito sombrio selvagem",
    "descricao": "Uma entidade enigmática e guardiã da natureza oculta, envolta em sombras. Este espírito florestal canaliza o poder da floresta sombria para proteger seu lar. Com habilidades mágicas e instintos selvagens, ele é uma força imprevisível e feroz no coração da escuridão da floresta."
  }
]

function renderizar() {
  const container = document.getElementById("card-list"); 
  let cartasHTML = "";

  cartas.forEach(item => {
    cartasHTML += `
      <div class="card">
        <img class="img-nft" src="${item.imagem}">
        <p class="titulo">${item.titulo}</p>
        <p class="texto">${item.descricao}</p>
      </div>
    `;
  });

  container.insertAdjacentHTML("beforeend", cartasHTML);
}

renderizar()
