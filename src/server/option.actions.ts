'use server'

import { crawl } from "@/lib/crawl";
import { HackerNewItem, hackerNewsWebCrawlerCallback } from "@/lib/crawl.callbacks";
import endpoints from "@/lib/endpoints";
import { wordCounter } from "@/lib/word-counter";

export const firstOption = async () => {
    const items = await crawl<HackerNewItem[]>(endpoints.hackerNews, hackerNewsWebCrawlerCallback);
    const usefullItems = items.slice(0, 30);

    const orderedByComments = usefullItems.sort((a, b) => a.comments - b.comments);
    const moreThanFiveWords = orderedByComments
        .filter(e => wordCounter(e.title) > 5);

    return moreThanFiveWords;
};


export const secondOption = async () => {
    const items = await crawl<HackerNewItem[]>(endpoints.hackerNews, hackerNewsWebCrawlerCallback);
    const usefullItems = items.slice(0, 30);

    const lessOrEqualToFive = usefullItems
        .filter(e => wordCounter(e.title) <= 5);
    const orderedByPoints = lessOrEqualToFive.sort((a, b) => a.points - b.points);
    return orderedByPoints;
}