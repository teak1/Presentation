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
let _0_0qjq5pvwxhc = document.createElement("div");
_JSX.attribute(_0_0qjq5pvwxhc,"class","app-button-static");
_JSX.attribute(_0_0qjq5pvwxhc,"app-action",cb);
let _1_0615shm1fuml = document.createElement("img");
_JSX.attribute(_1_0615shm1fuml,"src",path);
_JSX.attribute(_1_0615shm1fuml,"width","50");
_JSX.attribute(_1_0615shm1fuml,"height","50");
_0_0qjq5pvwxhc.appendChild(_1_0615shm1fuml);
return _0_0qjq5pvwxhc;})(this));
    app.register_button(element);
    return element;
}

export default {
    headbar(presentation) {
        return (
            (function(_this){
let _0_0lf46uk2uol9 = document.createElement("div");
_JSX.attribute(_0_0lf46uk2uol9,"class","app-header");
_JSX.append(_0_0lf46uk2uol9,makeButton("/assets/ico/png/back.png", "back"));
let _1_0g2f6v0smo9o = document.createElement("div");
_JSX.attribute(_1_0g2f6v0smo9o,"class","app-title-wrapper");
let _2_0r8xy4uz8oqa = document.createElement("strong");
_JSX.append(_2_0r8xy4uz8oqa,presentation.META.name.replace(/\\s/g, " "));
_1_0g2f6v0smo9o.appendChild(_2_0r8xy4uz8oqa);
_0_0lf46uk2uol9.appendChild(_1_0g2f6v0smo9o);
_JSX.append(_0_0lf46uk2uol9,makeButton("/assets/ico/png/settings.png", "toggle-settings"));
return _0_0lf46uk2uol9;})(this)
        );
    }
}
/*
* attribution <div>Icons made by <a href="https://www.flaticon.com/packs/multimedia-collection" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/