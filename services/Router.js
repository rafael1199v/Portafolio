import Home from './Home.js'
import Blog from './Blog.js';
import Project from './Project.js';
import AboutMe from './AboutMe.js'
import NotFound from './NotFound.js'

const Router = {
    init() {
        const links = document.querySelectorAll(".nav__item a");
        links.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const route = event.target.getAttribute("href");
                this.go(route, true);
            });
        });


        window.addEventListener("popstate", (event) => {
            this.go(event.state.route, false);
        });

        this.go(location.pathname);
    },


    go(route, saveToHistory = false) {

        if(saveToHistory)
            history.pushState({ route }, "", route);

        let blockElement = null;
        const mainElement = document.getElementById('main');
        let pageElement = null;
        mainElement.innerHTML = "";

        switch(route){
            case '/':
                blockElement = document.getElementById('hero-template').content.cloneNode(true).firstElementChild;
                pageElement = new Home(blockElement);
                break;
            case '/about-me':
                blockElement = document.getElementById('about-me-template').content.cloneNode(true).firstElementChild;
                pageElement = new AboutMe(blockElement);
                break;
            case '/projects':
                blockElement = document.getElementById('projects-template').content.cloneNode(true).firstElementChild;
                pageElement = new Project(blockElement);
                break;
            case '/blogs':
                blockElement = document.getElementById('blog-template').content.cloneNode(true).firstElementChild;
                pageElement = new Blog(blockElement);
                break;
            default:
                blockElement = document.createElement("h1");
                pageElement = new NotFound(blockElement);
                break;
        }

        pageElement.render(mainElement);
    }
}

export default Router;