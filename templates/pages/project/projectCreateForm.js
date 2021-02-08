export const projectCreateForm = (props) => {
    let form = `<form action="/none" >
                <label for="name">name</label>
                <input type="text" name="name" id="name" ><br>

                <label for="githubUrl">githubUrl</label>
                <input type="text" name="githubUrl" id="githubUrl"><br>

                <label for="projectUrl">projectUrl</label>
                <input type="text" name="projectUrl" id="projectUrl"><br>

                <label for="description">description</label>
                <input type="text" name="description" id="description"><br>

                <label for="imageUrl">imageUrl</label>
                <input type="text" name="imageUrl" id="imageUrl"><br>

                <button id="postProject">Post Project</button>
            </form>`;
    document.querySelector('main').innerHTML = form;
};