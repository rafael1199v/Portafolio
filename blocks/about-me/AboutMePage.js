import BaseHTMLElement from "../base/BaseHTMLElement.js";
import Markdown from "../../services/Markdown.js";

export default class AboutMePage extends BaseHTMLElement {
    constructor() {
        super();
    }

    async connectedCallback(){
        const aboutMe = document.getElementById('about-me-template').content.cloneNode(true).firstElementChild;
        const profile = document.getElementById('profile-template').content.cloneNode(true).firstElementChild;

        const paragraph = aboutMe.querySelector(".about-me__paragraph");
        let ignoreMutation = false;

        const mutationObserver = new MutationObserver((entries) => {
            if (ignoreMutation) return;

            const target = entries[0].target;
            const text = target.innerText?.trim() ?? "";

            const words = text.split(/\s+/);
            const newList = [];
            let hasChanges = false;

            console.log(words, target);

            for (let i = 0; i < words.length; i++) {
                const tag = Markdown[words[i]];
                if (!tag) {
                    newList.push(words[i]);
                } else {
                    newList.push(`<${tag}>Heading h1</${tag}>`);
                    hasChanges = true;
                }
            }
            
           if(hasChanges) {
                ignoreMutation = true;
                console.log("Lista nueva",newList)
                paragraph.innerHTML = newList.join(" ");
                console.log("Cambios");
                ignoreMutation = false;
           }    
          
    })

        mutationObserver.observe(paragraph, {
            characterData: true,
            subtree: true,
            characterDataOldValue: true,
            childList: true
        });

        const fragment = new DocumentFragment();
        
        fragment.appendChild(aboutMe);
        fragment.appendChild(profile);

        this.shadowRoot.appendChild(fragment);
        await this.loadCSS("/blocks/about-me/about-me.css");
    }
}


customElements.define("about-me-page", AboutMePage);