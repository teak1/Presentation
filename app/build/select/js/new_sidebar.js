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
let _0_0n3va2yag97 = document.createElement("div");
_JSX.attribute(_0_0n3va2yag97,"class","app-new-sidebar-menu");
let _1_0plqc53sbm6n = document.createElement("div");
_JSX.attribute(_1_0plqc53sbm6n,"class","app-interface-button");
_JSX.attribute(_1_0plqc53sbm6n,"app-action","create_new");
let _2_0n7r4cy3pw4i = document.createElement("span");
let _3_0nziujmkwtf7 = document.createTextNode("Create");
_2_0n7r4cy3pw4i.appendChild(_3_0nziujmkwtf7);
_1_0plqc53sbm6n.appendChild(_2_0n7r4cy3pw4i);
_0_0n3va2yag97.appendChild(_1_0plqc53sbm6n);
let _4_0t759bgk9x2 = document.createElement("input");
_JSX.attribute(_4_0t759bgk9x2,"id","app-new-name");
_JSX.attribute(_4_0t759bgk9x2,"placeholder","Name");
_0_0n3va2yag97.appendChild(_4_0t759bgk9x2);
let _5_0ni2zfx1zdxq = document.createElement("textarea");
_JSX.attribute(_5_0ni2zfx1zdxq,"id","app-new-description");
_JSX.attribute(_5_0ni2zfx1zdxq,"placeholder","Description");
_0_0n3va2yag97.appendChild(_5_0ni2zfx1zdxq);
return _0_0n3va2yag97;})(this)
    );
    app.register_button(elements.children[0]);


    return elements;
}