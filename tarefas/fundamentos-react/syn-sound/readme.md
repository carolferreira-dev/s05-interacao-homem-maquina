# 🎵 Syn Sound

Aplicação web de música feita em **React** durante a atividade **Fundamentos de React** da disciplina **S05 – Interação Homem-Máquina** (Inatel). O app consome a API pública do **Deezer** para mostrar as músicas em alta, buscar faixas, filtrar por gênero e ouvir um preview de 30 segundos.

| | |
|---|---|
| **Disciplina** | S05 – Interação Homem-Máquina |
| **Atividade** | Fundamentos de React (4 aulas em vídeo) |
| **Aluna** | Caroline Ferreira de Souza |

---

## ✨ Funcionalidades

- **Músicas em alta:** a página inicial lista as 40 faixas mais tocadas do momento.
- **Busca:** campo para procurar músicas ou artistas.
- **Filtro por gênero:** Todos, Pop, Rap/Hip Hop, Rock, Dance, R&B / Soul, Eletrônica e Alternativo.
- **Detalhes da faixa:** capa, álbum, artista, duração e um player com botão de tocar/pausar e controle de volume para o preview de 30 segundos.
- **Mais do artista:** na página de detalhes aparecem até 5 outras músicas populares do mesmo artista.
- **Estados da tela:** mensagens de "Carregando...", de erro e de "Nenhuma música encontrada".

---

## 📚 O que foi feito em cada aula

| Aula | Tema | O que foi construído |
|---|---|---|
| **01** | Introdução ao React | Criação do projeto com **Vite**, instalação do **Tailwind CSS**, **React Router DOM** e **Lucide React**, e organização das pastas (`components`, `pages`, `services`). |
| **02** | Fundamentos do React | Componentes e props, ponto de entrada com `BrowserRouter`, rotas no `App.jsx`, componente `Header` e a página `Home`. |
| **03** | Integração com APIs | Serviço de dados `api.js` com `fetch` e `async`/`await`, tratamento de erros, lista de gêneros e **proxy** no Vite para contornar o CORS da API do Deezer. |
| **04** | Mão na massa | Hooks (`useState`, `useEffect`, `useRef`), componentes `GenreFilter`, `TrackCard` e `TrackList`, consumo real da API na `Home` e página de detalhes `TrackDetail`. |

---

## 🗂️ Estrutura

```
syn-sound/
├── index.html
├── vite.config.js          # plugins do React e do Tailwind + proxy /deezer
├── package.json
└── src/
    ├── main.jsx            # ponto de entrada, com BrowserRouter
    ├── App.jsx             # Header + rotas
    ├── index.css           # Tailwind e estilo do controle de volume
    ├── components/
    │   ├── header.jsx      # barra fixa com o logo
    │   ├── genrefilter.jsx # botões de filtro por gênero
    │   ├── trackcard.jsx   # cartão de uma música (capa, título, artista, duração)
    │   └── tracklist.jsx   # grade de cartões
    ├── pages/
    │   ├── home.jsx        # busca, filtro e lista de músicas
    │   └── trackdetail.jsx # detalhes, player e músicas do artista
    └── services/
        └── api.js          # chamadas à API do Deezer
```

### Rotas

| Rota | Página |
|---|---|
| `/` | `Home` |
| `/track/:id` | `TrackDetail` |

---

## 🌐 API do Deezer

Todas as chamadas ficam em `src/services/api.js`:

| Função | Para quê |
|---|---|
| `fetchTopTracks` | músicas em alta |
| `fetchTracksByGenre` | músicas em alta de um gênero |
| `searchTracks` | busca por música ou artista |
| `fetchTrackById` | detalhes de uma faixa |
| `fetchArtistTopTracks` | músicas mais populares de um artista |

Em desenvolvimento, as requisições passam pelo caminho `/deezer`, que o Vite redireciona para `https://api.deezer.com` (proxy configurado em `vite.config.js`). Isso evita o erro de CORS no navegador. A API é pública e não precisa de chave.

---

## 🚀 Tecnologias

- **React 19** e **React Router DOM 7**
- **Vite** (servidor de desenvolvimento e build)
- **Tailwind CSS 4**
- **Lucide React** (ícones)
- **API do Deezer**

---

## 💡 Como executar

É preciso ter o **Node.js** instalado.

1. Entre na pasta do projeto e instale as dependências:
   ```bash
   cd tarefas/fundamentos-react/syn-sound
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Outros comandos: `npm run build` gera a versão para publicação, `npm run preview` testa essa versão e `npm run lint` verifica o código.

> O proxy do Vite só funciona com `npm run dev`. Uma versão publicada precisaria de outra solução para o CORS.

---

> Projeto com fins acadêmicos, feito para acompanhar as videoaulas da atividade.