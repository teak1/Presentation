const _JSX = { attribute(e, n, v) { if (!v) return; if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
export default function (app) {
    let elements = (
        (function(_this){let _0_0klgtjtkdc4r = document.createElement("div");_JSX.attribute(_0_0klgtjtkdc4r,"class","app-new-sidebar-menu");let _1_0qm43cpe1xks = document.createElement("div");_JSX.attribute(_1_0qm43cpe1xks,"class","app-interface-button");_JSX.attribute(_1_0qm43cpe1xks,"app-action","create_new");let _2_0hkmn2b3609g = document.createElement("span");let _3_02eguj6rdi7f = document.createTextNode("Create");_2_0hkmn2b3609g.appendChild(_3_02eguj6rdi7f);_1_0qm43cpe1xks.appendChild(_2_0hkmn2b3609g);_0_0klgtjtkdc4r.appendChild(_1_0qm43cpe1xks);let _4_0okzb06ww7q = document.createElement("input");_JSX.attribute(_4_0okzb06ww7q,"id","app-new-name");_JSX.attribute(_4_0okzb06ww7q,"placeholder","Name");_0_0klgtjtkdc4r.appendChild(_4_0okzb06ww7q);let _5_0s2sgd2di3yk = document.createElement("textarea");_JSX.attribute(_5_0s2sgd2di3yk,"id","app-new-description");_JSX.attribute(_5_0s2sgd2di3yk,"placeholder","Description");_0_0klgtjtkdc4r.appendChild(_5_0s2sgd2di3yk);return _0_0klgtjtkdc4r;})(this)
    );
    app.register_button(elements.children[0]);


    return elements;
}