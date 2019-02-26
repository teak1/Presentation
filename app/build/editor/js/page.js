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
let _0_0ft0wwss5cpv = document.createElement("div");
_JSX.attribute(_0_0ft0wwss5cpv,"class","app-button-static");
_JSX.attribute(_0_0ft0wwss5cpv,"app-action",cb);
let _1_0yqad6of71f9 = document.createElement("img");
_JSX.attribute(_1_0yqad6of71f9,"src",path);
_JSX.attribute(_1_0yqad6of71f9,"width","50");
_JSX.attribute(_1_0yqad6of71f9,"height","50");
_0_0ft0wwss5cpv.appendChild(_1_0yqad6of71f9);
return _0_0ft0wwss5cpv;})(this));
    app.register_button(element);
    return element;
}

export default {
    headbar(presentation) {
        return (
            (function(_this){
let _0_0z40dkbvzpii = document.createElement("div");
_JSX.attribute(_0_0z40dkbvzpii,"class","app-header");
_JSX.append(_0_0z40dkbvzpii,makeButton("/assets/ico/png/back.png", "back"));
let _1_0aef8u0q5bsv = document.createElement("div");
_JSX.attribute(_1_0aef8u0q5bsv,"class","app-title-wrapper");
let _2_0gnu55ubgysj = document.createElement("strong");
_JSX.append(_2_0gnu55ubgysj,presentation.META.name);
_1_0aef8u0q5bsv.appendChild(_2_0gnu55ubgysj);
_0_0z40dkbvzpii.appendChild(_1_0aef8u0q5bsv);
_JSX.append(_0_0z40dkbvzpii,makeButton("/assets/ico/png/settings.png", "toggle-settings"));
return _0_0z40dkbvzpii;})(this)
        );
    }
}
/*
* attribution <div>Icons made by <a href="https://www.flaticon.com/packs/multimedia-collection" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/