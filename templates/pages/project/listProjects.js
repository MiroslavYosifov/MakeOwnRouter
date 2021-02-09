import { project } from './project.js';

export const listProjects = (projects) => {
    const elements = Object.keys(projects)
                           .map(key => {
                                return project(projects[key], key);
                            });

    return `<div id="ctx-projects">${elements.join("")}</div>`;
};