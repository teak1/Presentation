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
let _0_0vycnado7sso = document.createElement("div");
_JSX.attribute(_0_0vycnado7sso,"class","app-preview-wrapper");
let _1_0tfwe2b1enq = document.createElement("div");
_JSX.attribute(_1_0tfwe2b1enq,"class","app-preview-border");
let _2_05h6dnv2nguh = document.createElement("div");
_JSX.attribute(_2_05h6dnv2nguh,"class","app-preview-preview");
let _3_00y1m19wj0wji = document.createElement("div");
_JSX.attribute(_3_00y1m19wj0wji,"class","app-preview-image-wrapper");
let _4_0mbex0wh1l3 = document.createElement("img");
_JSX.attribute(_4_0mbex0wh1l3,"src",src);
_JSX.attribute(_4_0mbex0wh1l3,"class","app-preview-image");
_3_00y1m19wj0wji.appendChild(_4_0mbex0wh1l3);
_2_05h6dnv2nguh.appendChild(_3_00y1m19wj0wji);
let _5_0onipp264we = document.createElement("h1");
_JSX.attribute(_5_0onipp264we,"class","app-preview-text");
_JSX.append(_5_0onipp264we,_this.data.name);
_2_05h6dnv2nguh.appendChild(_5_0onipp264we);
_1_0tfwe2b1enq.appendChild(_2_05h6dnv2nguh);
let _6_0ordiod75owk = document.createElement("div");
_JSX.attribute(_6_0ordiod75owk,"class","app-preview-button-display-mask");
let _7_0eh6garpvvyn = document.createElement("div");
_JSX.attribute(_7_0eh6garpvvyn,"class","app-preview-button-wrapper");
let _8_0gp4pc8ldv4 = document.createElement("div");
_JSX.attribute(_8_0gp4pc8ldv4,"class","app-interface-button");
_JSX.attribute(_8_0gp4pc8ldv4,"app-action","open");
_JSX.attribute(_8_0gp4pc8ldv4,"target-presentation",_this.data.query.id);
let _9_0wybowzaozk = document.createElement("span");
let _a_0emfow9bhsf6 = document.createTextNode("OPEN");
_9_0wybowzaozk.appendChild(_a_0emfow9bhsf6);
_8_0gp4pc8ldv4.appendChild(_9_0wybowzaozk);
_7_0eh6garpvvyn.appendChild(_8_0gp4pc8ldv4);
let _b_0269fnr17wr5 = document.createElement("hr");
_JSX.attribute(_b_0269fnr17wr5,"class","app-transparent");
_7_0eh6garpvvyn.appendChild(_b_0269fnr17wr5);
let _c_0e8vgqav5ddd = document.createElement("div");
_JSX.attribute(_c_0e8vgqav5ddd,"class","app-interface-button");
_JSX.attribute(_c_0e8vgqav5ddd,"app-action","edit");
_JSX.attribute(_c_0e8vgqav5ddd,"target-presentation",_this.data.query.id);
let _d_0wgy4f8jzxc = document.createElement("span");
let _e_0klmqpadl0bo = document.createTextNode("EDIT");
_d_0wgy4f8jzxc.appendChild(_e_0klmqpadl0bo);
_c_0e8vgqav5ddd.appendChild(_d_0wgy4f8jzxc);
_7_0eh6garpvvyn.appendChild(_c_0e8vgqav5ddd);
let _f_0ysrtdg46md = document.createElement("hr");
_JSX.attribute(_f_0ysrtdg46md,"class","app-transparent");
_7_0eh6garpvvyn.appendChild(_f_0ysrtdg46md);
let _g_0mtlz49fyk5i = document.createElement("div");
_JSX.attribute(_g_0mtlz49fyk5i,"class","app-interface-button");
_JSX.attribute(_g_0mtlz49fyk5i,"app-action","delete");
_JSX.attribute(_g_0mtlz49fyk5i,"target-presentation",_this.data.query.id);
_JSX.attribute(_g_0mtlz49fyk5i,"style","--offset:40px;");
let _h_0zyvk7ykfng = document.createElement("span");
let _i_0etneucrxhb6 = document.createTextNode("DELETE");
_h_0zyvk7ykfng.appendChild(_i_0etneucrxhb6);
_g_0mtlz49fyk5i.appendChild(_h_0zyvk7ykfng);
_7_0eh6garpvvyn.appendChild(_g_0mtlz49fyk5i);
_6_0ordiod75owk.appendChild(_7_0eh6garpvvyn);
_1_0tfwe2b1enq.appendChild(_6_0ordiod75owk);
_0_0vycnado7sso.appendChild(_1_0tfwe2b1enq);
return _0_0vycnado7sso;})(this));
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}