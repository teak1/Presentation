const _JSX = { attribute(e, n, v) { if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
class Folder {
    constructor(name, children) {
        this.name = name;
        this.button0;
        this.button1;
        this.element = ((function(_this){
let _0_0zanvaw1kiw = document.createElement("div");
_JSX.attribute(_0_0zanvaw1kiw,"class","hiarchy-folder hiarchy-object");
let _1_0z5i4kknvm6 = document.createElement("div");
_JSX.attribute(_1_0z5i4kknvm6,"class","app-hidexoverflow");
_JSX.append(_1_0z5i4kknvm6,_this.button0 = _this.createButton("↓", () => _this.toggleChildVisible()));
_JSX.append(_1_0z5i4kknvm6,_this.button1 = _this.createButton("X", () => { console.log("remove element", _this); }));
_JSX.append(_1_0z5i4kknvm6,_this.name = _this.createName(name));
_0_0zanvaw1kiw.appendChild(_1_0z5i4kknvm6);
let _2_0kmafqo80vf = document.createElement("div");
_JSX.attribute(_2_0kmafqo80vf,"class","hiarchy-folder-children");
_JSX.append(_2_0kmafqo80vf,children);
_0_0zanvaw1kiw.appendChild(_2_0kmafqo80vf);
return _0_0zanvaw1kiw;})(this));
        this.hidden = false;
        this.name.addEventListener("blur", () => {
            this.name.innerText = this.name.innerText.replace(/[\n\r]/g, " ");
        });
    }
    createName(name) {
        return ((function(_this){
let _0_0qn5vw35o8o = document.createElement("span");
_JSX.attribute(_0_0qn5vw35o8o,"class","hiarchy-folder-name");
_JSX.attribute(_0_0qn5vw35o8o,"contentEditable","true");
_JSX.append(_0_0qn5vw35o8o,name);
return _0_0qn5vw35o8o;})(this));
    }
    createButton(text, cb) {
        let element = ((function(_this){
let _0_0u3awue0agdg = document.createElement("span");
_JSX.attribute(_0_0u3awue0agdg,"class","hiarchy-hide-button");
_JSX.append(_0_0u3awue0agdg,text);
return _0_0u3awue0agdg;})(this));
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
    constructor(object) {
        this.name = name;
        this.element = ((function(_this){
let _0_09csfva50699 = document.createElement("div");
_JSX.attribute(_0_09csfva50699,"class","hiarchy-folder hiarchy-object");
_JSX.append(_0_09csfva50699,_this.createButton("X", console.log));
let _1_0c0vtv0nyxb7 = document.createElement("input");
_JSX.attribute(_1_0c0vtv0nyxb7,"class","hiarchy-item-name");
_JSX.attribute(_1_0c0vtv0nyxb7,"type","text");
_JSX.attribute(_1_0c0vtv0nyxb7,"value",name);
_0_09csfva50699.appendChild(_1_0c0vtv0nyxb7);
return _0_09csfva50699;})(this));
    }
    createButton(text, cb) {
        let element = ((function(_this){
let _0_0vn4pi3udq0m = document.createElement("div");
_JSX.attribute(_0_0vn4pi3udq0m,"class","hiarchy-hide-button");
_JSX.append(_0_0vn4pi3udq0m,text);
return _0_0vn4pi3udq0m;})(this));
        element.addEventListener("click", cb);
        return element;
    }
}
export default {
    Folder,
    Object: object
}