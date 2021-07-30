export function gcd(a: number, b: number): number {
    if (a === 0) return b;

    while (b !== 0) {
        if (a > b) a = a - b;
        else b = b - a;
    }

    return a;
}

export function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

export function lerp(a: number, b: number, t: number) {
    return a * (1 - t) + b * t;
}

export function range(value: number, r1: [number, number], r2: [number, number]) {
    return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
}
