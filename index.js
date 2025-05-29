import APIProject from "./services/apiProject.js";
import ProjectList from "./services/ProjectList.js";
import Router from "./services/Router.js";
import HeroPage from "./blocks/hero/HeroPage.js";
import BlogPage from "./blocks/blog/BlogPage.js";
import AboutMePage from "./blocks/about-me/AboutMePage.js";
import ProjectPage from "./blocks/projects/ProjectPage.js";
import LocalStorage from "./services/LocalStorage.js";

globalThis.DOM = {};

window.addEventListener("DOMContentLoaded", async () => {
    await LocalStorage.loadProjects();
    Router.init();
});






