# Pokédex - Base de Conhecimento

Bem-vindo à Base de Conhecimento Pokémon! Este é um projeto de front-end que exibe uma lista de Pokémon, permitindo que os usuários pesquisem e visualizem informações detalhadas sobre eles. A interface é limpa, responsiva e inclui um seletor de tema (claro/escuro).

## ✨ Funcionalidades

- **Listagem de Pokémon**: Exibe uma lista de Pokémon com nome, tipo, número e descrição.
- **Busca Dinâmica**: Filtra os Pokémon em tempo real conforme o usuário digita no campo de busca.
- **Tema Claro e Escuro**: Permite ao usuário alternar entre um tema claro e um escuro para melhor conforto visual.
- **Design Responsivo**: A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Links Externos**: Cada card de Pokémon contém um link para sua página correspondente no [PokémonDB](https://pokemondb.net/pokedex), para informações mais aprofundadas.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização, layout flexbox, variáveis CSS para temas e media queries para responsividade.
- **JavaScript (Vanilla)**: Manipulação do DOM, busca de dados (fetch), implementação da funcionalidade de pesquisa e troca de tema.
- **JSON**: Armazenamento dos dados dos Pokémon.

## 📂 Estrutura do Projeto

```
base-de-conhecimento/
├── 📄 data.json         # Arquivo com os dados dos Pokémon
├── 📄 index.html        # Arquivo principal da aplicação (Estrutura HTML)
├── 📄 script.js         # Lógica da aplicação (Busca, tema, etc.)
├── 📄 style.css         # Estilos da página
└── 📄 README.md          # Este arquivo
```

## 🚀 Como Executar

Como este é um projeto front-end puro, você não precisa de um servidor complexo para executá-lo.

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd base-de-conhecimento
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

    > **Dica**: Para uma melhor experiência, especialmente com a função `fetch` para carregar o `data.json`, é recomendado usar uma extensão como o **Live Server** no Visual Studio Code.

## 🎨 Design e Estilo

O design foi construído com foco na simplicidade e usabilidade.

- **Fonte**: Utiliza a fonte `Quicksand` do Google Fonts para uma aparência moderna e amigável.
- **Temas**: O sistema de temas é implementado com variáveis CSS (`:root` e `.light-theme`), permitindo uma troca fácil e eficiente de cores em toda a aplicação.
- **Ícones**: Os botões de busca e de troca de tema utilizam imagens de Pokébolas, adicionando um toque temático à interface.
- **Responsividade**: Media queries são usadas para ajustar o layout do cabeçalho, da busca e do rodapé em telas menores (`max-width: 768px` e `max-width: 480px`), garantindo uma boa experiência em dispositivos móveis.

## 🔮 Próximos Passos (Sugestões)

- [ ] Adicionar mais Pokémon ao `data.json`.
- [ ] Implementar paginação para lidar com uma grande quantidade de dados.
- [ ] Adicionar filtros por tipo ou geração.
- [ ] Criar uma página de detalhes para cada Pokémon dentro da própria aplicação.
- [ ] Adicionar animações e transições para uma experiência mais fluida.

---

_Este projeto foi criado para fins de estudo e prática de desenvolvimento web._

_Desenvolvido por Bruno JS._

---
