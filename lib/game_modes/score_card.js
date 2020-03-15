
export default class ScoreCard {
    constructor(scoreEl) {
        this.scoreEl = scoreEl;
        this.holeRow = this.scoreEl.children[0];
        this.parRow = this.scoreEl.children[1];
        this.strokesRow = this.scoreEl.children[2];
    }
    addHole(number, par) {
        const makeTD = (val = "") => {
            const td = document.createElement('td');
            td.innerText = val;
            return td;
        };
        this.holeRow.appendChild(makeTD(number));
        this.parRow.appendChild(makeTD(par));
        this.strokesRow.appendChild(makeTD());
    }
    courseLength(params) {
        return this.strokesRow.children.length;
    }
    logStroke(idx) {
        const currentStrokes = this.strokes(idx);
        this.strokes(idx, currentStrokes + 1);
    }
    strokes(idx, val) {
        const node = this.strokesRow.children[idx + 1];
        node.innerText = val || node.innerText;
        return parseInt(node.innerText) || 0;
    }
    par(idx, val) {
        const node = this.parRow.children()[idx + 1];
        node.innerText = val || node.innerText;
        return parseInt(node.innerText) || 0;
    }
    eachHole(callBack) {
        let holeCount = this.courseLength();
        for (let i = 0; i < holeCount - 1; i++) {
            callBack(this.par(i), this.strokes(i));
        }
    }
    totalScore() {
        let score = 0;
        this.eachHole(function (par, strokes) {
            score += strokes;
        });
        return score;
    }
    totalPar() {
        let totalPar = 0;
        this.eachHole(function (par, strokes) {
            totalPar += par;
        });
        return totalPar;
    }
}
