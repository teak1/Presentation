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
export default function (app) {
    let elements = (
        (function(_this){
let _0_055bfp9cree = document.createElement("div");
_JSX.attribute(_0_055bfp9cree,"class","app-new-sidebar-menu");
let _1_0592nwx8vqzm = document.createElement("div");
_JSX.attribute(_1_0592nwx8vqzm,"class","app-interface-button");
_JSX.attribute(_1_0592nwx8vqzm,"app-action","create_new");
let _2_0310gyw44mtc = document.createElement("span");
let _3_00lhfmgk637i = document.createTextNode("Create");
_2_0310gyw44mtc.appendChild(_3_00lhfmgk637i);
_1_0592nwx8vqzm.appendChild(_2_0310gyw44mtc);
_0_055bfp9cree.appendChild(_1_0592nwx8vqzm);
let _4_02h79m11kyze = document.createElement("input");
_JSX.attribute(_4_02h79m11kyze,"id","app-new-name");
_JSX.attribute(_4_02h79m11kyze,"placeholder","Name");
_0_055bfp9cree.appendChild(_4_02h79m11kyze);
let _5_0u6qnscwsgug = document.createElement("textarea");
_JSX.attribute(_5_0u6qnscwsgug,"id","app-new-description");
_JSX.attribute(_5_0u6qnscwsgug,"placeholder","Description");
_0_055bfp9cree.appendChild(_5_0u6qnscwsgug);
return _0_055bfp9cree;})(this)
    );
    app.register_button(elements.children[0]);


    return elements;
}