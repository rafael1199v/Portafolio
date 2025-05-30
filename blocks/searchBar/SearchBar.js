import BaseHTMLElement from "../base/BaseHTMLElement.js";
import { CommandExecutor, COMMANDS, Commnad } from "../../services/SaveCommand.js";


export default class SearchBar extends BaseHTMLElement {

    constructor() {
        super();

        const template = document.getElementById("search-bar-template");
        const element = template.content.cloneNode(true).firstElementChild;

        const searchBar = element;
        console.log(searchBar);
        this.shadowRoot.appendChild(element);


        searchBar.addEventListener("keyup", (event) => {
            if(event.key === "Enter") {
                const searchValue = event.target.value.trim();
                const command = new Commnad(COMMANDS.SEARCH, searchValue);
                CommandExecutor.execute(command);

                this.dispatchEvent(new Event("search", {
                    bubbles: true,
                    composed: true
                }));
            }
            
        });

    }



    async connectedCallback() {
        await this.loadCSS("/blocks/searchBar/SearchBar.css");
    }




    

}

customElements.define("search-bar", SearchBar);
