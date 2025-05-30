import SaveItemList from "./SaveItemsList.js";
import ProjectList from "./ProjectList.js";


const saveList = SaveItemList.getInstance();
const projectList = ProjectList.getInstance();


const SaveService = {

    saveProject(project) {
        saveList.addProject(project);
        localStorage.setItem("saveProjects", JSON.stringify(saveList.projects));

        console.log(saveList.projects);
    },

  
    removeProject(id) {
        saveList.removeProject(id);
        localStorage.setItem("saveProjects", JSON.stringify(list.projects));
    },

};

// projectList.addSaveObserver(SaveService.saveProject);
export default SaveService;