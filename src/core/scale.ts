import { range } from "../utils/numbers";

export function scale(matrix: number[][], x: number, y: number): number[][] {
    if (matrix.length === y && matrix[0].length === x) return matrix;

    const scaled = new Array(y).fill(0).map(() => new Array(x).fill(0));

    scaled.forEach((row, i) => {
        row.forEach((_, j) => {
            scaled[i][j] = matrix[Math.floor(range(i, [0, y], [0, matrix.length]))][Math.floor(range(j, [0, x], [0, matrix[0].length]))];
        });
    });

    return scaled;
}
