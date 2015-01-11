function GameMode(canvas, $gameModeSpace, changeGameMode) {
    this.canvas = canvas;
    this.$gameModeSpace = $gameModeSpace;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
    this.changeGameMode = changeGameMode;
    this.events = [];
    this.$gameModeSpace.empty();
    this.buildHTMLElements();
}

GameMode.prototype.run = function() {
    this.registerEvents();
    this.startAction();
}

GameMode.prototype.buildHTMLElements = function(){
  //implement in child classes, append to this.$gameModeSpace
}


GameMode.prototype.registerEvents = function() {
    //click handlers and whatnot
}

GameMode.prototype.addEvent = function(element, eventName, callback) {
    var boundCallback = callback.bind(this);
    element.addEventListener(
        eventName,
        boundCallback,
        false
    );

    //so we can easily unsubscribe later
    this.events.push({
        el: element,
        eventName: eventName,
        callback: boundCallback
    });
}
GameMode.prototype.removeEvents = function() {
    this.events.forEach(function(eventData) {
            eventData.el.removeEventListener(
                eventData.eventName,
                eventData.callback
            );
    });
}
GameMode.prototype.startAction = function() {
    //WRITE IN CHILD CLASS
    //start intervals (and store their ids)
}

GameMode.prototype.dispose = function() {
    //if intervals are set, overwrite in child class
    this.removeEvents()
}
