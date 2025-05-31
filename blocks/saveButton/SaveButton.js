export default class SaveButton extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = `
            <div class="projects__card-save">
                <svg viewBox="0 0 24 24" fill="#0000000" xmlns="http://www.w3.org/2000/svg" class="projects-save__save-icon">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z"/> </g>
                </svg>
            </div>
        `;
    }

}

customElements.define("save-button", SaveButton);