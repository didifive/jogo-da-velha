# Criando seu próprio jogo da velha com HTML e Javascript

## Bootcamp "JavaScript Game Developer" - Digital Innovation One

Projeto desenvolvido com instruções de [Vitor Ruschoni] na trilha de estudo do Bootcamp "JavaScript Game Developer" da [dio.me].

<p align="center">
	<img alt="Repository language count" src="https://img.shields.io/github/languages/count/didifive/jogo-da-velha">
	<a href="https://vitorruschoni.com.br/">
		<img alt="Made by Vitor" src="https://img.shields.io/badge/made%20by-Vitor-blue">
	</a>
	<a href="https://www.linkedin.com/in/luis-carlos-zancanela/">
		<img alt="Update by Didi" src="https://img.shields.io/badge/update%20by-Didi-green">
	</a>
	<a href="https://github.com/didifive/jogo-da-velha/commits/master">
		<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/didifive/jogo-da-velha?color=blue">
	</a>
	<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue">
</p>

<p align="center">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction">
	  <img alt="Java" src="https://img.shields.io/static/v1?color=yellow&label=Dev&message=JavaScript&style=for-the-badge&logo=Javascript">
	</a>
  <a href="https://www.w3schools.com/html/">
	  <img alt="Java" src="https://img.shields.io/static/v1?color=red&label=Dev&message=HTML5&style=for-the-badge&logo=HTML5">
	</a>
  <a href="https://www.w3schools.com/css/">
	  <img alt="Java" src="https://img.shields.io/static/v1?color=blue&label=Dev&message=CSS&style=for-the-badge&logo=CSS3">
	</a>
</p>

Link da base utilizada neste projeto: [ruschoni02/jogo-da-velha].

---

Abaixo seguem modificações feitas em relação ao projeto base:
* Aplicado responsividade para a tag `main`, utilizando as medidas `vw` e `vh` e `@media only screen and (orientation: portrait)`;
* Os quadrados do jogo foram envelopados por uma `<div>` com classe `game` para melhor organizar o conteúdo;
* O código foi refatorado com destaque em:
	* Uso do `document.querySelectorAll()` para a const `quadrados`;
	* Uso do 'spread operator' para parâmetros das funções;
	* Abaixo do quadro do game, enquanto jogo está ativo, aparece apenas o "Jogador", quando já foi finalizado irá aparecer o "Vencedor";
* Adicionado efeito sonoro para as jogadas e conclusão.

---

Projeto online em: [jogo-da-velha-didi.netlify.app](https://jogo-da-velha-didi.netlify.app)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/126d15f5-1c87-4feb-9617-cd82e7c65712/deploy-status)](https://app.netlify.com/sites/jogo-da-velha-didi/deploys)

---

Links Interessantes:
* [HTML5]
* [CSS]
* [JavaScript]
* [Netlify]
* [freesound]
* [Font Awesome]

[dio.me]: https://dio.me/
[Vitor Ruschoni]: https://vitorruschoni.com.br/
[ruschoni02/jogo-da-velha]: https://github.com/ruschoni02/jogo-da-velha
[didifive/jogo-da-velha]: https://github.com/didifive/jogo-da-velha
[HTML5]: https://www.w3schools.com/html/
[CSS]: https://www.w3schools.com/css/
[JavaScript]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction
[Netlify]: https://www.netlify.com/
[freesound]: https://freesound.org/
[Font Awesome]: https://fontawesome.com/