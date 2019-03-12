const _JSX = { attribute(e, n, v) { if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
import util from "./util.js";
export default class presentation_preview {
    constructor(id, cb, app) {
        this.element = null;
        this.cb = cb;
        this.id = id;
        this.data = null;
        util.api("METADATA", { id }, function (data) { console.log(data); return data; })
            .then(data => this.setData(data)).then(() => {
                this.element = this.createElements(this.data.preview_src);
                this.cb(this.element);
            });
    }
    setData(data) {
        if (data.META && data.META.name && data.META.description && data.META.type === "METADATA") {
            this.data = data.META;
            this.data.query = data.query;
        } else {
            console.log(data);
            throw new Error("unexpected data format for preview");
        }
    }
    createElements(src) {
        let e = ((function(_this){
let _0_0mxhpdejfv8 = document.createElement("div");
_JSX.attribute(_0_0mxhpdejfv8,"class","app-preview-wrapper");
let _1_0ptk0x36o8l = document.createElement("div");
_JSX.attribute(_1_0ptk0x36o8l,"class","app-preview-border");
let _2_0et3c3qaeiyt = document.createElement("div");
_JSX.attribute(_2_0et3c3qaeiyt,"class","app-preview-preview");
let _3_07c36bqdw065 = document.createElement("div");
_JSX.attribute(_3_07c36bqdw065,"class","app-preview-image-wrapper");
let _4_04xn8f8wbejp = document.createElement("img");
_JSX.attribute(_4_04xn8f8wbejp,"src",src);
_JSX.attribute(_4_04xn8f8wbejp,"class","app-preview-image");
_3_07c36bqdw065.appendChild(_4_04xn8f8wbejp);
_2_0et3c3qaeiyt.appendChild(_3_07c36bqdw065);
let _5_0tzngu0lgqj = document.createElement("h1");
_JSX.attribute(_5_0tzngu0lgqj,"class","app-preview-text");
_JSX.append(_5_0tzngu0lgqj,_this.data.name.replace(/\\s/g, " "));
_2_0et3c3qaeiyt.appendChild(_5_0tzngu0lgqj);
_1_0ptk0x36o8l.appendChild(_2_0et3c3qaeiyt);
let _6_003irtcb95b22 = document.createElement("div");
_JSX.attribute(_6_003irtcb95b22,"class","app-preview-button-display-mask");
let _7_0zhgl5124o1 = document.createElement("div");
_JSX.attribute(_7_0zhgl5124o1,"class","app-preview-button-wrapper");
let _8_00rs16zmkjrd = document.createElement("div");
_JSX.attribute(_8_00rs16zmkjrd,"class","app-interface-button");
_JSX.attribute(_8_00rs16zmkjrd,"app-action","open");
_JSX.attribute(_8_00rs16zmkjrd,"target-presentation",_this.data.query.id);
let _9_0yl9jtkg3n0m = document.createElement("span");
let _a_0gsfgzlkmkzo = document.createTextNode("OPEN");
_9_0yl9jtkg3n0m.appendChild(_a_0gsfgzlkmkzo);
_8_00rs16zmkjrd.appendChild(_9_0yl9jtkg3n0m);
_7_0zhgl5124o1.appendChild(_8_00rs16zmkjrd);
let _b_03vux3mh923u = document.createElement("hr");
_JSX.attribute(_b_03vux3mh923u,"class","app-transparent");
_7_0zhgl5124o1.appendChild(_b_03vux3mh923u);
let _c_0x6fpven5wrr = document.createElement("div");
_JSX.attribute(_c_0x6fpven5wrr,"class","app-interface-button");
_JSX.attribute(_c_0x6fpven5wrr,"app-action","edit");
_JSX.attribute(_c_0x6fpven5wrr,"target-presentation",_this.data.query.id);
let _d_0vx555fg672j = document.createElement("span");
let _e_04qk2xenuqk = document.createTextNode("EDIT");
_d_0vx555fg672j.appendChild(_e_04qk2xenuqk);
_c_0x6fpven5wrr.appendChild(_d_0vx555fg672j);
_7_0zhgl5124o1.appendChild(_c_0x6fpven5wrr);
let _f_0va3v6q6sqd = document.createElement("hr");
_JSX.attribute(_f_0va3v6q6sqd,"class","app-transparent");
_7_0zhgl5124o1.appendChild(_f_0va3v6q6sqd);
let _g_0ze7o79nmxpk = document.createElement("div");
_JSX.attribute(_g_0ze7o79nmxpk,"class","app-interface-button");
_JSX.attribute(_g_0ze7o79nmxpk,"app-action","delete");
_JSX.attribute(_g_0ze7o79nmxpk,"target-presentation",_this.data.query.id);
_JSX.attribute(_g_0ze7o79nmxpk,"style","--offset:40px;");
let _h_0v7k36no99gq = document.createElement("span");
let _i_06a583uo6o0r = document.createTextNode("DELETE");
_h_0v7k36no99gq.appendChild(_i_06a583uo6o0r);
_g_0ze7o79nmxpk.appendChild(_h_0v7k36no99gq);
_7_0zhgl5124o1.appendChild(_g_0ze7o79nmxpk);
_6_003irtcb95b22.appendChild(_7_0zhgl5124o1);
_1_0ptk0x36o8l.appendChild(_6_003irtcb95b22);
_0_0mxhpdejfv8.appendChild(_1_0ptk0x36o8l);
return _0_0mxhpdejfv8;})(this));
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}