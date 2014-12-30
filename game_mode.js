function GameMode(canvas, changeGameMode) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
    this.changeGameMode = changeGameMode;
    this.events = [];
    //if the mode has an html tab, set its this.tabID in the 
    //child constructor
}

GameMode.prototype.run = function() {
    this.deactivateAllTabs();
    this.activateTab();
    this.registerEvents();
    this.startAction();
}

GameMode.prototype.deactivateAllTabs = function() {
    var tabs = document.getElementById('game-tabs').children;
    for (var i = 0; i < tabs.length; i++) {
        //remove the active class from all game-tabs
        tabs[i].setAttribute('class', '');
    }
}
GameMode.prototype.activateTab = function() {
    //activate
    var tab = document.getElementById(this.tabID);
    if (tab) {
        tab.setAttribute('class', 'active');
    }
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
    //WRITE IN CHILD CLASS
    //unsub from events
    //clear intervals
}
