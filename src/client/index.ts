import { get } from "../base/request";
import { GetNewsForAppParams, GetNewsForAppResponse } from "./type";

export default class SteamClient {
    private steamKey: string; // steam api key
    private proxyIp?: string;
    private proxyPort?: string;
    /**
     * constructor
     * @param [steamKey] steam api key, is not required, if not provided, you only can use methods that name is include "Open"
     */
    constructor(steamKey?: string) {
        this.steamKey = steamKey || "";
    }

    /**
     * set proxy ip and port
     * @param proxyIp proxy ip
     * @param proxyPort proxy port
     */
    setProxy(proxyIp: string, proxyPort: string) {
        this.proxyIp = proxyIp;
        this.proxyPort = proxyPort;
    }

    /**
     * get proxy config
     * @returns proxy config
     */
    getProxyConfig() {
        if (!this.proxyIp || !this.proxyPort) {
            return false;
        }
        return {
            host: this.proxyIp,
            port: Number(this.proxyPort),
        }
    }

    /**
     * get steam api key
     * @returns steam api key
     */
    getSteamKey() {
        return this.steamKey;
    }

    /**
     * set steam api key
     * @param steamKey steam api key
     */
    setSteamKey(steamKey: string) {
        this.steamKey = steamKey;
    }

    /**
     * clear steam api key
     */
    clearSteamKey() {
        this.steamKey = "";
    }

    /**
     * get news for app
     * @param params params
     * @returns news for app
     */
    getNewsForAppOpen(params: GetNewsForAppParams) {
        const { appid, count = 10, maxlength = 10 } = params;

        return get<GetNewsForAppResponse>(`/ISteamNews/GetNewsForApp/v2/`, { appid, count, maxlength }, {
            proxy: this.getProxyConfig(),
        });
    }



}