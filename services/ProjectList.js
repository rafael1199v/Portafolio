import { observerMixin } from "./Mixins.js";
import { Commnad } from "./SaveCommand.js";
import { COMMANDS } from "./SaveCommand.js";
import { CommandExecutor } from "./SaveCommand.js";

class ProjectList {

    #projects = [];
    #limitedView = true;

    get projects() {

        if(this.#limitedView)
            return this.#projects.slice(0, 3);

        return this.#projects;
    }

    get allProjects() {
        return this.#projects;
    }

    get limitedView() {
        return this.#limitedView;
    }

    static instance = null;
    static {
        this.instance = new ProjectList();
    }

    constructor(){
        if(ProjectList.instance)
            throw new Error("Ya existe una instancia");
    }

    static getInstance() {
        return this.instance;
    }

    find(id) {
        return this.#projects.find(project => project.id == id);
    }

    addLike(id) {
        const project = this.find(id);
        project.likes = Number(project.likes) + 1;
        project.like = "true";

        this.notify();
    }

    removeLike(id) {
        const project = this.find(id);
        project.likes = Number(project.likes) - 1;
        project.like = "false";        
        
        this.notify();
    }


    saveProject(id) {
        const project = this.find(id);
        project.save = "true";   

        this.notify();
        const command = new Commnad(COMMANDS.SAVE, project);
        CommandExecutor.execute(command);
        
    }

    unsaveProject(id) {
        const project = this.find(id);
        project.save = "false";

        const command = new Commnad(COMMANDS.UNSAVE, project);
        CommandExecutor.execute(command);

        this.notify();
    }


    addProject(project) {
        this.#projects.push(project);

        this.notify();
    }

    setProjects(projects) {
        this.#projects = projects;
    }

    seeMore(){
        this.#limitedView = false;
    }

}


Object.assign(ProjectList.prototype, observerMixin);

export default ProjectList;