// SC = 1, TC = n^2

const noOfRows1 = 3,
    noOfCol1 = 3;
const noOfRows2 = 1,
    noOfCol2 = 2;
const noOfRows3 = 4,
    noOfCol3 = 4;
const noOfRows4 = 3,
    noOfCol4 = 4;
const noOfRows5 = 4,
    noOfCol5 = 3;
const noOfRows6 = 6,
    noOfCol6 = 6;

function findHourGlassesCountAndCenters(noOfRows, noOfCols) {
    console.log(`noOfRows = ${noOfRows}, noOfcols = ${noOfCols}`);
    if (noOfRows < 3 || noOfCols < 3) {
        console.log(`Count of hourglasses = 0\n`);
        return;
    }
    console.log(
        `Count of hourglasses = ${
            noOfRows * noOfCols - (noOfCols * 2 + noOfRows * 2) + 4
        }`
    );
    // exclude all border rows and 4 corner elements are duplicated so add one count of each corner

    for (let i = 0; i < noOfRows; i++) {
        // exclude 1st row and last row
        if (i === 0 || i === noOfRows - 1) {
            continue;
        }

        // for each other rows, exclude 1st and last column
        for (let j = 0; j < noOfCols; j++) {
            if (j === 0 || j === noOfCols - 1) {
                continue;
            }
            console.log(`(${i},${j})`);
        }
    }
    console.log('\n');
}

findHourGlassesCountAndCenters(noOfRows1, noOfCol1);
findHourGlassesCountAndCenters(noOfRows2, noOfCol2);
findHourGlassesCountAndCenters(noOfRows3, noOfCol3);
findHourGlassesCountAndCenters(noOfRows4, noOfCol4);
findHourGlassesCountAndCenters(noOfRows5, noOfCol5);
findHourGlassesCountAndCenters(noOfRows6, noOfCol6);
