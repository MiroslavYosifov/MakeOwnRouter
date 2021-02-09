export const project = (project, id, page) => {
        return `<section>
                    <h1>${id}</h1>
                    <h2>project name: ${project.name}</h2>
                    <p>imageUrl: ${project.imageUrl}</p>
                    <p>githubUrl: ${project.githubUrl}</p>
                    <p>projectUrl: ${project.projectUrl}</p>
                    <p>descripion: ${project.description}</p>
                    <button id=${id}>Details</button>
                    ${ page === "details-page" ? "<button id=${id}>Edit</button> <button id=${id}>Delete</button>" : '' }
                </section>`;
};