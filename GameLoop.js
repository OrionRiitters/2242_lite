class GameLoop {

    constructor() {
        this.timeStamp = Date.now();
        this.delta = 0;
        this.lastFrameTimeMS = this.timeStamp;
        this.exitGame = false;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async mainLoop() {
        this.exitGame = false;

        while(!this.exitGame) {
            await this.sleep(5);
            this.timeStamp = Date.now();
            this.delta += this.timeStamp - this.lastFrameTimeMS;
            this.lastFrameTimeMS = this.timeStamp;

            while(this.delta >= GameLoop.timeStep && !this.exitGame) {
                this.update();
                this.delta -= GameLoop.timeStep;
                console.log(this.delta);
            }
        }
    }

    update() {
        GUI.renderSprites();
    }
}

GameLoop.FPS = 60;
GameLoop.MS = 1000;
GameLoop.timeStep = GameLoop.MS / GameLoop.FPS;
