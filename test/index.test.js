import assert from "node:assert";
import { getNewsForApp } from "../dist/index.mjs";

const totalTest = 1;
let successTest = 0;
let failTest = 0;

(async () => {
    const params = {
        appid: "440",
        count: 1,
        maxlength: 1,
    };
    const res = await getNewsForApp(params);
    console.log(res, res.appid);
    assert.equal(res.appnews.appid, parseInt(params.appid));
    assert.equal(res.appnews.newsitems.length, params.count);
    successTest++;
})();
