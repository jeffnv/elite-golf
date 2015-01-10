function ScoreCard($scoreEl) {
    this.$scoreEl = $scoreEl;
    this.$holeRow = this.$scoreEl.find('.hole-row');
    this.$parRow = this.$scoreEl.find('.par-row');
    this.$strokesRow = this.$scoreEl.find('.strokes-row');
}

ScoreCard.prototype.addHole = function(number, par) {
    this.$holeRow.append('<td>' + number + '</td>');
    this.$parRow.append('<td>' + par + '</td>');
    this.$strokesRow.append('<td></td>');
}
ScoreCard.prototype.courseLength = function() {
    return this.$strokesRow.children().length;
}
ScoreCard.prototype.logStroke = function(idx) {
    var currentStrokes = this.strokes(idx);
    this.strokes(idx, currentStrokes + 1);
}
ScoreCard.prototype.strokes = function(idx, val) {
    var node = this.$strokesRow.children()[idx + 1];
    node.innerText = val || node.innerText;
    return parseInt(node.innerText) || 0;
};
ScoreCard.prototype.par = function(idx, val) {
    var node = this.$parRow.children()[idx + 1];
    node.innerText = val || node.innerText;
    return parseInt(node.innerText) || 0;
};
ScoreCard.prototype.eachHole = function(callBack) {
    var holeCount = this.courseLength();
    for (var i = 0; i < holeCount - 1; i++) {
        callBack(this.par(i), this.strokes(i));
    }
};
ScoreCard.prototype.totalScore = function() {
    var score = 0;
    this.eachHole(function(par, strokes) {
        score += strokes;
    });
    return score;
};
ScoreCard.prototype.totalPar = function() {
    var totalPar = 0;
    this.eachHole(function(par, strokes) {
        totalPar += par;
    });
    return totalPar;
};
