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
        if (data.name && data.description && data.type === "METADATA") {
            this.data = data;
            this.render();
        } else {
            console.log(data);
            throw new Error("unexpected data format for preview");
        }
    }
    createElements(src) {
        let e = ((function(){
let _0_058ca4df3z79 = document.createElement("div");
_JSX.attribute(_0_058ca4df3z79,"class","app-preview-wrapper");
let _1_0pyrtnxb7j6 = document.createElement("div");
_JSX.attribute(_1_0pyrtnxb7j6,"class","app-preview-border");
let _2_033l80hae015 = document.createElement("div");
_JSX.attribute(_2_033l80hae015,"class","app-preview-preview");
let _3_03xkb6ha0jpf = document.createElement("div");
_JSX.attribute(_3_03xkb6ha0jpf,"class","app-preview-image-wrapper");
let _4_0h47dm2ffg7 = document.createElement("img");
_JSX.attribute(_4_0h47dm2ffg7,"src",src);
_JSX.attribute(_4_0h47dm2ffg7,"class","app-preview-image");
_3_03xkb6ha0jpf.appendChild(_4_0h47dm2ffg7);
_2_033l80hae015.appendChild(_3_03xkb6ha0jpf);
let _5_0lfbxf8mwc2f = document.createTextNode("Presentation preview");
_2_033l80hae015.appendChild(_5_0lfbxf8mwc2f);
_1_0pyrtnxb7j6.appendChild(_2_033l80hae015);
let _6_0hk1djidtzh6 = document.createElement("div");
_JSX.attribute(_6_0hk1djidtzh6,"class","app-preview-button-display-mask");
let _7_0686j8bu2uhn = document.createElement("div");
_JSX.attribute(_7_0686j8bu2uhn,"class","app-preview-button-wrapper");
let _8_0nz9u91i4kwt = document.createElement("div");
_JSX.attribute(_8_0nz9u91i4kwt,"class","app-interface-button");
_JSX.attribute(_8_0nz9u91i4kwt,"app-action","open");
let _9_05zp27b2dmbn = document.createElement("span");
let _a_0s9u6k3moan = document.createTextNode("OPEN");
_9_05zp27b2dmbn.appendChild(_a_0s9u6k3moan);
_8_0nz9u91i4kwt.appendChild(_9_05zp27b2dmbn);
_7_0686j8bu2uhn.appendChild(_8_0nz9u91i4kwt);
let _b_059hmvskulzj = document.createElement("hr");
_JSX.attribute(_b_059hmvskulzj,"class","app-transparent");
_7_0686j8bu2uhn.appendChild(_b_059hmvskulzj);
let _c_0ys57dizqc3a = document.createElement("div");
_JSX.attribute(_c_0ys57dizqc3a,"class","app-interface-button");
_JSX.attribute(_c_0ys57dizqc3a,"app-action","edit");
let _d_0xjbyw91txxd = document.createElement("span");
let _e_0q2zdsdcto7b = document.createTextNode("EDIT");
_d_0xjbyw91txxd.appendChild(_e_0q2zdsdcto7b);
_c_0ys57dizqc3a.appendChild(_d_0xjbyw91txxd);
_7_0686j8bu2uhn.appendChild(_c_0ys57dizqc3a);
_6_0hk1djidtzh6.appendChild(_7_0686j8bu2uhn);
_1_0pyrtnxb7j6.appendChild(_6_0hk1djidtzh6);
_0_058ca4df3z79.appendChild(_1_0pyrtnxb7j6);
return _0_058ca4df3z79;})());
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
    render() {
        //do stuff to make preview;
    }
}