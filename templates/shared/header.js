export const header = (props) => {
    return `<header>
                <nav class="navigation">
                    <ul>
                        <li><a href="/home">home</a></li>
                        <li><a href="/about">about</a></li>
                        <li><a href="/game">game</a></li>
                        <li><a href="/projects">projects</a></li>
                        <li><a href="/projects/create">create project</a></li>
                        <li><a href="/projects?parametr1=[dog]&parameter2=[cat]">projects1</a></li>
                    </ul>
                </nav>
            </header>`;
} 