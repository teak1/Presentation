const _JSX = { attribute(e, n, v) { if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/

import hiarchy from "./HiarchyObject.js";
function makeButton(path, cb) {
    let element = ((function(_this){
let _0_0kf0yqbc9z0a = document.createElement("div");
_JSX.attribute(_0_0kf0yqbc9z0a,"class","app-button-static");
_JSX.attribute(_0_0kf0yqbc9z0a,"app-action",cb);
let _1_0hfw3lk39629 = document.createElement("img");
_JSX.attribute(_1_0hfw3lk39629,"src",path);
_JSX.attribute(_1_0hfw3lk39629,"width","50");
_JSX.attribute(_1_0hfw3lk39629,"height","50");
_0_0kf0yqbc9z0a.appendChild(_1_0hfw3lk39629);
return _0_0kf0yqbc9z0a;})(this));
    app.register_button(element);
    return element;
}

export default {
    headbar(presentation) {
        return (
            (function(_this){
let _0_04hnz2wlbvmp = document.createElement("div");
let _1_006jn083xty3e = document.createElement("div");
_JSX.attribute(_1_006jn083xty3e,"class","app-header");
_JSX.append(_1_006jn083xty3e,makeButton("/assets/ico/png/back.png", "back"));
let _2_0i0s7o1266r = document.createElement("div");
_JSX.attribute(_2_0i0s7o1266r,"class","app-title-wrapper");
let _3_0kdaag2pz2pi = document.createElement("strong");
_JSX.append(_3_0kdaag2pz2pi,presentation.META.name.replace(/\\s/g, " "));
_2_0i0s7o1266r.appendChild(_3_0kdaag2pz2pi);
_1_006jn083xty3e.appendChild(_2_0i0s7o1266r);
_JSX.append(_1_006jn083xty3e,makeButton("/assets/ico/png/settings.png", "toggle-settings"));
_0_04hnz2wlbvmp.appendChild(_1_006jn083xty3e);
let _4_00g7mwdm79ldo = document.createElement("div");
_JSX.attribute(_4_00g7mwdm79ldo,"class","app-content");
let _5_0y7pcpq6tr1q = document.createElement("div");
_JSX.attribute(_5_0y7pcpq6tr1q,"class","hiarchy");
_JSX.append(_5_0y7pcpq6tr1q,new hiarchy.Folder("test", [new hiarchy.Folder("world").element, new hiarchy.Folder("bbbb", [new hiarchy.Object({}).element]).element]).element);
_4_00g7mwdm79ldo.appendChild(_5_0y7pcpq6tr1q);
let _6_0l9xsg4a07w = document.createElement("div");
_JSX.attribute(_6_0l9xsg4a07w,"class","object-select");
_4_00g7mwdm79ldo.appendChild(_6_0l9xsg4a07w);
let _7_03dvh8i6b5q = document.createElement("div");
_JSX.attribute(_7_03dvh8i6b5q,"class","timeline");
_4_00g7mwdm79ldo.appendChild(_7_03dvh8i6b5q);
let _8_04e9agas3tdc = document.createElement("div");
_JSX.attribute(_8_04e9agas3tdc,"class","properties");
_4_00g7mwdm79ldo.appendChild(_8_04e9agas3tdc);
let _9_06apjepfypns = document.createElement("div");
_JSX.attribute(_9_06apjepfypns,"class","preview");
_4_00g7mwdm79ldo.appendChild(_9_06apjepfypns);
_0_04hnz2wlbvmp.appendChild(_4_00g7mwdm79ldo);
return _0_04hnz2wlbvmp;})(this)

        );
    }
}
/*
* attribution <div>Icons made by <a href="https://www.flaticon.com/packs/multimedia-collection" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/