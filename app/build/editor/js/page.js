const _JSX = { attribute(e, n, v) { if (!v) return; if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/

import text from "./objects/text.js";
import hiarchy from "./HiarchyObject.js";
window.test = new text();
function makeButton(path, cb) {
    let element = ((function(_this){let _0_054qw959sxrb = document.createElement("div");_JSX.attribute(_0_054qw959sxrb,"class","app-button-static");_JSX.attribute(_0_054qw959sxrb,"app-action",cb);let _1_03b4etroc7sc = document.createElement("img");_JSX.attribute(_1_03b4etroc7sc,"src",path);_JSX.attribute(_1_03b4etroc7sc,"width","50");_JSX.attribute(_1_03b4etroc7sc,"height","50");_0_054qw959sxrb.appendChild(_1_03b4etroc7sc);return _0_054qw959sxrb;})(this));
    app.register_button(element);
    return element;
}

export default {
    headbar(presentation) {
        return (
            (function(_this){let _0_0y9k1p584aq = document.createElement("div");let _1_0z8djsrv20j = document.createElement("div");_JSX.attribute(_1_0z8djsrv20j,"class","app-header");_JSX.append(_1_0z8djsrv20j,makeButton("/assets/ico/png/back.png", "back"));let _2_0ol0wqu1g549 = document.createElement("div");_JSX.attribute(_2_0ol0wqu1g549,"class","app-title-wrapper");let _3_08unwx4bq8p9 = document.createElement("strong");_JSX.append(_3_08unwx4bq8p9,presentation.META.name.replace(/\\s/g, " "));_2_0ol0wqu1g549.appendChild(_3_08unwx4bq8p9);_1_0z8djsrv20j.appendChild(_2_0ol0wqu1g549);_JSX.append(_1_0z8djsrv20j,makeButton("/assets/ico/png/settings.png", "toggle-settings"));_0_0y9k1p584aq.appendChild(_1_0z8djsrv20j);let _4_004cra01dzlkf = document.createElement("div");_JSX.attribute(_4_004cra01dzlkf,"class","app-content");let _5_0h6tq0e3y9p = document.createElement("div");_JSX.attribute(_5_0h6tq0e3y9p,"class","hiarchy");_JSX.append(_5_0h6tq0e3y9p,new hiarchy.Folder("test", [new hiarchy.Folder("world").element, new hiarchy.Folder("bbbb", [new hiarchy.Object({}).element]).element]).element);_4_004cra01dzlkf.appendChild(_5_0h6tq0e3y9p);let _6_00yi1xt1n057 = document.createElement("div");_JSX.attribute(_6_00yi1xt1n057,"class","object-select");let _7_0wo0kqo848qf = document.createElement("div");_JSX.attribute(_7_0wo0kqo848qf,"class","object-wrapper");_6_00yi1xt1n057.appendChild(_7_0wo0kqo848qf);_4_004cra01dzlkf.appendChild(_6_00yi1xt1n057);let _8_0zcp25inmp1k = document.createElement("div");_JSX.attribute(_8_0zcp25inmp1k,"class","timeline");_4_004cra01dzlkf.appendChild(_8_0zcp25inmp1k);let _9_0dw2kwln79hd = document.createElement("div");_JSX.attribute(_9_0dw2kwln79hd,"class","properties");_4_004cra01dzlkf.appendChild(_9_0dw2kwln79hd);let _a_0iuzv4t6tc2h = document.createElement("div");_JSX.attribute(_a_0iuzv4t6tc2h,"class","preview");_4_004cra01dzlkf.appendChild(_a_0iuzv4t6tc2h);_0_0y9k1p584aq.appendChild(_4_004cra01dzlkf);return _0_0y9k1p584aq;})(this)

        );
    }
}
/*
* attribution <div>Icons made by <a href="https://www.flaticon.com/packs/multimedia-collection" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/