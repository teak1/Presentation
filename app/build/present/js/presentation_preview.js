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
let _0_0tgw8mq2nt6 = document.createElement("div");
_JSX.attribute(_0_0tgw8mq2nt6,"class","app-preview-wrapper");
let _1_001tp2asn5v2m = document.createElement("div");
_JSX.attribute(_1_001tp2asn5v2m,"class","app-preview-border");
let _2_08xbx37xyhl4 = document.createElement("div");
_JSX.attribute(_2_08xbx37xyhl4,"class","app-preview-preview");
let _3_06lwi9gyx41u = document.createElement("div");
_JSX.attribute(_3_06lwi9gyx41u,"class","app-preview-image-wrapper");
let _4_05t5623uxko8 = document.createElement("img");
_JSX.attribute(_4_05t5623uxko8,"src",src);
_JSX.attribute(_4_05t5623uxko8,"class","app-preview-image");
_3_06lwi9gyx41u.appendChild(_4_05t5623uxko8);
_2_08xbx37xyhl4.appendChild(_3_06lwi9gyx41u);
let _5_0rlgl7zutt67 = document.createElement("h1");
_JSX.attribute(_5_0rlgl7zutt67,"class","app-preview-text");
_JSX.append(_5_0rlgl7zutt67,_this.data.name);
_2_08xbx37xyhl4.appendChild(_5_0rlgl7zutt67);
_1_001tp2asn5v2m.appendChild(_2_08xbx37xyhl4);
let _6_0z9g47lfvptl = document.createElement("div");
_JSX.attribute(_6_0z9g47lfvptl,"class","app-preview-button-display-mask");
let _7_0w9u8r6e420g = document.createElement("div");
_JSX.attribute(_7_0w9u8r6e420g,"class","app-preview-button-wrapper");
let _8_0lrynndz4b7 = document.createElement("div");
_JSX.attribute(_8_0lrynndz4b7,"class","app-interface-button");
_JSX.attribute(_8_0lrynndz4b7,"app-action","open");
_JSX.attribute(_8_0lrynndz4b7,"target-presentation",_this.data.query.id);
let _9_0ax2p1l8skkq = document.createElement("span");
let _a_0z0pv9x8nb6q = document.createTextNode("OPEN");
_9_0ax2p1l8skkq.appendChild(_a_0z0pv9x8nb6q);
_8_0lrynndz4b7.appendChild(_9_0ax2p1l8skkq);
_7_0w9u8r6e420g.appendChild(_8_0lrynndz4b7);
let _b_0wlbyuprj8o = document.createElement("hr");
_JSX.attribute(_b_0wlbyuprj8o,"class","app-transparent");
_7_0w9u8r6e420g.appendChild(_b_0wlbyuprj8o);
let _c_0inxcp38ksm = document.createElement("div");
_JSX.attribute(_c_0inxcp38ksm,"class","app-interface-button");
_JSX.attribute(_c_0inxcp38ksm,"app-action","edit");
_JSX.attribute(_c_0inxcp38ksm,"target-presentation",_this.data.query.id);
let _d_0hzipimbh0pu = document.createElement("span");
let _e_0y7fxu6xsuih = document.createTextNode("EDIT");
_d_0hzipimbh0pu.appendChild(_e_0y7fxu6xsuih);
_c_0inxcp38ksm.appendChild(_d_0hzipimbh0pu);
_7_0w9u8r6e420g.appendChild(_c_0inxcp38ksm);
let _f_0xtsjkt766gb = document.createElement("hr");
_JSX.attribute(_f_0xtsjkt766gb,"class","app-transparent");
_7_0w9u8r6e420g.appendChild(_f_0xtsjkt766gb);
let _g_06hykizqwgot = document.createElement("div");
_JSX.attribute(_g_06hykizqwgot,"class","app-interface-button");
_JSX.attribute(_g_06hykizqwgot,"app-action","delete");
_JSX.attribute(_g_06hykizqwgot,"target-presentation",_this.data.query.id);
_JSX.attribute(_g_06hykizqwgot,"style","--offset:40px;");
let _h_0l1fj11n7gwm = document.createElement("span");
let _i_0p1asmfzw98k = document.createTextNode("DELETE");
_h_0l1fj11n7gwm.appendChild(_i_0p1asmfzw98k);
_g_06hykizqwgot.appendChild(_h_0l1fj11n7gwm);
_7_0w9u8r6e420g.appendChild(_g_06hykizqwgot);
_6_0z9g47lfvptl.appendChild(_7_0w9u8r6e420g);
_1_001tp2asn5v2m.appendChild(_6_0z9g47lfvptl);
_0_0tgw8mq2nt6.appendChild(_1_001tp2asn5v2m);
return _0_0tgw8mq2nt6;})(this));
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}