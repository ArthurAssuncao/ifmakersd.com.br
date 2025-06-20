<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/ifmakersd.com.br/main/src/assets/images/ifmaker/logo.svg" width="200" />
</p>

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=ifmakersd-com-br)

## Índice
 1. [O que é o projeto?](#o-que-é-lab-ifmakersd)
 2. [Imagens do projeto](#imagens-do-projeto)
 3. [Tecnologias utilizadas](#tecnologias-utilizadas)
 4. [Como rodar o código](#como-rodar-o-código)

## O que é Lab IFMakerSD

O projeto IFMakerSD é um site para divulgação do laboratório IFMaker do IF Sudeste MG - Campus Santos Dumont, que começou a ser criado no final de 2020. O site conta com uma landing page e páginas para projetos, artigos e equipamentos. Essas páginas são gerenciadas por um sistema de gerenciamento de conteúdo (CMS).

## Imagens do projeto

<div align="center">
<img src="https://github.com/ArthurAssuncao/ifmakersd.com.br/blob/main/screenshots/screenshot-1.jpeg?raw=true" width="400" alt="Screenshot 1 do projeto IFMakerSD" />
<br>
<em>Página inicial do site IFMakerSD em desktops</em>
</div>

<br>

<div align="center">
<img src="https://github.com/ArthurAssuncao/ifmakersd.com.br/blob/main/screenshots/screenshot-2-portrait.png?raw=true" width="400" alt="Screenshot 2 do projeto IFMakerSD" />
<br>
<em>Página interna do site IFMakerSD em smartphones</em>
</div>

## Tecnologias utilizadas

O front-end do site é desenvolvido utilizando:

- **Next.js**: com uso de geração de páginas estáticas (SSG), inclusive as páginas criadas a partir de dados da API do Headless CMS
- **ReactJS**: diversos pacotes são utilizados para criar uma experiência interativa
- **CSS Modules com SASS**: para isolar os componentes e ter maior controle sobre o estilo
- **Variáveis CSS**: para manter consistência nos valores de propriedades
- **Temas light e dark**: os temas claro e escuro são implementados com variáveis CSS, facilitando o uso e manutenção
- **CSS Animation**: diversas animações personalizadas são utilizadas para melhorar a experiência do usuário

## Como rodar o código

Para rodar o projeto localmente, utilize o comando abaixo:

```bash
yarn dev
```

Para realizar o build local, utilize o comando:

```bash
yarn build
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
