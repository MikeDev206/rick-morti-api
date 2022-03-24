import { LitElement, html, css } from "lit";
import "./Components/GetData";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host{
        display: block
      }

      .container {
        text-align: justify
      }

      get-data {
        display: none;
      }

      .card {
        background: #fff;
        border-radius: 10px;
        display: inline-block;
        height: 300px;
        width: 200px;
        margin: 2em;
        position: relative;
        text-align: center;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .24);
      }
    `;
  }

  constructor() {
    super();

    this.wiki = [];

    this.addEventListener("ApiData", (e) => {
      this._dataFormat(e.detail.data);
    });
  }

  _dataFormat(data) {
    let characters = [];

    // aquí defino mi funcion que consulta las caracteristicas de las cards dentro de la api
    data["results"].forEach((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
      });
    });

    this.wiki = characters;
  }

  // Esto se conecta con la api directamente
  render() {
    return html`
      <get-data
        url="https://rickandmortyapi.com/api/character"
        method="GET"
      ></get-data>

      ${this.dataTemplate};
    `;
  }

  // funcion que pinta mis elementos html para las cards de los personajes https://rickandmortyapi.com/api/character

  get dataTemplate() {
    return html`
      ${this.wiki.map(
        (character) => html`
          <div class="card">
            <div class="card-body">
              <h2>${character.name}</h2>
              <img src="${character.img}" />
              <p>${character.species}</p>
              <p>${character.status}</p>
            </div>
          </div>
        `
      )}
    `;
  }
}
