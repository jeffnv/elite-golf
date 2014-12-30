function GameMode(canvas, endCallback ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
    this.endCallback = endCallback;
    //if the mode has an html tab, set its this.tabID in the 
    //child constructor
}

GameMode.prototype.run = function(){
  this.deactivateAllTabs();
  this.activateTab();
  this.registerEvents();
  this.startAction();
}

GameMode.prototype.deactivateAllTabs = function(){
  var tabs = document.getElementById('game-tabs').children;
  for(var i = 0; i < tabs.length; i++){
    //remove the active class from all game-tabs
    tabs[i].setAttribute('class', '');
  }
}
GameMode.prototype.activateTab = function(){
  //activate
  var tab = document.getElementById(this.tabID);
  if(tab){
    tab.setAttribute('class', 'active');
  }
}

GameMode.prototype.registerEvents = function(){
  //click handlers and whatnot
}

GameMode.prototype.startAction = function(){
  //start intervals (and store their ids)
}

GameMode.prototype.dispose = function(){
  //unsub from events
  //clear intervals
}

