const _JSX = { attribute(e, n, v) { if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
export default function (app) {
    let elements = (
        (function(_this){
let _0_02a7xpuhetg9 = document.createElement("div");
_JSX.attribute(_0_02a7xpuhetg9,"class","app-new-sidebar-menu");
let _1_0pq18715rgg8 = document.createElement("div");
_JSX.attribute(_1_0pq18715rgg8,"class","app-interface-button");
_JSX.attribute(_1_0pq18715rgg8,"app-action","create_new");
let _2_0tuogmewhd1 = document.createElement("span");
let _3_0avzbra2to = document.createTextNode("Create");
_2_0tuogmewhd1.appendChild(_3_0avzbra2to);
_1_0pq18715rgg8.appendChild(_2_0tuogmewhd1);
_0_02a7xpuhetg9.appendChild(_1_0pq18715rgg8);
let _4_0yv8q4flyce = document.createElement("input");
_JSX.attribute(_4_0yv8q4flyce,"id","app-new-name");
_JSX.attribute(_4_0yv8q4flyce,"placeholder","Name");
_0_02a7xpuhetg9.appendChild(_4_0yv8q4flyce);
let _5_0c7ht9y5jia = document.createElement("textarea");
_JSX.attribute(_5_0c7ht9y5jia,"id","app-new-description");
_JSX.attribute(_5_0c7ht9y5jia,"placeholder","Description");
_0_02a7xpuhetg9.appendChild(_5_0c7ht9y5jia);
return _0_02a7xpuhetg9;})(this)
    );
    app.register_button(elements.children[0]);


    return elements;
}