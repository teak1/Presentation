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
let _0_0q13vm7xugk = document.createElement("div");
_JSX.attribute(_0_0q13vm7xugk,"class","app-preview-wrapper");
let _1_0kgjg08b5l4 = document.createElement("div");
_JSX.attribute(_1_0kgjg08b5l4,"class","app-preview-border");
let _2_0vavpsrlc9v = document.createElement("div");
_JSX.attribute(_2_0vavpsrlc9v,"class","app-preview-preview");
let _3_0nn013z5p5zp = document.createElement("div");
_JSX.attribute(_3_0nn013z5p5zp,"class","app-preview-image-wrapper");
let _4_00llrmgobx7rb = document.createElement("img");
_JSX.attribute(_4_00llrmgobx7rb,"src",src);
_JSX.attribute(_4_00llrmgobx7rb,"class","app-preview-image");
_3_0nn013z5p5zp.appendChild(_4_00llrmgobx7rb);
_2_0vavpsrlc9v.appendChild(_3_0nn013z5p5zp);
let _5_08ui4qrbqrno = document.createElement("h1");
_JSX.attribute(_5_08ui4qrbqrno,"class","app-preview-text");
_JSX.append(_5_08ui4qrbqrno,_this.data.name.replace(/\\s/g, " "));
_2_0vavpsrlc9v.appendChild(_5_08ui4qrbqrno);
_1_0kgjg08b5l4.appendChild(_2_0vavpsrlc9v);
let _6_0reyqrqnutfj = document.createElement("div");
_JSX.attribute(_6_0reyqrqnutfj,"class","app-preview-button-display-mask");
let _7_0woqtssk9cj = document.createElement("div");
_JSX.attribute(_7_0woqtssk9cj,"class","app-preview-button-wrapper");
let _8_01ab64f7hjrf = document.createElement("div");
_JSX.attribute(_8_01ab64f7hjrf,"class","app-interface-button");
_JSX.attribute(_8_01ab64f7hjrf,"app-action","open");
_JSX.attribute(_8_01ab64f7hjrf,"target-presentation",_this.data.query.id);
let _9_0jogtodpdfsh = document.createElement("span");
let _a_097mzwudh52v = document.createTextNode("OPEN");
_9_0jogtodpdfsh.appendChild(_a_097mzwudh52v);
_8_01ab64f7hjrf.appendChild(_9_0jogtodpdfsh);
_7_0woqtssk9cj.appendChild(_8_01ab64f7hjrf);
let _b_0q0tzsge6ko = document.createElement("hr");
_JSX.attribute(_b_0q0tzsge6ko,"class","app-transparent");
_7_0woqtssk9cj.appendChild(_b_0q0tzsge6ko);
let _c_0s61xc44hags = document.createElement("div");
_JSX.attribute(_c_0s61xc44hags,"class","app-interface-button");
_JSX.attribute(_c_0s61xc44hags,"app-action","edit");
_JSX.attribute(_c_0s61xc44hags,"target-presentation",_this.data.query.id);
let _d_03qm4rythky2 = document.createElement("span");
let _e_0bl3naevtvl = document.createTextNode("EDIT");
_d_03qm4rythky2.appendChild(_e_0bl3naevtvl);
_c_0s61xc44hags.appendChild(_d_03qm4rythky2);
_7_0woqtssk9cj.appendChild(_c_0s61xc44hags);
let _f_0y3xo545n5zg = document.createElement("hr");
_JSX.attribute(_f_0y3xo545n5zg,"class","app-transparent");
_7_0woqtssk9cj.appendChild(_f_0y3xo545n5zg);
let _g_0mmgmq1wdj7 = document.createElement("div");
_JSX.attribute(_g_0mmgmq1wdj7,"class","app-interface-button");
_JSX.attribute(_g_0mmgmq1wdj7,"app-action","delete");
_JSX.attribute(_g_0mmgmq1wdj7,"target-presentation",_this.data.query.id);
_JSX.attribute(_g_0mmgmq1wdj7,"style","--offset:40px;");
let _h_07o4y2sci2d6 = document.createElement("span");
let _i_08v7egvbb65o = document.createTextNode("DELETE");
_h_07o4y2sci2d6.appendChild(_i_08v7egvbb65o);
_g_0mmgmq1wdj7.appendChild(_h_07o4y2sci2d6);
_7_0woqtssk9cj.appendChild(_g_0mmgmq1wdj7);
_6_0reyqrqnutfj.appendChild(_7_0woqtssk9cj);
_1_0kgjg08b5l4.appendChild(_6_0reyqrqnutfj);
_0_0q13vm7xugk.appendChild(_1_0kgjg08b5l4);
return _0_0q13vm7xugk;})(this));
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}