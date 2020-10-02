<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Este repositório contém o desafio 03
</h3>


### Desafios

3.1 - Criar  um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de Cursos e Sobre). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

### Arquivos HTML

- `courses.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz;
- `about.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about;
- `layout.njk`: Arquivo referente à base comum entre as páginas;
- `not-found.njk`: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

  - Layout.njk como base
  - Ter um texto infortivo sobre o erro


3.2 - Nesse desafio foi pedido para atualizar os arquivos com informações de cursos e descrição de forma dinâmica.


3.3 - Criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

### Rota

A rota também será a `/courses`, porém o id do curso será passado via route params .

### Informações

- Layout padrão;
- Card do curso;
- Link que redireciona para a página do curso.


Made by [Robson Svicero](https://www.svicero.com.br) :wave: [Me encontre no LinkedIn](https://www.linkedin.com/in/robertorobsonsvicero/)