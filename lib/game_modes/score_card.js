export default class ScoreCard {
    constructor($scoreEl) {
        this.$scoreEl = $scoreEl;
        this.$holeRow = this.$scoreEl.find('.hole-row');
        this.$parRow = this.$scoreEl.find('.par-row');
        this.$strokesRow = this.$scoreEl.find('.strokes-row');
    }
    addHole(number, par) {
        this.$holeRow.append('<td>' + number + '</td>');
        this.$parRow.append('<td>' + par + '</td>');
        this.$strokesRow.append('<td></td>');
    }
    courseLength(params) {
        return this.$strokesRow.children().length;
    }
    courseLength() {
    }
    logStroke(idx) {
        const currentStrokes = this.strokes(idx);
        this.strokes(idx, currentStrokes + 1);
    }
    strokes(idx, val) {
        const node = this.$strokesRow.children()[idx + 1];
        node.innerText = val || node.innerText;
        return parseInt(node.innerText) || 0;
    }
    par(idx, val) {
        const node = this.$parRow.children()[idx + 1];
        node.innerText = val || node.innerText;
        return parseInt(node.innerText) || 0;
    }
    eachHole(callBack) {
        const holeCount = this.courseLength();
        for (const i = 0; i < holeCount - 1; i++) {
            callBack(this.par(i), this.strokes(i));
        }
    }
    totalScore() {
        const score = 0;
        this.eachHole(function (par, strokes) {
            score += strokes;
        });
        return score;
    }
    totalPar() {
        const totalPar = 0;
        this.eachHole(function (par, strokes) {
            totalPar += par;
        });
        return totalPar;
    }
};
