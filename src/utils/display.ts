export function print(matrix: number[][]): void {
    const rows = matrix.map((row) => {
        return (
            "│ " +
            row
                .map(
                    (v, i) =>
                        (matrix.map((row) => row[i]).some((v) => v < 0) && row[i] >= 0 ? " " : "") +
                        v.toString().padEnd(Math.max(...matrix.map((row) => row[i].toString().length)), " ")
                )
                .join(" ") +
            " │"
        );
    });

    return console.log([`┌${" ".repeat(rows[0].length - 2)}┐`, ...rows, `└${" ".repeat(rows[0].length - 2)}┘`].join("\n"));
}
