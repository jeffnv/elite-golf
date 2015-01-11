#       [ELITE GOLF](http://fiddler.io/elite-golf)

                      |H|
                      |H|
                      |||
                      |||
                      |V|
                      | |
        .----=--.-':'-; <
       /=====  /'.'.'.'\ |
      |====== |.'.'.'.'.||             ___________
       \=====  \'.'.'.'/ /          .o8888888888888o.
        '--=-=-='-:.:-'-`           88888888888888888
                                    'Y8888888888888P`
                                      `"""""""""""`

## Features
* golf

## Usage
```html
  <div id="golf-game"></div>
  <script>
    var $gameEl = $('#golf-game');
    var gameOverCallback = function(results){
        var score = results.score;
        var par = results.par;
        alert('par: ' + par + " score: " + score);
    };
    var game = new EliteGolf($gameEl, gameOverCallback);
  </script>
```
