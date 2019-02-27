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
let _0_0udrlq8fx3t = document.createElement("div");
_JSX.attribute(_0_0udrlq8fx3t,"class","app-button-static");
_JSX.attribute(_0_0udrlq8fx3t,"app-action",cb);
let _1_0rpe0xnkez0o = document.createElement("img");
_JSX.attribute(_1_0rpe0xnkez0o,"src",path);
_JSX.attribute(_1_0rpe0xnkez0o,"width","50");
_JSX.attribute(_1_0rpe0xnkez0o,"height","50");
_0_0udrlq8fx3t.appendChild(_1_0rpe0xnkez0o);
return _0_0udrlq8fx3t;})(this));
    app.register_button(element);
    return element;
}

export default {
    headbar(presentation) {
        return (
            (function(_this){
let _0_06c0b7dcwchn = document.createElement("div");
_JSX.attribute(_0_06c0b7dcwchn,"class","app-header");
_JSX.append(_0_06c0b7dcwchn,makeButton("/assets/ico/png/back.png", "back"));
let _1_0tczx9vx959 = document.createElement("div");
_JSX.attribute(_1_0tczx9vx959,"class","app-title-wrapper");
let _2_0z0wgr8u1avj = document.createElement("strong");
_JSX.append(_2_0z0wgr8u1avj,presentation.META.name);
_1_0tczx9vx959.appendChild(_2_0z0wgr8u1avj);
_0_06c0b7dcwchn.appendChild(_1_0tczx9vx959);
_JSX.append(_0_06c0b7dcwchn,makeButton("/assets/ico/png/settings.png", "toggle-settings"));
return _0_06c0b7dcwchn;})(this)
        );
    }
}
/*
* attribution <div>Icons made by <a href="https://www.flaticon.com/packs/multimedia-collection" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/