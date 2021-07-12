<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/ifmakersd.com.br/main/src/assets/images/ifmaker/logo.svg" width="200" />
</p>

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=ifmakersd-com-br)

## Índice
 1. [O que é o projeto?](#abstract)
 2. [Imagens do proojeto](#images)
 3. [Tecnologias utilizadas](#stack)
 4. [Como rodar o código](#how-to-run)

<div id='abstract'/>
## O que é Lab IFMakerSD
> O projeto ifmakersd é um site para divulgação do laboratório If maker do if Sudeste mg campus Santos Dumont que começou a ser criado no final de 2020. O site conta com uma landing page e páginas para projetos, artigos e equipamentos, essas páginas são postadas por um gerenciador de conteúdo.

<div id='images'/>
## Imagens do projeto

<div id='stack'/>
## Tecnologias utilizadas
O Front end do site é feito utilizando:
- **Nextjs** com o uso de geração de páginas estáticas, inclusive as páginas que são criadas a partir de dados da api do Headless CMS.
- **ReactJS**: diversos pacotes são utilizados, dentre eles destaco:
- **CSS Modules com SASS**: para isolar os componentes e ter maior controle 
- **Variáveis CSS** para manter consistência nos valores de propriedades. 
- **Temas light e dark**: os temas claro e escuro são criados com o uso de variáveis css, facilitando o uso e manutenção
- **CSS Animation**: diversas animações são usadas, quase todas criadas "na mão".

<div id='how-to-run'/>
## Getting Started

Para rodar localmente utilize o comando abaixo:

```bash
yarn dev
```

Para realizar o build local, utilize o comando:
```bash
yarn build
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

