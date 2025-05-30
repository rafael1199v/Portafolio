
class SaveItemList {

    #projects = [];
    #searchItem = null;
 
    get projects() {
        return this.#projects;
    }


    get searchItem() {
        return this.#searchItem;
    }

    static instance = null;
    static {
        this.instance = new SaveItemList();
    }

    constructor(){
        if(SaveItemList.instance)
            throw new Error("Ya existe una instancia");
    }

    static getInstance() {
        return this.instance;
    }

    find(id) {
        return this.#projects.find(project => project.id == id);
    }

    addProject(project) {
        this.#projects.push(project);
        console.log(this.#projects);
    }


    remove(project) {
        const id = project.id;
        const array = this.#projects.filter(project => project.id != id);
        this.#projects = array;

        console.log(this.#projects);
    }

    findByTitle(title) {
        return this.#projects.find(project => project.title.toLowerCase() == title.toLowerCase());
    }


    setSearchItem(item) {
        console.log("Item buscado: ", item);
        this.#searchItem = item;
    }


}

export default SaveItemList;