export const project = (project, id, page) => {
        const buttons = `<button id=${"edit" + id}>Edit</button> <button id=${"delete" + id}>Delete</button>`;
        return `<section>
                    <h1>name: ${project.name}</h1>
                    <p>imageUrl: ${project.imageUrl}</p>
                    <p>githubUrl: ${project.githubUrl}</p>
                    <p>projectUrl: ${project.projectUrl}</p>
                    <p>descripion: ${project.description}</p>
                    ${ page === "details-page" ? buttons : `<button id=${id}>Details</button>` }
                </section>`;
};