export default class GameStateMachine {
    constructor($parentEl, payloadReadyCallback) {
        this.$parentEl = $parentEl;
        this.payloadReadyCallback = payloadReadyCallback;
        this.createCoreElements();
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.getAttribute('width');
        this.height = this.canvas.getAttribute('height');
        this.modeIndex = 0;
    }

    createCoreElements() {
        const $canvas = $('<canvas class="game-canvas" width="500" height="500"></canvas>');
        this.$parentEl.append($canvas);
        this.canvas = $canvas[0];
        this.$gameModeSpace = $('<div class="game-mode-space"></div>');
        this.$parentEl.append(this.$gameModeSpace);

    }
    changeMode(newModeIndex) {
        this.modeIndex = newModeIndex;
        const modeClass = this.modes[this.modeIndex];
        if (modeClass) {
            const mode = new modeClass(
                this.canvas,
                this.$gameModeSpace,
                this.advanceMode.bind(this)
            );
            this.swapCurrentMode(mode);
        } else {
            alert("wtf is this?" + state);
        }
    }

    advanceMode(payload) {
        //usually used for a final score object or a map
        if (payload) {
            this.payloadReadyCallback(payload);
        }
        this.changeMode((this.modeIndex + 1) % this.modes.length);
    }

    run() {
        //always start with the first mode
        this.changeMode(0);
    }

    swapCurrentMode(newMode) {
        if (this.currentMode) {
            this.currentMode.dispose();
        }
        this.currentMode = newMode;
        this.currentMode.run();
    }
}

