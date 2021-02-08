export const project = (projects) => {
    const elements = Object.keys(projects).map(key => {
        return `<section id="${key}">
                    <h1>${key}</h1>
                    <h2>project name: ${projects[key].name}</h2>
                    <p>imageUrl: ${projects[key].imageUrl}</p>
                    <p>githubUrl: ${projects[key].githubUrl}</p>
                    <p>projectUrl: ${projects[key].projectUrl}</p>
                    <p>descripion: ${projects[key].description}</p>
                    <button>Details</button>
                    <button>Delete</button>
                    <button>Edit</button>
                </section>`;
            });

    return elements;
};