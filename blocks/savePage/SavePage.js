
import BaseHTMLElement from "../base/BaseHTMLElement.js";
import SaveItemList from "../../services/SaveItemsList.js";


export default class SavePage extends BaseHTMLElement {

    constructor() {
        super();
    }



    async connectedCallback() {
        const template = document.getElementById("save-page-id");
        const element = template.content.cloneNode(true).firstElementChild;
        await this.loadCSS("/blocks/savePage/SavePage.css");

        const saveList = SaveItemList.getInstance();


        if(saveList.searchItem) {
            const containerCard = element.querySelector("save-page__card-container");
            containerCard.classList.remove("save-page__card-container--hidden");
        }
        
        console.log(saveList.projects);

        const fragment = new DocumentFragment();
        for(let saveItem of saveList.projects) {
            let template = document.getElementById('project-save-card-template');
            let card = template.content.cloneNode(true).firstElementChild;
          
            let img = card.querySelector(".projects__card-image");
            let title = card.querySelector(".projects__card-title");
            let paragraph = card.querySelector(".projects__card-paragraph");
            let link = card.querySelector(".projects__card-button");

            img.src = saveItem.imageURL;
            title.textContent = saveItem.title;
            paragraph.textContent = saveItem.content;
            link.href = saveItem.githubURL;


            fragment.appendChild(card);
        }


        console.log(element);
        
        const container = element.querySelector(".save-page__cards");
        container.appendChild(fragment);

        this.addEventListener("search", (event) => {
            this.render();
        })

        this.shadowRoot.appendChild(element);
        
    }



    async render() {
        this.shadowRoot.innerHTML = "";
        const template = document.getElementById("save-page-id");
        const element = template.content.cloneNode(true).firstElementChild;
        await this.loadCSS("/blocks/savePage/SavePage.css");

        const saveList = SaveItemList.getInstance();


        if(saveList.searchItem) {
            const containerCard = element.querySelector(".save-page__card-container");
            containerCard.classList.remove("save-page__card-container--hidden");

            


        }
        
        console.log(saveList.projects);

        const fragment = new DocumentFragment();
        for(let saveItem of saveList.projects) {
            let template = document.getElementById('project-save-card-template');
            let card = template.content.cloneNode(true).firstElementChild;
          
            let img = card.querySelector(".projects__card-image");
            let title = card.querySelector(".projects__card-title");
            let paragraph = card.querySelector(".projects__card-paragraph");
            let link = card.querySelector(".projects__card-button");

            img.src = saveItem.imageURL;
            title.textContent = saveItem.title;
            paragraph.textContent = saveItem.content;
            link.href = saveItem.githubURL;


            fragment.appendChild(card);
        }


        console.log(element);
        
        const container = element.querySelector(".save-page__cards");
        container.appendChild(fragment);
        //console.log(fragment);

        this.shadowRoot.appendChild(element);
    }
}

customElements.define("save-page", SavePage);