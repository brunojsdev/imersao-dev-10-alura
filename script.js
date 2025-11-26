document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("botao-busca");
  const cardContainer = document.querySelector(".card-container");

  const header = document.querySelector("header");
  let allPokemons = [];

  // 1. Carrega os dados do arquivo JSON
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      allPokemons = data;
      displayPokemons(allPokemons); // Exibe todos os Pokémons inicialmente
    })
    .catch((error) => {
      console.error("Erro ao carregar os dados dos Pokémons:", error);
      cardContainer.innerHTML =
        "<p>Não foi possível carregar os dados dos Pokémons. Tente novamente mais tarde.</p>";
    });

  // Cria e insere o botão de tema
  const h1 = document.querySelector("header h1");
  if (h1) {
    const themeButton = document.createElement("button");
    themeButton.textContent = "Tema";
    themeButton.className = "theme-toggle-button";
    // Adiciona a funcionalidade de troca de tema
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
    });
    h1.insertAdjacentElement("afterend", themeButton);
  }

  // 2. Função para exibir os cards dos Pokémons
  function displayPokemons(pokemons) {
    cardContainer.innerHTML = ""; // Limpa os resultados anteriores

    if (pokemons.length === 0) {
      cardContainer.innerHTML =
        "<p>Nenhum Pokémon encontrado com o termo pesquisado.</p>";
      return;
    }

    pokemons.forEach((pokemon) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <h2>${pokemon.nome} </h2> 
        <p><strong>Tipo:</strong> ${pokemon.tipo}</p>
        <p><strong>Introdução:</strong> ${pokemon.geração}ª Geração</p>
        <p><strong>Número da Pokedéx:</strong> ${pokemon.numero}</p>              
        <p><strong>Descrição:</strong> ${pokemon.descrição}</p>
        <a href="${pokemon.link}" target="_blank" rel="noopener noreferrer">Saiba mais sobre esse Pokemon</a>
      `;
      cardContainer.appendChild(card);
    });
  }

  // 3. Função para realizar a busca
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredPokemons = allPokemons.filter(
      (pokemon) =>
        pokemon.nome.toLowerCase().includes(searchTerm) ||
        pokemon.tipo.toLowerCase().includes(searchTerm) ||
        String(pokemon.geração).includes(searchTerm) // Busca pela geração
    );
    displayPokemons(filteredPokemons);
  }

  // 4. Adiciona os eventos de clique e tecla Enter
  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
});
