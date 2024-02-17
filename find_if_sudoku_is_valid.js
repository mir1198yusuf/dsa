// SC => n (or 9)
// TC => n^2 (or 9^2)
// since n is always 9 constant, we can say time & space is also constant

function findIfSudokuValid(sudoku) {
    // for each row, create new hash, before adding to hash, check if already in hash. if yes, return false, else add
    let lookup;
    for (let i = 0; i < 9; i++) {
        lookup = {};
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] !== '.' && lookup[sudoku[i][j]]) {
                return false;
            } else {
                sudoku[i][j] !== '.' && (lookup[sudoku[i][j]] = true);
            }
        }
    }

    // same for each column
    for (let i = 0; i < 9; i++) {
        lookup = {};
        for (let j = 0; j < 9; j++) {
            if (sudoku[j][i] !== '.' && lookup[sudoku[j][i]]) {
                return false;
            } else {
                sudoku[j][i] !== '.' && (lookup[sudoku[j][i]] = true);
            }
        }
    }

    // single box means 3x3
    // for each box, find their centers for each box, then find calculate all their items & do same lookup for each box as did for each row
    const boxCentres = [
        [1, 1],
        [1, 4],
        [1, 7],
        [4, 1],
        [4, 4],
        [4, 7],
        [7, 1],
        [7, 4],
        [7, 7]
    ];
    for (let i = 0; i < 9; i++) {
        const a = boxCentres[i][0];
        const b = boxCentres[i][1];
        const singleBoxCoordinates = [
            [a - 1, b - 1],
            [a - 1, b],
            [a - 1, b + 1],
            [a, b - 1],
            [a, b],
            [a, b + 1],
            [a + 1, b - 1],
            [a + 1, b],
            [a + 1, b + 1]
        ];

        lookup = {};
        for (j = 0; j < 9; j++) {
            if (
                sudoku[singleBoxCoordinates[j][0]][
                    singleBoxCoordinates[j][1]
                ] !== '.' &&
                lookup[
                    sudoku[singleBoxCoordinates[j][0]][
                        singleBoxCoordinates[j][1]
                    ]
                ]
            ) {
                return false;
            } else {
                sudoku[singleBoxCoordinates[j][0]][
                    singleBoxCoordinates[j][1]
                ] !== '.' &&
                    (lookup[
                        sudoku[singleBoxCoordinates[j][0]][
                            singleBoxCoordinates[j][1]
                        ]
                    ] = true);
            }
        }
    }

    return true;
}

const sudoku1 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

const sudoku2 = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

const sudoku3 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '3', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(findIfSudokuValid(sudoku1));
console.log(findIfSudokuValid(sudoku2));
console.log(findIfSudokuValid(sudoku3));
