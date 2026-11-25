# Anotações – Fundamentos do React (Syn Sound)

Curso do Raphael Pereira: **React + Tailwind CSS na prática**. Projeto construído: **Syn Sound**, plataforma de descoberta musical que consome a API pública do Deezer (lista de músicas, filtro por gênero, busca por música/artista, página de detalhe com preview de 30 s).

> Obs.: a transcrição automática errou vários nomes. Aqui estão corrigidos (Twend/Tailing → **Tailwind**, Houter → **Router**, Lucid → **Lucide**, Dieser → **Deezer**, white → **Vite**, etc.).

---

## Aula 1 – Introdução e configuração do ambiente

### Conceitos
- **React** = biblioteca JavaScript para construir **interfaces de usuário**.
- A interface é dividida em **componentes** pequenos e reutilizáveis (cabeçalho, barra de busca, filtro de gênero, card de música...).
- Benefícios: código mais organizado, fácil de manter e de reutilizar.

### Ferramentas
| Ferramenta | Para quê |
|---|---|
| **Node.js (versão LTS)** | Roda JS fora do navegador e traz o **npm** (gerenciador de pacotes). LTS = *Long Term Support*, a mais estável. |
| **VS Code** | Editor. |
| Extensão **ES7+ React/Redux/React-Native snippets** | Atalhos para criar componentes rápido. |
| Extensão **Tailwind CSS IntelliSense** | Autocomplete das classes e mostra o CSS ao passar o mouse na classe. |
| **Vite** | Ferramenta de build rápida; substituiu o `create-react-app` (lento e descontinuado). |
| **Tailwind CSS** | CSS utilitário: classes aplicadas direto no JSX, sem arquivos CSS separados. |
| **React Router** | Navegação entre páginas sem recarregar a página inteira. |
| **Lucide React** | Biblioteca de ícones SVG usados como componentes. |

### Passo a passo
1. Instalar Node (nodejs.org, versão LTS) e conferir:
   ```powershell
   node -v
   npm -v
   ```
2. Criar o projeto com Vite (template React):
   ```powershell
   npm create vite@latest syn-sound -- --template react
   ```
   (responder "sim" às perguntas; ele instala as dependências e roda o projeto)
3. Abrir no VS Code: `code .`
4. Instalar Tailwind:
   ```powershell
   npm install tailwindcss @tailwindcss/vite
   ```
   - Em `vite.config.js`: importar o plugin e adicioná-lo em `plugins`.
   - Em `src/index.css`: apagar tudo e deixar só `@import "tailwindcss";`
5. Instalar o roteamento e os ícones:
   ```powershell
   npm install react-router-dom
   npm install lucide-react
   ```
6. Criar em `src/` as pastas **components**, **pages**, **services**.
7. Limpar o template do Vite: apagar o CSS do `App`, remover imports/states de exemplo, deixar o `App` retornando só uma `div`.
   - Mantido: `import './index.css'` no `main.jsx` (é ele que ativa o Tailwind).
   - `StrictMode` fica: ajuda a depurar corretamente.
8. Rodar com `npm run dev`. Teste de sanidade: "Olá mundo" com classes Tailwind + um ícone do Lucide.

### Dica de estilo
- Preferir **arrow functions** para componentes: `const App = () => { ... }`.

---

## Aula 2 – Como o React pensa: componentes, JSX e props

### Conceitos
- **Componente** = função JavaScript que **retorna HTML** (esse HTML dentro do JS é o **JSX**).
- Usa-se o componente como se fosse uma tag: `<Botao />`.
- **Props** (*properties*) = parâmetros do componente. Passam dados de fora para dentro; o mesmo componente se comporta de forma diferente conforme as props.
- **Fragmento** `<> ... </>`: o React só aceita **um elemento raiz** retornado; o fragmento agrupa elementos sem criar uma `div` extra.
- Em JSX usa-se `className` (não `class`).

### Estrutura do projeto
- `main.jsx` = **ponto de entrada**. Pega a `div#root` do `index.html` e renderiza `<App />`, envolvido em:
  - `<StrictMode>` (modo de desenvolvimento que ajuda a achar problemas);
  - `<BrowserRouter>` (habilita navegação entre páginas).
- `App.jsx` = **componente raiz**, define quais componentes aparecem em quais rotas.

### App.jsx (roteamento)
```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TrackDetail from './pages/TrackDetail'
import Header from './components/Header'

const App = () => (
  <>
    <Header />            {/* aparece em todas as páginas, fica fora das rotas */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track/:id" element={<TrackDetail />} />
    </Routes>
  </>
)
export default App
```
- `:id` é um **parâmetro dinâmico** da URL (`/track/123` → id = 123).

### Componente Header
- `Link` (do React Router) funciona como a tag `<a>`, mas **sem recarregar a página**; `to="/"` é o destino.
- Ícone `AudioWaveform` do Lucide, com a prop `size={32}`.
- Classes Tailwind usadas: `fixed top-0 left-0 right-0` (fixa no topo), `bg-slate-950` (fundo escuro), `border-b border-slate-800` (borda inferior).
- Tudo que outros arquivos importam precisa de `export default`.

### Página Home (só estrutura, sem dados ainda)
- `<main>` com um `<form>` contendo `<input type="text" placeholder="Buscar músicas ou artistas">` e `<button type="submit">Buscar</button>`, mais um parágrafo provisório.
- Classes de layout: `pt-24` (padding-top grande porque o header é fixo e o conteúdo precisa começar abaixo dele), `max-w-6xl mx-auto` (centraliza com largura máxima — padrão de layout comum).
- Criar `TrackDetail.jsx` vazio (com export) só para não dar erro de import.

> Dica: se o estilo do Tailwind não aparecer, reiniciar o servidor (no terminal: `r` + Enter) — pode ser cache.

---

## Aula 3 – Consumindo a API do Deezer

### Conceitos
- **API** (*Application Programming Interface*) = canal de comunicação entre sistemas.
- Você faz uma **requisição HTTP** para um **endpoint** e o servidor responde em **JSON**.
- Exemplo: `api.deezer.com/chart/0/tracks?limit=40` → 40 músicas mais ouvidas.
- **CORS**: a API do Deezer bloqueia requisições vindas de outros domínios no navegador. Solução em desenvolvimento: **proxy no Vite** que redireciona `/deezer` → `https://api.deezer.com`. Em produção usa-se a URL real.

### `src/services/api.js`
Centraliza todas as chamadas da API num único arquivo.
```js
const BASE_URL = import.meta.env.DEV ? '/deezer' : 'https://api.deezer.com'
// (em dev usa o proxy configurado no vite.config.js)

export const GENRES = [ { id: 0, name: 'Todos' }, /* ... { id, name } do Deezer */ ]

export const fetchTopTracks = async () => {
  const response = await fetch(`${BASE_URL}/chart/0/tracks?limit=40`)
  if (!response.ok) throw new Error('Erro ao buscar músicas em alta')
  const data = await response.json()
  return data.data
}
```
Funções criadas (todas `async`, mesmo padrão: `fetch` → checa `response.ok` → `response.json()`):

| Função | Endpoint | Retorno |
|---|---|---|
| `fetchTopTracks()` | `/chart/0/tracks?limit=40` | `data.data` (array) |
| `searchTracks(query)` | `/search?q=${encodeURIComponent(query)}` | `data.data` |
| `fetchTracksByGenre(genreId)` | `/chart/${genreId}/tracks?limit=40` | `data.data` |
| `fetchTrackById(id)` | `/track/${id}` | `response.json()` direto (é **um objeto**, não array) |
| `fetchArtistTopTracks(artistId)` | `/artist/${artistId}/top?limit=10` | `data.data` |

### Pontos importantes
- `async/await`: sintaxe moderna para operações assíncronas; `await` **pausa** até a resposta chegar.
- `response.ok` = status HTTP 2xx (200); se não, `throw new Error(...)`.
- `response.json()` converte a resposta em objeto JS.
- A API devolve `{ data: [...] }` → por isso `return data.data`.
- `encodeURIComponent` evita que espaços, acentos e `&` quebrem a URL.
- `GENRES` é exportado porque o componente `GenreFilter` usa para montar os botões.
- Teste: chamar `fetchTopTracks().then(data => console.log(data))` no `App.jsx`, ver no console e **depois remover** (incluindo o import).

---

## Aula 4 – Conectando tudo: hooks, componentes e página de detalhe

### Hooks fundamentais
**`useState`** – guarda dados que mudam na interface; ao mudar, o React **re-renderiza**.
```jsx
const [valor, setValor] = useState(valorInicial)
```

**`useEffect`** – executa código em resposta a algo (componente aparece, valor muda). É o lugar certo para chamar API.
```jsx
useEffect(() => {
  // código
}, [dependencias])   // [] = roda só uma vez; [x] = roda quando x mudar
```

**`useParams`** – lê parâmetros da URL (ex.: `id` em `/track/:id`).

**`useRef`** – referência direta a um elemento do DOM (ex.: `<audio>`); necessário porque só com state não dá para controlar o player.

### Componente `GenreFilter`
- Props: `activeGenre` e `onGenreChange`.
- Faz `GENRES.map(...)` e renderiza um `<button>` por gênero.
- Use **parênteses** `( )` no retorno do `map` (retorna JSX), não chaves.
- `key={genre.id}` é **obrigatório** em listas: o React identifica qual item mudou.
- `onClick={() => onGenreChange(genre.id)}`.
- Classe **dinâmica** com *template literal* + ternário: gênero ativo → laranja; senão → cinza.
- Container: `flex gap-2 flex-wrap`.

### Componente `TrackCard`
- Recebe `track` como prop; mostra capa, título, artista e duração.
- Envolvido num `<Link to={`/track/${track.id}`}>`.
- Capa: `track.album?.cover_medium` com fallback para imagem padrão.
- Duração: segundos → `m:ss`:
  ```js
  const minutes = Math.floor(track.duration / 60)
  const seconds = String(track.duration % 60).padStart(2, '0')  // 3:07 em vez de 3:7
  ```
- `?.` (**optional chaining**): evita erro se `artist`/`album` vier `undefined`.
- Classes `group` + `group-hover:`: o ícone de play (Lucide `Play`) só aparece quando o mouse passa **no card** (pai).
- `<img>` com `alt` para leitores de tela.
- Duração é renderizada só se existir (`{duration && <span>...</span>}`).

### Componente `TrackList`
- Recebe `tracks` (array).
- Se `tracks.length === 0` → parágrafo "Nenhuma música encontrada."
- Senão → `<div>` com `tracks.map(track => <TrackCard key={track.id} track={track} />)`.
- Grid **responsivo** (*mobile first*): `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5` → o Tailwind começa pela tela menor e os prefixos `sm`, `md`, `lg` aplicam a partir daquele tamanho.

### Página `Home` (conectando tudo)
States:
```jsx
const [tracks, setTracks] = useState([])
const [search, setSearch] = useState('')
const [activeGenre, setActiveGenre] = useState(0)   // 0 = todos
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
```
- `useEffect` dependente de `[activeGenre]` → chama `loadByGenre(activeGenre)`: se id = 0 usa `fetchTopTracks`, senão `fetchTracksByGenre`.
- Padrão de chamada assíncrona:
  ```jsx
  try {
    setLoading(true); setError(null)
    const data = await ...
    setTracks(data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)   // roda SEMPRE, a tela nunca fica travada em "Carregando"
  }
  ```
- `handleSearch(e)`: `e.preventDefault()`; se `search.trim()` vazio, `return`; senão `searchTracks(search)`.
- `handleGenreChange(id)`: `setActiveGenre(id)` e `setSearch('')`.
- **Input controlado**: `value={search}` + `onChange={e => setSearch(e.target.value)}` mantém o state sincronizado com o que o usuário digita (padrão React para inputs).
- `<form onSubmit={handleSearch}>`.
- Render condicional: `loading` → "Carregando..."; `error` → mostra a mensagem; senão `<TrackList tracks={tracks} />`.
- Fluxo: página carrega → effect dispara → busca top tracks → usuário clica gênero → state muda → effect dispara de novo.

### Página `TrackDetail`
- `const { id } = useParams()` pega o id da URL.
- States: `track`, `related` (músicas do artista), `playing`, `volume` (começa em 0.5), `loading`, `error`; `audioRef = useRef(null)`.
- 1º `useEffect` (`[id]`): `loadTrack` → `fetchTrackById(id)`, depois `fetchArtistTopTracks(data.artist.id)`; `setRelated(tracks.filter(t => t.id !== data.id).slice(0, 5))` → remove a música atual e pega só 5.
- 2º `useEffect` (`[volume]`): `if (audioRef.current) audioRef.current.volume = volume` (sincroniza o volume).
- `togglePlay`: se está tocando → `pause()`, senão `play()` (funções de botão/input costumam se chamar `toggle...`/`handle...`).
- Retornos antecipados: `if (loading)` → "Carregando", `if (error)` → erro.
- Layout: link "Voltar" (ícone `ArrowLeft`, `size={16}`), capa ampliada, álbum, título (`h1`), link do artista (`/artist/...` — **sugestão de melhoria**: criar a página de artista), duração.
- Preview (só se `track.preview` existir): avisa "Preview de 30 segundos";
  `<audio ref={audioRef} src={track.preview} onEnded={() => setPlaying(false)} onLoadedMetadata={() => audioRef.current.volume = 0.5} />`.
- Botão alterna ícone `Pause`/`Play` conforme `playing`.
- Controle de volume: `<input type="range" min="0" max="1" step="0.1" value={volume} onChange={e => setVolume(Number(e.target.value))} />`.
- Se houver `related`, mostra "Mais de {artista}" com `TrackCard` reutilizado.
- `?.` em `track.artist?.name` pois o artista pode ser nulo.

---

## Resumo geral (cola rápida)

| Conceito | Resumo |
|---|---|
| Componente | Função que retorna JSX; nome com letra maiúscula; `export default` |
| JSX | HTML dentro do JS; `className`; JS entre `{ }`; um único elemento raiz (ou `<>…</>`) |
| Props | Parâmetros do componente (`<Card track={t} />`) |
| `useState` | Dado que muda → re-renderiza |
| `useEffect` | Efeitos/chamadas de API; array de dependências controla quando roda |
| `useParams` | Lê parâmetros da rota |
| `useRef` | Acesso direto a elemento do DOM |
| Listas | `.map()` + `key` único |
| Condicional | `&&`, ternário, `return` antecipado |
| Rotas | `BrowserRouter` (main) → `Routes`/`Route` (App) → `Link` (navegar) |
| API | `async/await` + `fetch` + `response.ok` + `response.json()` + `try/catch/finally` |
| Tailwind | Utilitárias no `className`; responsivo mobile-first (`sm:`, `md:`, `lg:`); `group`/`group-hover:` |

### Ideias de melhoria (sugeridas no curso)
- Criar a página de **artista** (`/artist/:id`).
- Adicionar novas funcionalidades, mudar o visual, conectar outra API.
