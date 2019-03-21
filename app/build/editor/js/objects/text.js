const _JSX = { attribute(e, n, v) { if (!v) return; if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
import config from "./../config.js";
import hiarchy from "./../HiarchyObject.js";
class Text {
    constructor() {
        this.element = ((function(_this){let _0_0k72op90d3v8 = document.createElement("div");return _0_0k72op90d3v8;})(this));
        this.hiarchyObject = new hiarchy.Object({ name: "new text" });
        this.config = new config({
            settings: [
                { name: "text", inputs: [{ type: "text", value: "text" }] },
                { name: "text-color", inputs: [{ type: "color", value: "black" }] },
                { name: "transform", inputs: [{ type: "number", value: "0" }, { type: "number", value: "0" }, { type: "number", value: "0" }] },
                { name: "background-color", inputs: [{ "type": "color", "value": "transparent" }] }
            ], options: {}
        });
    }
}
export default Text;