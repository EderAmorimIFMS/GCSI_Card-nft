const cartas = [
    {
      "id": 1,
      "imagem": "img/image-knight-recrutas.jpg",
      "titulo": "Soldado #001",
      "descricao": "Uma guilda sombria e habilidosa, especializada em furtividade e estratégia. Eles protegem os reinos. Habilidades únicas e lealdade inabalável são sua marca registrada.",
      "valor": "50.1",
      "data": "1 dias left"
    },
    {
      "id": 2,
      "imagem": "img/image-mago-necromante.jpg",
      "titulo": "Necro Mago #002",
      "descricao": "Mestre das Artes Obscuras. Domina magias sombrias e necromancia, invocando mortos-vivos e manipulando almas. O Mago Necromante desafia os inimigos com suas habilidades.",
      "valor": "100.2",
      "data": "5 dias left"
    }, 
    {
      "id": 3, 
      "imagem": "img/image-mago-skeleto.jpg",
      "titulo": "Mago Sombrio #003",
      "descricao": "Uma mago sombrio habilidoso, especializado em furtividade e estratégia. Eles protegem os reinos da escuridão. Habilidades únicas e lealdade inabaláveis são sua marca.",
      "valor": "250.3",
      "data": "9 dias left"
    },
    {
      "id": 4,
      "imagem": "img/image-paladino-alado.jpg",
      "titulo": "Aniquilador #004",
      "descricao": "Armado com fé e justiça, este paladino é abençoado com asas divinas que irrompem da armadura. Ele é um símbolo de proteção e esperança, voando alto para lutar contra.",
      "valor": "250.4",
      "data": "3 dias left"
    },
    {
      "id": 5,
      "imagem": "img/image-paladino.jpg",
      "titulo": "Paladino #005",
      "descricao": "Defensor destemido da justiça, equipado com espada e escudo. Este paladino luta incansavelmente contra as trevas e protege os oprimidos. Sua coragem e lealdade inspira.",
      "valor": "50.5",
      "data": "1 dias left" 
    },
    {
      "id": 6,
      "imagem": "img/image-shogun.jpg",
      "titulo": "Shogun #006",
      "descricao": "Líder imponente e destemido, comandante das artes marciais. Este Shogun é um estrategista habilidoso, pronto para enfrentar qualquer desafio. Sua coragem é uma inspiração",
      "valor": "200.6",
      "data": "5 dias left"
    },
    {
      "id": 7, 
      "imagem": "img/image-inseto-demonio.jpg",
      "titulo": "Inseto Demonio #007",
      "descricao": "Uma criatura grotesca e infernal, que rasteja as profundezas do submundo. Seu exoesqueleto é revestido de chamas demoníacas, e suas tendências estão sedentárias por destrui.",
      "valor": "150.7",
      "data": "7 dias left"
    },
    {
      "id": 8,
      "imagem": "img/image-espirito-floresta.jpg",
      "titulo": "Espirito Selvagem #008",
      "descricao": "Uma entidade enigmática e guardiã da natureza oculta, envolta em sombras. Este espírito florestal canaliza o poder da floresta sombria para proteger seu lar. Com habilidades.",
      "valor": "250.8",
      "data": "4 dias left"
    }
  ]
  
  function renderizar() {
    const cardList = document.getElementById("card-list"); 
    let cartasHTML = "";
  
    cartas.forEach(item => {
      cartasHTML += `
         <div class="card">
            <img class="img-nft" src="${item.imagem}">

            <h1 class="titulo">${item.titulo}</h1>

            <p class="descricao">${item.descricao}</p>
        
            <div class="meio-card">
                <div class="flex-icone">
                    <img class="icons" src="img/icon-ethereum.svg">
                    <h4 class="text-ethereun">${item.valor} ETH</h4>
                </div>
            <div class="flex-icone">
                <img class="icons" src="img/icon-clock.svg">
                <h4 class="text-clock">${item.data}</h4>
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

 
