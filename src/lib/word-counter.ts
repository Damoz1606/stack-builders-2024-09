export function wordCounter(e: string): number {
    return e.replace(/[^\w\s]/gm, "")
        .replace(/\s+/g, " ")
        .split(/\s+/g)
        .length;
}