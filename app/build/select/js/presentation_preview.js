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
let _0_0iwbkgk3yc8n = document.createElement("div");
_JSX.attribute(_0_0iwbkgk3yc8n,"class","app-preview-wrapper");
let _1_0rrpc1ozqz3k = document.createElement("div");
_JSX.attribute(_1_0rrpc1ozqz3k,"class","app-preview-border");
let _2_0n4sijhibgng = document.createElement("div");
_JSX.attribute(_2_0n4sijhibgng,"class","app-preview-preview");
let _3_0dzwi9rptr67 = document.createElement("div");
_JSX.attribute(_3_0dzwi9rptr67,"class","app-preview-image-wrapper");
let _4_0qlcsy6lzagl = document.createElement("img");
_JSX.attribute(_4_0qlcsy6lzagl,"src",src);
_JSX.attribute(_4_0qlcsy6lzagl,"class","app-preview-image");
_3_0dzwi9rptr67.appendChild(_4_0qlcsy6lzagl);
_2_0n4sijhibgng.appendChild(_3_0dzwi9rptr67);
let _5_0u5bxjujef5 = document.createElement("h1");
_JSX.attribute(_5_0u5bxjujef5,"class","app-preview-text");
_JSX.append(_5_0u5bxjujef5,_this.data.name.replace(/\\s/g, " "));
_2_0n4sijhibgng.appendChild(_5_0u5bxjujef5);
_1_0rrpc1ozqz3k.appendChild(_2_0n4sijhibgng);
let _6_04zoa0we24kh = document.createElement("div");
_JSX.attribute(_6_04zoa0we24kh,"class","app-preview-button-display-mask");
let _7_0dgo4udrfat8 = document.createElement("div");
_JSX.attribute(_7_0dgo4udrfat8,"class","app-preview-button-wrapper");
let _8_0pjrdci63iy = document.createElement("div");
_JSX.attribute(_8_0pjrdci63iy,"class","app-interface-button");
_JSX.attribute(_8_0pjrdci63iy,"app-action","open");
_JSX.attribute(_8_0pjrdci63iy,"target-presentation",_this.data.query.id);
let _9_019tf4u5ro5f = document.createElement("span");
let _a_058xynboyj6h = document.createTextNode("OPEN");
_9_019tf4u5ro5f.appendChild(_a_058xynboyj6h);
_8_0pjrdci63iy.appendChild(_9_019tf4u5ro5f);
_7_0dgo4udrfat8.appendChild(_8_0pjrdci63iy);
let _b_0y8b1z992ja = document.createElement("hr");
_JSX.attribute(_b_0y8b1z992ja,"class","app-transparent");
_7_0dgo4udrfat8.appendChild(_b_0y8b1z992ja);
let _c_0bfwnztwjpiw = document.createElement("div");
_JSX.attribute(_c_0bfwnztwjpiw,"class","app-interface-button");
_JSX.attribute(_c_0bfwnztwjpiw,"app-action","edit");
_JSX.attribute(_c_0bfwnztwjpiw,"target-presentation",_this.data.query.id);
let _d_0zgfdp1v69v = document.createElement("span");
let _e_06jftg5c29jj = document.createTextNode("EDIT");
_d_0zgfdp1v69v.appendChild(_e_06jftg5c29jj);
_c_0bfwnztwjpiw.appendChild(_d_0zgfdp1v69v);
_7_0dgo4udrfat8.appendChild(_c_0bfwnztwjpiw);
let _f_08jtzkmg0yu9 = document.createElement("hr");
_JSX.attribute(_f_08jtzkmg0yu9,"class","app-transparent");
_7_0dgo4udrfat8.appendChild(_f_08jtzkmg0yu9);
let _g_0vw3tds5plr = document.createElement("div");
_JSX.attribute(_g_0vw3tds5plr,"class","app-interface-button");
_JSX.attribute(_g_0vw3tds5plr,"app-action","delete");
_JSX.attribute(_g_0vw3tds5plr,"target-presentation",_this.data.query.id);
_JSX.attribute(_g_0vw3tds5plr,"style","--offset:40px;");
let _h_064gzdid4bfn = document.createElement("span");
let _i_041po25d44ql = document.createTextNode("DELETE");
_h_064gzdid4bfn.appendChild(_i_041po25d44ql);
_g_0vw3tds5plr.appendChild(_h_064gzdid4bfn);
_7_0dgo4udrfat8.appendChild(_g_0vw3tds5plr);
_6_04zoa0we24kh.appendChild(_7_0dgo4udrfat8);
_1_0rrpc1ozqz3k.appendChild(_6_04zoa0we24kh);
_0_0iwbkgk3yc8n.appendChild(_1_0rrpc1ozqz3k);
return _0_0iwbkgk3yc8n;})(this));
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}