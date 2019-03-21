const _JSX = { attribute(e, n, v) { if (!v) return; if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
class Folder {
    constructor(name, children) {
        this.name = name;
        this.button0;
        this.button1;
        this.button2;
        this.element = ((function(_this){let _0_07e2kferq5j9 = document.createElement("div");_JSX.attribute(_0_07e2kferq5j9,"class","hiarchy-folder hiarchy-object");let _1_0w4x9to5dl8r = document.createElement("div");_JSX.attribute(_1_0w4x9to5dl8r,"class","app-hidexoverflow");_JSX.append(_1_0w4x9to5dl8r,_this.button0 = _this.createButton("↓", () => _this.toggleChildVisible()));_JSX.append(_1_0w4x9to5dl8r,_this.button1 = _this.createButton("X", () => { console.log("remove element", _this); }));_JSX.append(_1_0w4x9to5dl8r,_this.button2 = _this.createButton("↕", (event) => { _this.move(event) }));_JSX.append(_1_0w4x9to5dl8r,_this.name = _this.createName(name));_0_07e2kferq5j9.appendChild(_1_0w4x9to5dl8r);let _2_0v6pryv6rk = document.createElement("div");_JSX.attribute(_2_0v6pryv6rk,"class","hiarchy-folder-children");_JSX.append(_2_0v6pryv6rk,children);_0_07e2kferq5j9.appendChild(_2_0v6pryv6rk);return _0_07e2kferq5j9;})(this));
        this.hidden = false;
        this.name.addEventListener("blur", () => {
            this.name.innerText = this.name.innerText.replace(/[\n\r]/g, " ");
        });
    }
    createName(name) {
        return ((function(_this){let _0_0w2mqi56owod = document.createElement("span");_JSX.attribute(_0_0w2mqi56owod,"class","hiarchy-folder-name");_JSX.attribute(_0_0w2mqi56owod,"contentEditable","true");_JSX.append(_0_0w2mqi56owod,name);return _0_0w2mqi56owod;})(this));
    }
    createButton(text, cb) {
        let element = ((function(_this){let _0_07j27rghiiva = document.createElement("span");_JSX.attribute(_0_07j27rghiiva,"class","hiarchy-hide-button");_JSX.append(_0_07j27rghiiva,text);return _0_07j27rghiiva;})(this));
        element.addEventListener("click", cb);
        return element;
    }
    toggleChildVisible(state) {
        this.hidden = !this.hidden;
        if (state != undefined) {
            this.hidden = state;
        }
        this.element.getElementsByClassName("hiarchy-folder-children")[0].hidden = this.hidden;
        if (!this.hidden) {
            // this.element.children[0].innerText = "↓";
            this.button0.innerText = "↓";
        } else {
            // this.element.children[0].innerText = "→";
            this.button0.innerText = "→";
        }
    }
}
class object {
    constructor({ name }) {
        this.name = name;
        this.element = ((function(_this){let _0_056i2hs203if = document.createElement("div");_JSX.attribute(_0_056i2hs203if,"class","hiarchy-folder hiarchy-object");_JSX.append(_0_056i2hs203if,_this.createButton("X", console.log));let _1_015xg8fsmdlj = document.createElement("input");_JSX.attribute(_1_015xg8fsmdlj,"class","hiarchy-item-name");_JSX.attribute(_1_015xg8fsmdlj,"type","text");_JSX.attribute(_1_015xg8fsmdlj,"value",name);_0_056i2hs203if.appendChild(_1_015xg8fsmdlj);return _0_056i2hs203if;})(this));
    }
    createButton(text, cb) {
        let element = ((function(_this){let _0_0ddgl2melvr = document.createElement("div");_JSX.attribute(_0_0ddgl2melvr,"class","hiarchy-hide-button");_JSX.append(_0_0ddgl2melvr,text);return _0_0ddgl2melvr;})(this));
        element.addEventListener("click", cb);
        return element;
    }
}
export default {
    Folder,
    Object: object
}