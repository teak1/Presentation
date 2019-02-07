const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/
import util from './util.jsx';
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
let _0_09f7yi6ksm1n = document.createElement("div");
_JSX.attribute(_0_09f7yi6ksm1n,"class","app-preview-wrapper");
let _1_0c67xnzighlu = document.createElement("div");
_JSX.attribute(_1_0c67xnzighlu,"class","app-preview-border");
let _2_0j8rub82vnd = document.createElement("div");
_JSX.attribute(_2_0j8rub82vnd,"class","app-preview-preview");
let _3_0lpd1md3z6r = document.createElement("div");
_JSX.attribute(_3_0lpd1md3z6r,"class","app-preview-image-wrapper");
let _4_096ybkr97ecm = document.createElement("img");
_JSX.attribute(_4_096ybkr97ecm,"src",src);
_JSX.attribute(_4_096ybkr97ecm,"class","app-preview-image");
_3_0lpd1md3z6r.appendChild(_4_096ybkr97ecm);
_2_0j8rub82vnd.appendChild(_3_0lpd1md3z6r);
let _5_0y03ojq9iyo = document.createTextNode("
                    Presentation preview
                ");
_2_0j8rub82vnd.appendChild(_5_0y03ojq9iyo);
_1_0c67xnzighlu.appendChild(_2_0j8rub82vnd);
let _6_0morbgrtwn8n = document.createElement("div");
_JSX.attribute(_6_0morbgrtwn8n,"class","app-preview-button-display-mask");
let _7_0y6ge52oa2oe = document.createElement("div");
_JSX.attribute(_7_0y6ge52oa2oe,"class","app-preview-button-wrapper");
let _8_000qdr931y96zf = document.createElement("div");
_JSX.attribute(_8_000qdr931y96zf,"class","app-interface-button");
_JSX.attribute(_8_000qdr931y96zf,"app-action","open");
let _9_0fb3n30vj53w = document.createElement("span");
let _a_0y47ienhu5u = document.createTextNode("
                                OPEN
                            ");
_9_0fb3n30vj53w.appendChild(_a_0y47ienhu5u);
_8_000qdr931y96zf.appendChild(_9_0fb3n30vj53w);
_7_0y6ge52oa2oe.appendChild(_8_000qdr931y96zf);
let _b_0j5q3zh7rfy9 = document.createElement("hr");
_JSX.attribute(_b_0j5q3zh7rfy9,"class","app-invisible");
_7_0y6ge52oa2oe.appendChild(_b_0j5q3zh7rfy9);
let _c_0frat20wtyh = document.createElement("div");
_JSX.attribute(_c_0frat20wtyh,"class","app-interface-button");
_JSX.attribute(_c_0frat20wtyh,"app-action","edit");
let _d_02kgvbz7pi4t = document.createElement("span");
let _e_0wcl0ne6l8gr = document.createTextNode("
                                EDIT
                            ");
_d_02kgvbz7pi4t.appendChild(_e_0wcl0ne6l8gr);
_c_0frat20wtyh.appendChild(_d_02kgvbz7pi4t);
_7_0y6ge52oa2oe.appendChild(_c_0frat20wtyh);
_6_0morbgrtwn8n.appendChild(_7_0y6ge52oa2oe);
_1_0c67xnzighlu.appendChild(_6_0morbgrtwn8n);
_0_09f7yi6ksm1n.appendChild(_1_0c67xnzighlu);
return _0_09f7yi6ksm1n;})());
    }
    render() {
        //do stuff to make preview;
    }
}