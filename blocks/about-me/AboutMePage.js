import BaseHTMLElement from "../base/BaseHTMLElement.js";


export default class AboutMePage extends BaseHTMLElement {
    constructor() {
        super();
    }

    async connectedCallback(){
        const aboutMe = document.getElementById('about-me-template').content.cloneNode(true).firstElementChild;
        const profile = document.getElementById('profile-template').content.cloneNode(true).firstElementChild;

        const fragment = new DocumentFragment();
        
        fragment.appendChild(aboutMe);
        fragment.appendChild(profile);

        this.shadowRoot.appendChild(fragment);
        await this.loadCSS("/blocks/about-me/about-me.css");
    }
}


customElements.define("about-me-page", AboutMePage);