import { CheerioAPI, load } from "cheerio";

export async function crawl<T>(url: string, cb: ($: CheerioAPI) => Promise<T>): Promise<T> {
    try {
        const data: Response = await fetch(url);
        if (!data.ok) {
            const reason = await data.json();
            throw new Error(reason);
        }
        
        const html: string = await data.text();
        const api = load(html);
        return cb(api);
    } catch (error) {
        throw error;
    }
}