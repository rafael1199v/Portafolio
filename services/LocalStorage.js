import ProjectList from "./ProjectList.js"
import APIProject from "./apiProject.js";

const projectList = ProjectList.getInstance();

const LocalStorage = {
    saveProjects () {
        localStorage.setItem("projects", JSON.stringify(projectList.allProjects));
        console.log(localStorage.getItem("projects"));
    },


    async loadProjects() {

        let projects = JSON.parse(localStorage.getItem("projects"));
        let save = false;

        if(!projects) {
            projects = await APIProject.getProjects();
            save = true;            
        }

        projectList.setProjects(projects);

        if(save) {
            this.saveProjects();
        }
    }
}

projectList.addObserver(LocalStorage.saveProjects);
export default LocalStorage;