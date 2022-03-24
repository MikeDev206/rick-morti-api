import { LitElement } from "lit-element";

export class GetData extends LitElement {

	static get properties() {
		return {
			url: {type: String},
			metho: {type: String}
		}
	}

	firstUpdated() {
		this.getData();
	}

	constructor() {
		super();
		console.log('Hola desde getData');
	}
	 
	_sendData(data) {
		this.dispatchEvent(new CustomEvent ('ApiData', {
			detail: { data }, bubbles: true, composed: true
		}));
	}

	// Metodo asíncrono donde obtengo mi API y transformo en Json

	getData() {
		fetch(this.url, {method: this.method})
		.then((response) => {
			if(response.ok) return response.json();
			return Promise.reject(response);
		})
		.then((data) => { this._sendData(data); })
		.catch((error) => {console.warn('Something went wrong', error)})
	}
}

customElements.define('get-data', GetData);