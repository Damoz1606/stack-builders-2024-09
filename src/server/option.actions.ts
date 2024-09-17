'use server'

import { crawl } from "@/lib/crawl";
import { HackerNewItem, hackerNewsWebCrawlerCallback } from "@/lib/crawl.callbacks";
import endpoints from "@/lib/endpoints";

export const firstOption = async () => {
    const items = await crawl<HackerNewItem[]>(endpoints.hackerNews, hackerNewsWebCrawlerCallback);
    const usefullItems = items.slice(0, 30);

    const orderedByComments = usefullItems.sort((a, b) => a.comments - b.comments);
    const lessOrEqualToFive = orderedByComments.filter(e => e
        .title
        .replace(/[^\w\s]/gm, "")
        .replace(/\s+/g, " ")
        .split(/\s+/g)
        .length >= 5);

    return lessOrEqualToFive;
};