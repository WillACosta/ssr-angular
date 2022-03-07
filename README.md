<br>
  <img src="./github/ssr-ng.png" style="width: 600px;" />
<br>

Desenvolvida com Angular 13, nesta aplicação utilizamos a API do Unsplash para exibir imagens aleatórias em um mansory grid, o projeto utiliza também a estratégia de Server Side Rendering e otimizações de performance com Application Shell e a State Transfer API do Angular Universal. Para mais detalhes acesse o artigo que escrevi na plataforma Medium.

Confira o artigo [aqui](https://medium.com/@willAmaral/frontend-e-ssr-de-volta-%C3%A0s-origens-6954e620e7d).

## Ferraments e Tecnologias Utilizadas

- [Angular 13](https://angular.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Feather Icons](https://feathericons.com/)
- [Angular Universal](https://angular.io/guide/universal)
  - Server Side Rendering
  - App Shell
  - State Transfer API

## Como utilizar

1. Instale as dependências com o comando
   `npm install`

2. Obtenha sua chave de acesso da API do Unsplash [aqui](https://unsplash.com/developers), logo depois, dentro do diretório do projeto clonado, execute o comando
  `cp environments/environment.ts environments/environment.local.ts`.  O que estamos fazendo é apenas criar uma cópia do arquivo 'environment.ts' para utilizarmos em ambiente de desenvolvimento

3. Adicione sua chave de acesso na propriedade 'unsplashAccessKey' do arquivo 'environment.local.ts'

4. Execute o projeto com
   `npm run dev:ssr`

<br>