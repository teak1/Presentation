const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/
export default function (app) {
    let elements = (
        (function(){
let _0_0siza6n4b6p = document.createElement("div");
_JSX.attribute(_0_0siza6n4b6p,"class","app-new-sidebar-menu");
let _1_0i11dzkrle98 = document.createElement("input");
_JSX.attribute(_1_0i11dzkrle98,"id","app-new-name");
_JSX.attribute(_1_0i11dzkrle98,"placeholder","Name");
_0_0siza6n4b6p.appendChild(_1_0i11dzkrle98);
let _2_0eobgx256z9u = document.createElement("div");
_JSX.attribute(_2_0eobgx256z9u,"class","app-interface-button");
_JSX.attribute(_2_0eobgx256z9u,"app-action","create_new");
let _3_0rtxgfvd30b = document.createElement("span");
let _4_0gnjy2h81k4a = document.createTextNode("Create");
_3_0rtxgfvd30b.appendChild(_4_0gnjy2h81k4a);
_2_0eobgx256z9u.appendChild(_3_0rtxgfvd30b);
_0_0siza6n4b6p.appendChild(_2_0eobgx256z9u);
return _0_0siza6n4b6p;})()
    );
    app.register_button(elements.children[1]);


    return elements;
}