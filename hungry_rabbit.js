// A very hungry rabbit is placed in the center of of a garden,
//     represented by a rectangular N x M 2D matrix.
// The values of the matrix will represent numbers of carrots
// available to the rabbit in each square of the garden.If the garden
// does not have an exact center, the rabbit should start in the
// square closest to the center with the highest carrot count.
// On a given turn, the rabbit will eat the carrots available on the
// square that it is on, and then move up, down, left, or right,
//     choosing the the square that has the most carrots.If there are no
// carrots left on any of the adjacent squares, the rabbit will go to
// sleep.You may assume that the rabbit will never have to choose
// between two squares with the same number of carrots.
// Write a function which takes a garden matrix and returns the number
// of carrots the rabbit eats.You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non - negative integers.For example:
// [[5, 7, 8, 6, 3],
// [0, 0, 7, 0, 4],
// [4, 6, 3, 4, 9],
// [3, 1, 0, 5, 8]]
// Should return:
// 27

const hungryRabbit = function (matrix) {
    let pos = findStartPos(matrix);
    return findNext(matrix, pos[0], pos[1]);
};


const findStartPos = function (matrix) {
    let middleCol = [Math.floor(matrix[0].length / 2)];
    let middleRow = [Math.floor(matrix.length / 2)];
    if (matrix[0].length % 2 === 0) {
        middleCol.push(middleCol[0] - 1);
    }
    if (matrix.length % 2 === 0) {
        middleRow.push(middleRow[0] - 1);
    }
    let max = 0;
    let pos;
    middleRow.forEach(row => {
        middleCol.forEach(col => {
            if (matrix[row][col] > max) {
                max = matrix[row][col];
                pos = [row, col];
            }
        });
    });

    return pos;
};

const findNext = function (matrix, row, col) {
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let max = 0;
    let next_row = null;
    let next_col = null;
    moves.forEach(move => {
        if (row + move[0] >= 0 && row + move[0] < matrix[row].length) {
            if (col + move[1] >= 0 && col + move[1] < matrix.length) {
                if (max < matrix[(row + move[0])][(col + move[1])]) {
                    max = matrix[(row + move[0])][(col + move[1])];
                    next_row = row + move[0];
                    next_col = col + move[1];
                }
            }
        }
    });
    let carrots = matrix[row][col];
    matrix[row][col] = 0;
    if (max > 0 && next_col >= 0 && next_row >= 0) {
        return carrots += findNext(matrix, next_row, next_col);
    } else {
        return carrots;
    }
};