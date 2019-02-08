const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/
export default function (app) {
    let elements = (
        (function(){
let _0_051kqvrlzo6h = document.createElement("div");
_JSX.attribute(_0_051kqvrlzo6h,"class","app-new-sidebar-menu");
let _1_08o6ap6kedf = document.createElement("input");
_JSX.attribute(_1_08o6ap6kedf,"id","app-new-name");
_JSX.attribute(_1_08o6ap6kedf,"placeholder","Name");
_0_051kqvrlzo6h.appendChild(_1_08o6ap6kedf);
let _2_02yfkdeyl8wu = document.createElement("div");
_JSX.attribute(_2_02yfkdeyl8wu,"class","app-interface-button");
_JSX.attribute(_2_02yfkdeyl8wu,"app-action","create_new");
let _3_0gir3w2qp30o = document.createElement("span");
let _4_00gew2gdjld9l = document.createTextNode("Create");
_3_0gir3w2qp30o.appendChild(_4_00gew2gdjld9l);
_2_02yfkdeyl8wu.appendChild(_3_0gir3w2qp30o);
_0_051kqvrlzo6h.appendChild(_2_02yfkdeyl8wu);
return _0_051kqvrlzo6h;})()
    );
    app.register_button(elements.children[1]);


    return elements;
}