import APIProject from "./services/apiProject.js";
import ProjectList from "./services/ProjectList.js";
import Router from "./services/Router.js";

globalThis.DOM = {};


window.addEventListener("DOMContentLoaded", async () => {
    let projects = await APIProject.getProjects();
    ProjectList.getInstance().setProjects(projects);
    Router.init();
});






