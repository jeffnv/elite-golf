function GameStateMachine($parentEl, payloadReadyCallback) {
    this.$parentEl = $parentEl;
    this.payloadReadyCallback = payloadReadyCallback;
    this.createCoreElements();
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.getAttribute('width');
    this.height = this.canvas.getAttribute('height');
    this.modeIndex = 0;
}

GameStateMachine.prototype.createCoreElements = function() {
    var $canvas = $('<canvas class="game-canvas" width="500" height="500"></canvas>');
    this.$parentEl.append($canvas);
    this.canvas = $canvas[0];
    this.$gameModeSpace = $('<div class="game-mode-space"></div>');
    this.$parentEl.append(this.$gameModeSpace);
}

GameStateMachine.prototype.changeMode = function(newModeIndex) {
    this.modeIndex = newModeIndex;
    var modeClass = this.modes[this.modeIndex];
    if (modeClass) {
        var mode = new modeClass(
            this.canvas,
            this.$gameModeSpace,
            this.advanceMode.bind(this)
        );
        this.swapCurrentMode(mode);
    } else {
        alert("wtf is this?" + state);
    }
}

GameStateMachine.prototype.advanceMode = function(payload) {
    //usually used for a final score object or a map
    if (payload) {
        this.payloadReadyCallback(payload);
    }
    this.changeMode((this.modeIndex + 1) % this.modes.length);
}

GameStateMachine.prototype.run = function() {
    //always start with the first mode
    this.changeMode(0);
}

GameStateMachine.prototype.swapCurrentMode = function(newMode) {
    if (this.currentMode) {
        this.currentMode.dispose();
    }
    this.currentMode = newMode;
    this.currentMode.run();
}
