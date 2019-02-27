const _JSX = {
    attribute(el, name, val) {
        if (val.constructor == Object) {
            for (let k in val) {
                el[name][k] = val[k];
            }
            return;
        }
        el.setAttribute(name, val);
    },
    append(el, child) {
        if (child.constructor == Array) return child.forEach((i) => _JSX.append(el, i));
        if (child.nodeType || child.textContent) {
            el.appendChild(child);
        } else {
            el.appendChild(document.createTextNode(child.toString()));
        }
    }
};
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
let _0_04qrpesz7ovx = document.createElement("div");
_JSX.attribute(_0_04qrpesz7ovx,"class","app-preview-wrapper");
let _1_0rz3smmfxa4 = document.createElement("div");
_JSX.attribute(_1_0rz3smmfxa4,"class","app-preview-border");
let _2_0ay4idx0t6ri = document.createElement("div");
_JSX.attribute(_2_0ay4idx0t6ri,"class","app-preview-preview");
let _3_0xntllk7hnu = document.createElement("div");
_JSX.attribute(_3_0xntllk7hnu,"class","app-preview-image-wrapper");
let _4_0fbkc77owuiw = document.createElement("img");
_JSX.attribute(_4_0fbkc77owuiw,"src",src);
_JSX.attribute(_4_0fbkc77owuiw,"class","app-preview-image");
_3_0xntllk7hnu.appendChild(_4_0fbkc77owuiw);
_2_0ay4idx0t6ri.appendChild(_3_0xntllk7hnu);
let _5_0pm24fdqd3qp = document.createElement("h1");
_JSX.attribute(_5_0pm24fdqd3qp,"class","app-preview-text");
_JSX.append(_5_0pm24fdqd3qp,_this.data.name);
_2_0ay4idx0t6ri.appendChild(_5_0pm24fdqd3qp);
_1_0rz3smmfxa4.appendChild(_2_0ay4idx0t6ri);
let _6_03ujfkj29xu6 = document.createElement("div");
_JSX.attribute(_6_03ujfkj29xu6,"class","app-preview-button-display-mask");
let _7_068nf1c2t8a5 = document.createElement("div");
_JSX.attribute(_7_068nf1c2t8a5,"class","app-preview-button-wrapper");
let _8_01idsgm5v5fr = document.createElement("div");
_JSX.attribute(_8_01idsgm5v5fr,"class","app-interface-button");
_JSX.attribute(_8_01idsgm5v5fr,"app-action","open");
_JSX.attribute(_8_01idsgm5v5fr,"target-presentation",_this.data.query.id);
let _9_0mfaowaq5f = document.createElement("span");
let _a_0mi1pgmjuc2 = document.createTextNode("OPEN");
_9_0mfaowaq5f.appendChild(_a_0mi1pgmjuc2);
_8_01idsgm5v5fr.appendChild(_9_0mfaowaq5f);
_7_068nf1c2t8a5.appendChild(_8_01idsgm5v5fr);
let _b_059e79dry4og = document.createElement("hr");
_JSX.attribute(_b_059e79dry4og,"class","app-transparent");
_7_068nf1c2t8a5.appendChild(_b_059e79dry4og);
let _c_04ujag6nj07f = document.createElement("div");
_JSX.attribute(_c_04ujag6nj07f,"class","app-interface-button");
_JSX.attribute(_c_04ujag6nj07f,"app-action","edit");
_JSX.attribute(_c_04ujag6nj07f,"target-presentation",_this.data.query.id);
let _d_0ombagrs9s5e = document.createElement("span");
let _e_0tdfx8m5qwm = document.createTextNode("EDIT");
_d_0ombagrs9s5e.appendChild(_e_0tdfx8m5qwm);
_c_04ujag6nj07f.appendChild(_d_0ombagrs9s5e);
_7_068nf1c2t8a5.appendChild(_c_04ujag6nj07f);
let _f_05v629lrlei = document.createElement("hr");
_JSX.attribute(_f_05v629lrlei,"class","app-transparent");
_7_068nf1c2t8a5.appendChild(_f_05v629lrlei);
let _g_0mg81my1nc68 = document.createElement("div");
_JSX.attribute(_g_0mg81my1nc68,"class","app-interface-button");
_JSX.attribute(_g_0mg81my1nc68,"app-action","delete");
_JSX.attribute(_g_0mg81my1nc68,"target-presentation",_this.data.query.id);
_JSX.attribute(_g_0mg81my1nc68,"style","--offset:40px;");
let _h_065h08lsrqak = document.createElement("span");
let _i_0arnwlwwuho = document.createTextNode("DELETE");
_h_065h08lsrqak.appendChild(_i_0arnwlwwuho);
_g_0mg81my1nc68.appendChild(_h_065h08lsrqak);
_7_068nf1c2t8a5.appendChild(_g_0mg81my1nc68);
_6_03ujfkj29xu6.appendChild(_7_068nf1c2t8a5);
_1_0rz3smmfxa4.appendChild(_6_03ujfkj29xu6);
_0_04qrpesz7ovx.appendChild(_1_0rz3smmfxa4);
return _0_04qrpesz7ovx;})(this));
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}