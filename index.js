import APIProject from "./services/apiProject.js";
let projects = [];
globalThis.DOM = {};

async function fetchProjects() {
    const data = await APIProject.getProjects();
    return data;
}



function addListeners(card, saveIcon, heartIcon, project) {
    saveIcon.parentElement.addEventListener("click", () => {
        if(saveIcon.classList.contains("projects__save-icon--save")) {
            saveIcon.classList.remove("projects__save-icon--save");
        }
        else {
            saveIcon.classList.add("projects__save-icon--save");
        }
    });

    heartIcon.parentElement.addEventListener("click", () => {
        let likesCounter = card.querySelector(".projects__card-heart-content");

        if(heartIcon.classList.contains("projects__heart-icon--liked")) {
            heartIcon.classList.remove("projects__heart-icon--liked");
            likesCounter.textContent = project.likes;
        }
        else {
            heartIcon.classList.add("projects__heart-icon--liked");
            likesCounter.textContent = Number(project.likes) + 1;
        }
    });

}

function renderProjects(projects) {
    DOM.projectCards.innerHTML = "";
    const fragment = new DocumentFragment();

    for(let project of projects) {
        let template = document.getElementById('project-card-template');
        let card = template.content.cloneNode(true).firstElementChild;
        card.id = `project-id-${project.id}`;
        
        let img = card.querySelector(".projects__card-image");
        let title = card.querySelector(".projects__card-title");
        let paragraph = card.querySelector(".projects__card-paragraph");
        let link = card.querySelector(".projects__card-button");
        let likesCounter = card.querySelector(".projects__card-heart-content");
        let saveIcon = card.querySelector(".projects__save-icon");
        let heartIcon = card.querySelector(".projects__heart-icon")

        img.src = project.imageURL;
        title.textContent = project.title;
        paragraph.textContent = project.content;
        link.href = project.githubURL;
        likesCounter.textContent = project.likes;

        addListeners(card, saveIcon, heartIcon, project);
        fragment.appendChild(card);
    }

    DOM.projectCards.appendChild(fragment);
    
}


window.addEventListener("DOMContentLoaded", async () => {
    projects = await fetchProjects();
    DOM.projectCards = document.getElementById("project-cards");
    renderProjects(projects);
    
})






