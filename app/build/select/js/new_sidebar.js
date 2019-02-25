const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/
export default function (app) {
    let elements = (
        (function(_this){
let _0_0e4kxe5osm5g = document.createElement("div");
_JSX.attribute(_0_0e4kxe5osm5g,"class","app-new-sidebar-menu");
let _1_0mw99rrlvovc = document.createElement("div");
_JSX.attribute(_1_0mw99rrlvovc,"class","app-interface-button");
_JSX.attribute(_1_0mw99rrlvovc,"app-action","create_new");
let _2_0qs7hij96kdq = document.createElement("span");
let _3_0llmeryoax6d = document.createTextNode("Create");
_2_0qs7hij96kdq.appendChild(_3_0llmeryoax6d);
_1_0mw99rrlvovc.appendChild(_2_0qs7hij96kdq);
_0_0e4kxe5osm5g.appendChild(_1_0mw99rrlvovc);
let _4_0tlpc6b5x9c = document.createElement("input");
_JSX.attribute(_4_0tlpc6b5x9c,"id","app-new-name");
_JSX.attribute(_4_0tlpc6b5x9c,"placeholder","Name");
_0_0e4kxe5osm5g.appendChild(_4_0tlpc6b5x9c);
let _5_0ba4461xjxrw = document.createElement("textarea");
_JSX.attribute(_5_0ba4461xjxrw,"id","app-new-description");
_JSX.attribute(_5_0ba4461xjxrw,"placeholder","Description");
_0_0e4kxe5osm5g.appendChild(_5_0ba4461xjxrw);
return _0_0e4kxe5osm5g;})(this)
    );
    app.register_button(elements.children[0]);


    return elements;
}