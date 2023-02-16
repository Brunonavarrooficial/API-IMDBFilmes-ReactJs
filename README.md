# TMDB Filmes React 📽️

🎞️ Projeto consumindo uma api do site de filmes TMDB com informações e imagens e renderizando tudo em diversos cards com todo conteúdo sobre cada filme como exemplo: nome, genêro, descrição, bilheteria entre outros conteúdos. 🎞️
#
* Deploy Vercel ☁️:
  * [MoviesLib](https://brunobonfimimdbfilmes.vercel.app/) 🎬
#

* API's Manupuladas no Projeto 🌐:
    * [x] Primeiro passo faça cadastro no site TMDB para conseguir uma API e por lá você também pode conferir a documentação da API:
        * [API TMDB](https://www.themoviedb.org/)
    * [x] Formato para fazer o get 'requisição' de imagens:
      * [API TMDB Image](https://image.tmdb.org/t/p/w500/) 🖼️
    * [x] Formato para fazer o get 'requisição' das informações de um ou vários filmes por ID:
       * [API TMDB ID](https://api.themoviedb.org/3/movie/) ℹ️
    * [x] Formato para fazer o get 'requisição' de busca pelo nome do filme:
       * [API TMDB Search](https://api.themoviedb.org/3/search/movie/) 🔍
#

* Stacks 📚 and Skills 🧠:

    *  <img width='30' align='center' src='./public/vite.svg' /> Vite <img width='30' align='center' src='./public/vite.svg' />
        * usando [Vite](https://vitejs.dev/) ao invés de CRA (create-react-app)
            * ```
                npm create vite@latest 
    * <img width='30' align='center' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />CSS<img align='center' width='30' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        * Flex-Box
        * Media Query
    * <img width='30' align='center' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> JavaScript <img width='30' align='center' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        * DOM
        * Eventos
        * Funções
        * Fetch
    * <img width='30' align='center' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> React-Js <img width='30' align='center' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        * JSX
        * Props
        * Rotes
        * React-Router-Dom
        * ReactDom
        * React-Icons
        * React Hooks:
          * useEffect
          * useState
          * useSearchParams
#

<div align='center'>
<h3>Page 📑:</h3>
<h4>Films Cards 🎴:</h3>
<img src="./public/movieslib.gif"/>
</div>

#

<div align='center'>
<h3>Responsive Mobile📲:</h3>
<h4>Films Cards 🎴:</h3>
<img src="./public/movieslibmobile.gif"/>
</div>

#

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
