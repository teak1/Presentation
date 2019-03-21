const _JSX = { attribute(e, n, v) { if (!v) return; if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
function createInput(option) {
    return ((function(_this){let _0_0ci286lbzvl5 = document.createElement("input");_JSX.attribute(_0_0ci286lbzvl5,"type",option.type);_JSX.attribute(_0_0ci286lbzvl5,"value",option.value);return _0_0ci286lbzvl5;})(this));
}
function createOptionsInputs(options) {
    return (
        (function(_this){let _0_0ud52xzm7p6 = document.createElement("span");_JSX.append(_0_0ud52xzm7p6,options.inputs.map(createInput));return _0_0ud52xzm7p6;})(this)
    );
}
function createSettingDom(setting) {
    return ((function(_this){let _0_03bccw48hygw = document.createElement("div");let _1_0lml249w7k9m = document.createElement("label");_JSX.append(_1_0lml249w7k9m,setting.name || "ERR");_0_03bccw48hygw.appendChild(_1_0lml249w7k9m);_JSX.append(_0_03bccw48hygw,createOptionsInputs(setting));return _0_03bccw48hygw;})(this));
}
class Config {
    constructor({ settings, options, }) {
        this.settings = settings;
        this.options = options;
        this.renderSettings();
    }
    renderSettings() {
        this.element = (
            (function(_this){let _0_0oq7rt9da1ac = document.createElement("div");_JSX.append(_0_0oq7rt9da1ac,Object.keys(_this.settings).map(name => {
                    let setting = _this.settings[name];
                    return createSettingDom(setting);
                }));return _0_0oq7rt9da1ac;})(this)
        )
    }
}
export default Config;