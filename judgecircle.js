var judgeCircle = function (moves) {
    let movesRef = {
        U: 1,
        D: -1,
        L: 1,
        R: -1
    }

    let vertical = 0;
    let horz = 0;

    moves.split('').forEach(move => {
        if (move === 'D' || move === 'U') {
            vertical += movesRef[move]
        } else {
            horz += movesRef[move]
        }
    })

    return (vertical === 0 && horz === 0);
};