export const snakeGame = (props) => {
    return `<section>
                <header>
                    <h1 class="title">Snake</h1>
                </header>
                <main class="main-game-content">
                    <header>
                        <h1 id="ctx-score">Score: 00</h1>
                        <button id="ctx-play">Play</button>
                        <button id="ctx-pause">Pause</button>
                    </header>
                    <section class="game-wrapper">
                        <section class="module-message-content">
                            <h1 id="ctx-message"></h1>
                        </section>
                        <canvas type="module" id="gameCanvas"></canvas>
                    </section>
                </main>
            </section>`;
};