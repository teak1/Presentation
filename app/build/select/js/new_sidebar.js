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
let _0_0n4k3mif662h = document.createElement("div");
_JSX.attribute(_0_0n4k3mif662h,"class","app-new-sidebar-menu");
let _1_088nd0qxxu0h = document.createElement("div");
_JSX.attribute(_1_088nd0qxxu0h,"class","app-interface-button");
_JSX.attribute(_1_088nd0qxxu0h,"app-action","create_new");
let _2_0hd5e4eb83zm = document.createElement("span");
let _3_0e0bnjzbq6af = document.createTextNode("Create");
_2_0hd5e4eb83zm.appendChild(_3_0e0bnjzbq6af);
_1_088nd0qxxu0h.appendChild(_2_0hd5e4eb83zm);
_0_0n4k3mif662h.appendChild(_1_088nd0qxxu0h);
let _4_07pel4lwp05 = document.createElement("input");
_JSX.attribute(_4_07pel4lwp05,"id","app-new-name");
_JSX.attribute(_4_07pel4lwp05,"placeholder","Name");
_0_0n4k3mif662h.appendChild(_4_07pel4lwp05);
let _5_0basz4z2e46l = document.createElement("textarea");
_JSX.attribute(_5_0basz4z2e46l,"id","app-new-description");
_JSX.attribute(_5_0basz4z2e46l,"placeholder","Description");
_0_0n4k3mif662h.appendChild(_5_0basz4z2e46l);
return _0_0n4k3mif662h;})(this)
    );
    app.register_button(elements.children[0]);


    return elements;
}