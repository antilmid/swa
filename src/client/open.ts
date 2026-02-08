import { get } from "../base/request";

/**
 * Open API, no steam key required
 */
export interface GetNewsForAppParams {
    appid: string;
    count?: number;
    maxlength?: number;
}
export interface NewsItem {
    gid: string;
    title: string;
    url: string;
    is_external_url: boolean;
    author: string;
    contents: string;
    feedlabel: string;
    date: number;
    feedname: string;
    feed_type: number;
    appid: number;
};
export interface GetNewsForAppResponse {
    appnews: {
        appid: number;
        newsitems: NewsItem[];
        count: number;
    }
}
export const getNewsForApp = (params: GetNewsForAppParams) => {
    const { appid, count = 10, maxlength = 10 } = params;
    return get<GetNewsForAppResponse>(`/ISteamNews/GetNewsForApp/v2/?appid=${appid}&count=${count}&maxlength=${maxlength}`);
}