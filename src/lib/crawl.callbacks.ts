import { CheerioAPI } from "cheerio";

export type HackerNewItem = {
    number: number;
    title: string;
    points: number;
    comments: number;
}

/**
 * Callback to perform operation for Hacker News
 * @param $ 
 * @returns 
 */
export function hackerNewsWebCrawlerCallback($: CheerioAPI): HackerNewItem[] {
    return $('.athing').toArray().map<HackerNewItem>((element) => {
        const title = $(element).find('.titleline a').text();
        const rank = $(element).find('.rank').text();

        const subtextElement = $(element).next().find('.subtext');
        const points = subtextElement.find('.score').text();

        const commentsText = subtextElement.find('a').last().text();
        const comments = commentsText.includes('comment') ? commentsText : '0 comments';

        return {
            title,
            number: parseInt(rank),
            points: parseInt(points.replace(' points', '')) || 0,
            comments: parseInt(comments.replace(' comments', '')) || 0
        }
    })
}