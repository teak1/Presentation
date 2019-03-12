const _JSX = { attribute(e, n, v) { if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
let classNames = [];
function generateClassName() {
    let cn = "C";
    while (cn.length < 32) cn += Math.floor(Math.random() * 36).toString("36");
    if (classNames.includes(cn)) return generateClassName();
    classNames.push(cn);
    return cn;
}
let GLOBALSTYLE = document.createElement("style");
function load() {
    if (document.body) document.body.appendChild(GLOBALSTYLE)
    else setTimeout(load, 100);
}
function addStyle(string) {
    GLOBALSTYLE.innerHTML += "\n" + string.replace(/;\n+?/g, ";").replace(/\s\s+/g, "");
}
load();
class Text {
    constructor({ position, rotation, text, size, details, timeline }) {
        this.position = position || [0, 0];
        this.rotation = rotation || [0, 0, 0];
        this.text = text || "MISSING TEXT";
        this.size = size || 12;
        this.details = details || {};
        this.timeline = timeline || {};
        this.className = generateClassName();
        this.AnimationName = generateClassName();
        this.animation = `
        @keyframes ${this.AnimationName}{
            ${Object.keys(timeline).map((key, index) => {
            let item = timeline[key];
            return `${key}%{
                    position:absolute;top:0px;left:0px;font-size:${item.size}px;margin:0px;transform: rotateX(${item.rotation[0]}deg) rotateY(${item.rotation[1]}deg) rotateZ(${item.rotation[2]}deg) translate(${item.position.map(item2 => item2 + "px").join(",")});
                    ${Object.keys(item.details).map(key => {
                let val = item.details[key];
                let str = key + ":" + val + ";";
                return str;
            }).join("\n")}
                }`}).join("\n")}}`;
        this.style = `.${this.className}{position:absolute;top:0px;left:0px;font-size:${this.size}px;margin:0px;transform: rotateX(${this.rotation[0]}deg) rotateY(${this.rotation[1]}deg) rotateZ(${this.rotation[2]}deg) translate(${this.position.map(item => item + "px").join(",")});${Object.keys(this.details).map(key => {
            let val = this.details[key];
            let str = key + ":" + val + ";";
            return str;
        }).join("\n")};animation: ${this.AnimationName};animation-duration:10s}`;
        addStyle(this.style);
        addStyle(this.animation);
        // let style = Object.assign({
        //     position: "absolute",
        //     top: "0px",
        //     left: "0px",
        //     fontSize: this.size + "px",
        //     transform: `rotateX(${ this.rotation[0] }deg) rotateY(${ this.rotation[1] }deg) rotateZ(${ this.rotation[2] }deg) translate(${ this.position.map(item => item + "px").join(",") })`,
        //     margin: "0px"
        // }, this.details);
        this.element = (
            (function(_this){
let _0_0cly3hzkd33 = document.createElement("div");
_JSX.attribute(_0_0cly3hzkd33,"class",_this.className);
_JSX.append(_0_0cly3hzkd33,text);
return _0_0cly3hzkd33;})(this)
        );
    }
}
class Box {
    constructor({ position, rotation, size, details, timeline }) {
        this.position = position || [0, 0];
        this.rotation = rotation || [0, 0, 0];
        this.size = size || [100, 100];
        this.details = details || {};
        this.timeline = timeline || {};
        this.color = this.details.color || "black";
        let style = Object.assign({
            position: "absolute",
            top: "0px",
            left: "0px",
            width: this.size[0] + "px",
            height: this.size[1] + "px",
            fontSize: this.size + "px",
            transform: `rotateX(${this.rotation[0]}deg) rotateY(${this.rotation[1]}deg) rotateZ(${this.rotation[2]}deg) translate(${this.position.map(item => item + "px").join(",")})`,
            backgroundColor: this.color,
            margin: "0px"
        }, this.details);
        this.element = (
            (function(_this){
let _0_0gbgfhj7h7x = document.createElement("div");
_JSX.attribute(_0_0gbgfhj7h7x,"style",style);
return _0_0gbgfhj7h7x;})(this)
        );
    }
}
export default {
    Text,
    Box
}