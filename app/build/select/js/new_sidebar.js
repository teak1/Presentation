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
let _0_0qyj711g7y8h = document.createElement("div");
_JSX.attribute(_0_0qyj711g7y8h,"class","app-new-sidebar-menu");
let _1_0pxzx39bytbp = document.createElement("div");
_JSX.attribute(_1_0pxzx39bytbp,"class","app-interface-button");
_JSX.attribute(_1_0pxzx39bytbp,"app-action","create_new");
let _2_0losaddcd80g = document.createElement("span");
let _3_0ofbqe85zv1n = document.createTextNode("Create");
_2_0losaddcd80g.appendChild(_3_0ofbqe85zv1n);
_1_0pxzx39bytbp.appendChild(_2_0losaddcd80g);
_0_0qyj711g7y8h.appendChild(_1_0pxzx39bytbp);
let _4_08t3ra6ql1c = document.createElement("input");
_JSX.attribute(_4_08t3ra6ql1c,"id","app-new-name");
_JSX.attribute(_4_08t3ra6ql1c,"placeholder","Name");
_0_0qyj711g7y8h.appendChild(_4_08t3ra6ql1c);
let _5_0zhrrrwpcxb = document.createElement("textarea");
_JSX.attribute(_5_0zhrrrwpcxb,"id","app-new-description");
_JSX.attribute(_5_0zhrrrwpcxb,"placeholder","Description");
_0_0qyj711g7y8h.appendChild(_5_0zhrrrwpcxb);
return _0_0qyj711g7y8h;})(this)
    );
    app.register_button(elements.children[0]);


    return elements;
}