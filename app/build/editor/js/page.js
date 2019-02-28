const _JSX = {
    attribute(el, name, val) {
        if (val.constructor == Object) {
            for (let k in val) {
                el[name][k] = val[k];
            }
            return;
        }
        el.setAttribute(name, val);
    },
    append(el, child) {
        if (child.constructor == Array) return child.forEach((i) => _JSX.append(el, i));
        if (child.nodeType || child.textContent) {
            el.appendChild(child);
        } else {
            el.appendChild(document.createTextNode(child.toString()));
        }
    }
};
/*end of jsx code*/

function makeButton(path, cb) {
    let element = ((function(_this){
let _0_0avg4gxwtbgi = document.createElement("div");
_JSX.attribute(_0_0avg4gxwtbgi,"class","app-button-static");
_JSX.attribute(_0_0avg4gxwtbgi,"app-action",cb);
let _1_09kq66xrzu = document.createElement("img");
_JSX.attribute(_1_09kq66xrzu,"src",path);
_JSX.attribute(_1_09kq66xrzu,"width","50");
_JSX.attribute(_1_09kq66xrzu,"height","50");
_0_0avg4gxwtbgi.appendChild(_1_09kq66xrzu);
return _0_0avg4gxwtbgi;})(this));
    app.register_button(element);
    return element;
}

export default {
    headbar(presentation) {
        return (
            (function(_this){
let _0_0ptiuonpecrs = document.createElement("div");
_JSX.attribute(_0_0ptiuonpecrs,"class","app-header");
_JSX.append(_0_0ptiuonpecrs,makeButton("/assets/ico/png/back.png", "back"));
let _1_082mph6irdr6 = document.createElement("div");
_JSX.attribute(_1_082mph6irdr6,"class","app-title-wrapper");
let _2_070xrvzbrew = document.createElement("strong");
_JSX.append(_2_070xrvzbrew,presentation.META.name.replace(/\\s/g, " "));
_1_082mph6irdr6.appendChild(_2_070xrvzbrew);
_0_0ptiuonpecrs.appendChild(_1_082mph6irdr6);
_JSX.append(_0_0ptiuonpecrs,makeButton("/assets/ico/png/settings.png", "toggle-settings"));
return _0_0ptiuonpecrs;})(this)
        );
    }
}
/*
* attribution <div>Icons made by <a href="https://www.flaticon.com/packs/multimedia-collection" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/