export const home = (props) => {
    document.querySelector('main').innerHTML = `<section>
                                                    <h1>Person</h1>
                                                    <p>name: ${props.name}</p>
                                                    <p>height: ${props.height}</p>
                                                    <p>mass: ${props.mass}</p>
                                                </section>`;
}
