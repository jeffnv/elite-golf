ScoreCard = {
    strokes: function(idx, val) {
        var node = ScoreCard.strokeNodes()[idx];
        node.innerText = val || node.innerText;
        return parseInt(node.innerText) || 0;
    },
    par: function(idx, val) {
        var node = ScoreCard.parNodes()[idx];
        node.innerText = val || node.innerText;
        return parseInt(node.innerText) || 0;
    },
    parNodes: function() {
        var parNodes = ScoreCard._findNodes('par');
        //omit the first column
        return [].slice.call(parNodes, 1);
    },
    strokeNodes: function() {
        var strokeNodes = ScoreCard._findNodes('strokes');
        //omit the first column
        return [].slice.call(strokeNodes, 1);
    },
    totalScore: function() {
        var strokes = ScoreCard.strokeNodes();
        var total = 0;
        strokes.forEach(function(strokeNode) {
            total += parseInt(strokeNode.innerText) || 0;
        });
        return total;
    },
    _findNodes: function(id) {
        return document.getElementById(id).children;
    }
}
