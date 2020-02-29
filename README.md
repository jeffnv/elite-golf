# [ELITE GOLF](http://golf.fiddler.io/)

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

- golf

## Usage

```html
<div id="golf-game"></div>
<script>
  const $gameEl = $("#golf-game");
  const gameOverCallback = function(results) {
    const score = results.score;
    const par = results.par;
    alert("par: " + par + " score: " + score);
  };
  const game = new EliteGolf($gameEl, gameOverCallback);
</script>
```
