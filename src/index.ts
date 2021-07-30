import { scale } from "./core/scale";
import { clone } from "./utils/misc";
import { lcm, range } from "./utils/numbers";

function diff(...args: [a: number[][], b: number[][]]): number {
    const [aΩ, bΩ] = args;

    if (
        aΩ.some((x, i, a) => !Array.isArray(x) || x.some((n) => typeof n !== "number" || n < 0 || n > 1) || x.length !== (a[i + 1]?.length ?? x.length)) ||
        bΩ.some((x, i, a) => !Array.isArray(x) || x.some((n) => typeof n !== "number" || n < 0 || n > 1) || x.length !== (a[i + 1]?.length ?? x.length))
    )
        throw new TypeError(`Both arguments must be matrices of numbers.`);

    const [aΔᵪ, aΔᵧ, bΔᵪ, bΔᵧ] = [aΩ.length, aΩ[0].length, bΩ.length, bΩ[0].length];

    let diff = 0;

    const [a, b] = (function ([a, b]) {
        if (aΔᵪ !== bΔᵪ || aΔᵧ !== bΔᵧ) {
            const [wѱ, lѱ] = [lcm(aΔᵪ, bΔᵪ), lcm(aΔᵧ, bΔᵧ)];

            return [scale(a, wѱ, lѱ), scale(b, wѱ, lѱ)];
        }

        return [clone(a), clone(b)];
    })([aΩ, bΩ]);

    a.forEach((row, y) => {
        row.forEach((_, x) => {
            diff += Math.abs(a[y][x] - b[y][x]);
        });
    });

    return 1 - range(diff, [0, a.length * a[0].length], [0, 1]);
}

export { diff };

export default diff;
module.exports = diff;
exports.default = diff;
