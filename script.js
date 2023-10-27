const cartas = [
    {
      "id": 1,
      "imagem": "img/image-knight-recrutas.jpg",
      "titulo": "Soldados recrutas",
      "descricao": "Uma guilda sombria e habilidosa, especializada em furtividade e estratégia. Eles protegem os reinos. Habilidades únicas e lealdade inabalável são sua marca registrada."
    },
    {
      "id": 2,
      "imagem": "img/image-mago-necromante.jpg",
      "titulo": "Mago Necromante",
      "descricao": "Mestre das Artes Obscuras. Domina magias sombrias e necromancia, invocando mortos-vivos e manipulando almas. O Mago Necromante desafia os inimigos com suas habilidades."
    }, 
    {
      "id": 3, 
      "imagem": "img/image-mago-skeleto.jpg",
      "titulo": "Mago sombrio",
      "descricao": "Uma mago sombrio habilidoso, especializado em furtividade e estratégia. Eles protegem os reinos da escuridão. Habilidades únicas e lealdade inabaláveis são sua marca."
    },
    {
      "id": 4,
      "imagem": "img/image-paladino-alado.jpg",
      "titulo": "Paladino Alado",
      "descricao": "Armado com fé e justiça, este paladino é abençoado com asas divinas que irrompem da armadura. Ele é um símbolo de proteção e esperança, voando alto para lutar contra."
    },
    {
      "id": 5,
      "imagem": "img/image-paladino.jpg",
      "titulo": "Paladino",
      "descricao": "Defensor destemido da justiça, equipado com espada e escudo. Este paladino luta incansavelmente contra as trevas e protege os oprimidos. Sua coragem e lealdade inspira."
    },
    {
      "id": 6,
      "imagem": "img/image-shogun.jpg",
      "titulo": "Shogun",
      "descricao": "Líder imponente e destemido, comandante das artes marciais. Este Shogun é um estrategista habilidoso, pronto para enfrentar qualquer desafio. Sua coragem é uma inspiração"
    },
    {
      "id": 7, 
      "imagem": "img/image-inseto-demonio.jpg",
      "titulo": "Inseto demonio",
      "descricao": "Uma criatura grotesca e infernal, que rasteja as profundezas do submundo. Seu exoesqueleto é revestido de chamas demoníacas, e suas tendências estão sedentárias por destrui."
    },
    {
      "id": 8,
      "imagem": "img/image-espirito-floresta.jpg",
      "titulo": "Espirito sombrio selvagem",
      "descricao": "Uma entidade enigmática e guardiã da natureza oculta, envolta em sombras. Este espírito florestal canaliza o poder da floresta sombria para proteger seu lar. Com habilidades."
    }
  ]
  
  function renderizar() {
    const cardList = document.getElementById("card-list"); 
    let cartasHTML = "";
  
    cartas.forEach(item => {
      cartasHTML += `
         <div class="card">
            <img class="img-nft" src="${item.imagem}">

            <h1 class="titulo">${item.titulo} #999</h1>

            <p class="descricao">${item.descricao}</p>
        
            <div class="meio-card">
                <div class="flex-icone">
                    <img class="icons" src="img/icon-ethereum.svg">
                    <h4 class="text-ethereun">325.105 ETH</h4>
                </div>
            <div class="flex-icone">
                <img class="icons" src="img/icon-clock.svg">
                <h4 class="text-clock">1 days left</h4>
            </div>
            </div>

            <div class="footer-card">
                <img class="img-avatar" src="img/image-avatar.jpg">
                <p class="descricao">Criação de <b class="nome">Eder Amorim</b></p>
            </div>
         </div>
      `;
    });
  
    cardList.insertAdjacentHTML("beforeend", cartasHTML);
  }

  
  document.addEventListener("DOMContentLoaded", function() {
    renderizar();
  });

 