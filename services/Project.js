import Page from "./Page.js";
import ProjectList from "./ProjectList.js";

class Project extends Page {
    render(mainElement) {

        const projectCards = this.content.querySelector('.projects__cards');
        projectCards.innerHTML = "";

        const fragment = new DocumentFragment();

        for(let project of ProjectList.getInstance().projects) {
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


            if(project.save == "true")
                saveIcon.classList.add("projects__save-icon--save")

            if(project.like == "true")
                heartIcon.classList.add("projects__heart-icon--liked")

            saveIcon.parentElement.addEventListener("click", () => {
                const cardId = saveIcon.parentElement.parentElement.id.split('-')[2];
                
                if(ProjectList.getInstance().find(cardId).save == "true")
                    ProjectList.getInstance().unsaveProject(cardId);
                else {
                    ProjectList.getInstance().saveProject(cardId);
                }

                this.render(mainElement);
            });

            heartIcon.parentElement.addEventListener("click", () => {
                const cardId = heartIcon.parentElement.parentElement.id.split('-')[2];
                if(ProjectList.getInstance().find(cardId).like == "false") {
                    ProjectList.getInstance().addLike(cardId);
                }
                else {
                    ProjectList.getInstance().removeLike(cardId);
                }
                
                this.render(mainElement);
            });

            
            fragment.appendChild(card);
        }

        projectCards.appendChild(fragment);
     
        super.render(mainElement);
    }

};

export default Project;