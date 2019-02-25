const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
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
let _0_0a1whp85f45 = document.createElement("div");
_JSX.attribute(_0_0a1whp85f45,"class","app-preview-wrapper");
let _1_04i8bsr0el07 = document.createElement("div");
_JSX.attribute(_1_04i8bsr0el07,"class","app-preview-border");
let _2_0bg8e8b5t92b = document.createElement("div");
_JSX.attribute(_2_0bg8e8b5t92b,"class","app-preview-preview");
let _3_0tmq3mvgv3k = document.createElement("div");
_JSX.attribute(_3_0tmq3mvgv3k,"class","app-preview-image-wrapper");
let _4_0we5tzpgt3lc = document.createElement("img");
_JSX.attribute(_4_0we5tzpgt3lc,"src",src);
_JSX.attribute(_4_0we5tzpgt3lc,"class","app-preview-image");
_3_0tmq3mvgv3k.appendChild(_4_0we5tzpgt3lc);
_2_0bg8e8b5t92b.appendChild(_3_0tmq3mvgv3k);
let _5_05vj76ud2u1p = document.createElement("h1");
_JSX.attribute(_5_05vj76ud2u1p,"class","app-preview-text");
_JSX.append(_5_05vj76ud2u1p,_this.data.name);
_2_0bg8e8b5t92b.appendChild(_5_05vj76ud2u1p);
_1_04i8bsr0el07.appendChild(_2_0bg8e8b5t92b);
let _6_0kwpkx7jjrve = document.createElement("div");
_JSX.attribute(_6_0kwpkx7jjrve,"class","app-preview-button-display-mask");
let _7_0z88e4p0ckwh = document.createElement("div");
_JSX.attribute(_7_0z88e4p0ckwh,"class","app-preview-button-wrapper");
let _8_0vi7vm4fe8gh = document.createElement("div");
_JSX.attribute(_8_0vi7vm4fe8gh,"class","app-interface-button");
_JSX.attribute(_8_0vi7vm4fe8gh,"app-action","open");
_JSX.attribute(_8_0vi7vm4fe8gh,"target-presentation",_this.data.query.id);
let _9_0xhgdfu20l6r = document.createElement("span");
let _a_0x4nkrh32059 = document.createTextNode("OPEN");
_9_0xhgdfu20l6r.appendChild(_a_0x4nkrh32059);
_8_0vi7vm4fe8gh.appendChild(_9_0xhgdfu20l6r);
_7_0z88e4p0ckwh.appendChild(_8_0vi7vm4fe8gh);
let _b_0xrjwlcksnb = document.createElement("hr");
_JSX.attribute(_b_0xrjwlcksnb,"class","app-transparent");
_7_0z88e4p0ckwh.appendChild(_b_0xrjwlcksnb);
let _c_0yvu79sypvtj = document.createElement("div");
_JSX.attribute(_c_0yvu79sypvtj,"class","app-interface-button");
_JSX.attribute(_c_0yvu79sypvtj,"app-action","edit");
_JSX.attribute(_c_0yvu79sypvtj,"target-presentation",_this.data.query.id);
let _d_04dowgubd8uk = document.createElement("span");
let _e_0ukn1wd9k42 = document.createTextNode("EDIT");
_d_04dowgubd8uk.appendChild(_e_0ukn1wd9k42);
_c_0yvu79sypvtj.appendChild(_d_04dowgubd8uk);
_7_0z88e4p0ckwh.appendChild(_c_0yvu79sypvtj);
let _f_0hdgkes3cwwh = document.createElement("hr");
_JSX.attribute(_f_0hdgkes3cwwh,"class","app-transparent");
_7_0z88e4p0ckwh.appendChild(_f_0hdgkes3cwwh);
let _g_0h1eh20vviu6 = document.createElement("div");
_JSX.attribute(_g_0h1eh20vviu6,"class","app-interface-button");
_JSX.attribute(_g_0h1eh20vviu6,"app-action","delete");
_JSX.attribute(_g_0h1eh20vviu6,"target-presentation",_this.data.query.id);
_JSX.attribute(_g_0h1eh20vviu6,"style","--offset:40px;");
let _h_0s3uevpmjgg = document.createElement("span");
let _i_0dcfzhll2rhn = document.createTextNode("DELETE");
_h_0s3uevpmjgg.appendChild(_i_0dcfzhll2rhn);
_g_0h1eh20vviu6.appendChild(_h_0s3uevpmjgg);
_7_0z88e4p0ckwh.appendChild(_g_0h1eh20vviu6);
_6_0kwpkx7jjrve.appendChild(_7_0z88e4p0ckwh);
_1_04i8bsr0el07.appendChild(_6_0kwpkx7jjrve);
_0_0a1whp85f45.appendChild(_1_04i8bsr0el07);
return _0_0a1whp85f45;})(this));
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}