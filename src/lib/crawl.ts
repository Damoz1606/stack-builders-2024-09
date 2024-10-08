'use server'

import { CheerioAPI, load } from "cheerio";

/**
 * Web crawler based on fetch, require a callback to return an object instead of a string
 * @param url 
 * @param cb 
 * @returns 
 */
export async function crawl<T>(url: string, cb: ($: CheerioAPI) => T): Promise<T> {
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