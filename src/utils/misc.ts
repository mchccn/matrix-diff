export function clone(matrix: number[][]): number[][] {
    return [...matrix.map((x) => [...x])];
}
