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
                pageElement = document.createElement("home-page");
                break;
            case '/about-me':
                pageElement = document.createElement("about-me-page");
                break;
            case '/projects':
                pageElement = document.createElement("project-page");
                break;
            case '/blogs':
                pageElement = document.createElement("blog-page");
                break;
            default:
                break;
        }

        mainElement.appendChild(pageElement);
        
        window.scrollX = 0;
        window.scrollY = 0;
    }
}

export default Router;