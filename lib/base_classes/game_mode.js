export default class GameMode {
  constructor(canvas, $gameModeSpace, changeGameMode) {
    this.canvas = canvas;
    this.$gameModeSpace = $gameModeSpace;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
    this.changeGameMode = changeGameMode;
    this.events = [];
    this.$gameModeSpace.innerHTML = "";
    this.buildHTMLElements();
  }
  run() {
    this.registerEvents();
    this.startAction();
  }
  buildHTMLElements() {
    //implement in child classes, append to this.$gameModeSpace
  }


  registerEvents() {
    //click handlers and whatnot
  }

  addEvent(element, eventName, callback) {
    const boundCallback = callback.bind(this);
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

  removeEvents() {
    this.events.forEach(function (eventData) {
      eventData.el.removeEventListener(
        eventData.eventName,
        eventData.callback
      );
    });
  }

  startAction() {
    //WRITE IN CHILD CLASS
    //start intervals (and store their ids)
  }

  dispose() {
    //if intervals are set, overwrite in child class
    this.removeEvents()
  }
}