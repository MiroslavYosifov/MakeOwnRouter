export const about = (props) => {
    const elements = props.results.map(person => {
        return `<section>
                    <h1>Person</h1>
                    <p>name: ${person.name}</p>
                    <p>height: ${person.height}</p>
                    <p>mass: ${person.mass}</p>
                </section>`;
            });

    return elements.join("");
};
