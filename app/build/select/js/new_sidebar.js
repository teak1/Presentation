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
let _0_0vvcp933oxck = document.createElement("div");
_JSX.attribute(_0_0vvcp933oxck,"class","app-new-sidebar-menu");
let _1_0t0yvoim5rn = document.createElement("div");
_JSX.attribute(_1_0t0yvoim5rn,"class","app-interface-button");
_JSX.attribute(_1_0t0yvoim5rn,"app-action","create_new");
let _2_0wzh663nx5rc = document.createElement("span");
let _3_0acnphh7s7w = document.createTextNode("Create");
_2_0wzh663nx5rc.appendChild(_3_0acnphh7s7w);
_1_0t0yvoim5rn.appendChild(_2_0wzh663nx5rc);
_0_0vvcp933oxck.appendChild(_1_0t0yvoim5rn);
let _4_092t9c604ki9 = document.createElement("input");
_JSX.attribute(_4_092t9c604ki9,"id","app-new-name");
_JSX.attribute(_4_092t9c604ki9,"placeholder","Name");
_0_0vvcp933oxck.appendChild(_4_092t9c604ki9);
let _5_02qo5ew827cg = document.createElement("textarea");
_JSX.attribute(_5_02qo5ew827cg,"id","app-new-description");
_JSX.attribute(_5_02qo5ew827cg,"placeholder","Description");
_0_0vvcp933oxck.appendChild(_5_02qo5ew827cg);
return _0_0vvcp933oxck;})(this)
    );
    app.register_button(elements.children[0]);


    return elements;
}