class Page {
    constructor(content) {
        this.content = content;
    }

    render(mainElement){
        mainElement.appendChild(this.content);
    }
}

export default Page;