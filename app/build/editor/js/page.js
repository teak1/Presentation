const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/


export default {
    headbar(presentation) {
        return (
            (function(_this){
let _0_02ezgrvklas2 = document.createElement("div");
_JSX.attribute(_0_02ezgrvklas2,"class","app-header");
return _0_02ezgrvklas2;})(this)
        );
    }
}