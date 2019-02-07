const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/
import util from "./util.js";
export default class presentation_preview {
    constructor(id, cb) {
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
        return ((function(){
let _0_0y69gssqnzkh = document.createElement("div");
_JSX.attribute(_0_0y69gssqnzkh,"class","app-preview-wrapper");
let _1_0lrak2yhvi6d = document.createElement("div");
_JSX.attribute(_1_0lrak2yhvi6d,"class","app-preview-border");
let _2_0vvpns7sh8b = document.createElement("div");
_JSX.attribute(_2_0vvpns7sh8b,"class","app-preview-preview");
let _3_0qg0d4qx5gdr = document.createElement("div");
_JSX.attribute(_3_0qg0d4qx5gdr,"class","app-preview-image-wrapper");
let _4_0su5jif4vyus = document.createElement("img");
_JSX.attribute(_4_0su5jif4vyus,"src",src);
_JSX.attribute(_4_0su5jif4vyus,"class","app-preview-image");
_3_0qg0d4qx5gdr.appendChild(_4_0su5jif4vyus);
_2_0vvpns7sh8b.appendChild(_3_0qg0d4qx5gdr);
let _5_04tzkzodjos = document.createTextNode("Presentation preview");
_2_0vvpns7sh8b.appendChild(_5_04tzkzodjos);
_1_0lrak2yhvi6d.appendChild(_2_0vvpns7sh8b);
let _6_0bcngc85pbdp = document.createElement("div");
_JSX.attribute(_6_0bcngc85pbdp,"class","app-preview-button-display-mask");
let _7_0crn90p503f = document.createElement("div");
_JSX.attribute(_7_0crn90p503f,"class","app-preview-button-wrapper");
let _8_0dwy0qilc3o = document.createElement("div");
_JSX.attribute(_8_0dwy0qilc3o,"class","app-interface-button");
_JSX.attribute(_8_0dwy0qilc3o,"app-action","open");
let _9_0e4sne97smzi = document.createElement("span");
let _a_0c4bk4cx8nh5 = document.createTextNode("OPEN");
_9_0e4sne97smzi.appendChild(_a_0c4bk4cx8nh5);
_8_0dwy0qilc3o.appendChild(_9_0e4sne97smzi);
_7_0crn90p503f.appendChild(_8_0dwy0qilc3o);
let _b_0owcs6c7rwli = document.createElement("hr");
_JSX.attribute(_b_0owcs6c7rwli,"class","app-invisible");
_7_0crn90p503f.appendChild(_b_0owcs6c7rwli);
let _c_0f00grkgcao = document.createElement("div");
_JSX.attribute(_c_0f00grkgcao,"class","app-interface-button");
_JSX.attribute(_c_0f00grkgcao,"app-action","edit");
let _d_0rkz9o9pptyi = document.createElement("span");
let _e_0do0msc4xcdi = document.createTextNode("EDIT");
_d_0rkz9o9pptyi.appendChild(_e_0do0msc4xcdi);
_c_0f00grkgcao.appendChild(_d_0rkz9o9pptyi);
_7_0crn90p503f.appendChild(_c_0f00grkgcao);
_6_0bcngc85pbdp.appendChild(_7_0crn90p503f);
_1_0lrak2yhvi6d.appendChild(_6_0bcngc85pbdp);
_0_0y69gssqnzkh.appendChild(_1_0lrak2yhvi6d);
return _0_0y69gssqnzkh;})());
    }
    render() {
        //do stuff to make preview;
    }
}