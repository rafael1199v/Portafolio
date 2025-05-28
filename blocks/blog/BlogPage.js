import BaseHTMLElement from "../base/BaseHTMLElement.js";

export default class BlogPage extends BaseHTMLElement {

    constructor() {
        super();
    }

    async connectedCallback() {
        const blockElement = document.getElementById('blog-template').content.cloneNode(true).firstElementChild;
        this.shadowRoot.appendChild(blockElement);
        await this.loadCSS("/blocks/blog/blog.css");
    }
}


customElements.define("blog-page", BlogPage);