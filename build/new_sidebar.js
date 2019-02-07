const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/
export default function () {
    return (
        (function(){
let _0_0pkhn2x9kaoc = document.createElement("div");
_JSX.attribute(_0_0pkhn2x9kaoc,"class","app-new-sidebar-menu");
let _1_0zjsqnor0zu = document.createElement("input");
_JSX.attribute(_1_0zjsqnor0zu,"id","app-new-name");
_JSX.attribute(_1_0zjsqnor0zu,"placeholder","Name");
_0_0pkhn2x9kaoc.appendChild(_1_0zjsqnor0zu);
let _2_0ylfmjvvsxqd = document.createElement("button");
_JSX.attribute(_2_0ylfmjvvsxqd,"class","app-interface-button");
_JSX.attribute(_2_0ylfmjvvsxqd,"app-action","new-create");
let _3_05lzdm0jv2rn = document.createTextNode("Create");
_2_0ylfmjvvsxqd.appendChild(_3_05lzdm0jv2rn);
_0_0pkhn2x9kaoc.appendChild(_2_0ylfmjvvsxqd);
return _0_0pkhn2x9kaoc;})()
    )
}