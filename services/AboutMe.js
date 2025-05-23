import Page from './Page.js'

class AboutMe extends Page {
    
    render(mainElement) {
        const aboutMe = this.content;
        const profile = document.getElementById('profile-template').content.cloneNode(true).firstElementChild;
        const fragment = new DocumentFragment();

        fragment.appendChild(aboutMe);
        fragment.appendChild(profile);

        this.content = fragment;
         
        super.render(mainElement);
    }
}


export default AboutMe;