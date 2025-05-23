import Page from "./Page.js";

class NotFound extends Page {
    render(mainElement) {
        this.content.textContent = "Pagina no encontrada"
        super.render(mainElement);
    }
}

export default NotFound;