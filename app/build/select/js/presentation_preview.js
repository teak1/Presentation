const _JSX = { attribute(e, n, v) { if (!v) return; if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
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
        let e = ((function(_this){let _0_018n9okotaub = document.createElement("div");_JSX.attribute(_0_018n9okotaub,"class","app-preview-wrapper");let _1_0dhu6w0v2qff = document.createElement("div");_JSX.attribute(_1_0dhu6w0v2qff,"class","app-preview-border");let _2_0cfrtx24dvvs = document.createElement("div");_JSX.attribute(_2_0cfrtx24dvvs,"class","app-preview-preview");let _3_0z9zhdh5yqfg = document.createElement("div");_JSX.attribute(_3_0z9zhdh5yqfg,"class","app-preview-image-wrapper");let _4_0i329autu6rj = document.createElement("img");_JSX.attribute(_4_0i329autu6rj,"src",src);_JSX.attribute(_4_0i329autu6rj,"class","app-preview-image");_3_0z9zhdh5yqfg.appendChild(_4_0i329autu6rj);_2_0cfrtx24dvvs.appendChild(_3_0z9zhdh5yqfg);let _5_0rot37mhsr2 = document.createElement("h1");_JSX.attribute(_5_0rot37mhsr2,"class","app-preview-text");_JSX.append(_5_0rot37mhsr2,_this.data.name.replace(/\\s/g, " "));_2_0cfrtx24dvvs.appendChild(_5_0rot37mhsr2);_1_0dhu6w0v2qff.appendChild(_2_0cfrtx24dvvs);let _6_0sf9p1b0mkz = document.createElement("div");_JSX.attribute(_6_0sf9p1b0mkz,"class","app-preview-button-display-mask");let _7_0tyueb9ac4v = document.createElement("div");_JSX.attribute(_7_0tyueb9ac4v,"class","app-preview-button-wrapper");let _8_09816ku5gt1 = document.createElement("div");_JSX.attribute(_8_09816ku5gt1,"class","app-interface-button");_JSX.attribute(_8_09816ku5gt1,"app-action","open");_JSX.attribute(_8_09816ku5gt1,"target-presentation",_this.data.query.id);let _9_07rw6h4ghfco = document.createElement("span");let _a_092fgtbm7hz = document.createTextNode("OPEN");_9_07rw6h4ghfco.appendChild(_a_092fgtbm7hz);_8_09816ku5gt1.appendChild(_9_07rw6h4ghfco);_7_0tyueb9ac4v.appendChild(_8_09816ku5gt1);let _b_0k0ijaoaj1 = document.createElement("hr");_JSX.attribute(_b_0k0ijaoaj1,"class","app-transparent");_7_0tyueb9ac4v.appendChild(_b_0k0ijaoaj1);let _c_0jbsjzmjpgc = document.createElement("div");_JSX.attribute(_c_0jbsjzmjpgc,"class","app-interface-button");_JSX.attribute(_c_0jbsjzmjpgc,"app-action","edit");_JSX.attribute(_c_0jbsjzmjpgc,"target-presentation",_this.data.query.id);let _d_0visvdfzlvop = document.createElement("span");let _e_0jmt0rl8n5er = document.createTextNode("EDIT");_d_0visvdfzlvop.appendChild(_e_0jmt0rl8n5er);_c_0jbsjzmjpgc.appendChild(_d_0visvdfzlvop);_7_0tyueb9ac4v.appendChild(_c_0jbsjzmjpgc);let _f_0oeh3hox83ad = document.createElement("hr");_JSX.attribute(_f_0oeh3hox83ad,"class","app-transparent");_7_0tyueb9ac4v.appendChild(_f_0oeh3hox83ad);let _g_0rdck4xppw0c = document.createElement("div");_JSX.attribute(_g_0rdck4xppw0c,"class","app-interface-button");_JSX.attribute(_g_0rdck4xppw0c,"app-action","delete");_JSX.attribute(_g_0rdck4xppw0c,"target-presentation",_this.data.query.id);_JSX.attribute(_g_0rdck4xppw0c,"style","--offset:40px;");let _h_015kg2hi98ir = document.createElement("span");let _i_0ty4glx1i1k = document.createTextNode("DELETE");_h_015kg2hi98ir.appendChild(_i_0ty4glx1i1k);_g_0rdck4xppw0c.appendChild(_h_015kg2hi98ir);_7_0tyueb9ac4v.appendChild(_g_0rdck4xppw0c);_6_0sf9p1b0mkz.appendChild(_7_0tyueb9ac4v);_1_0dhu6w0v2qff.appendChild(_6_0sf9p1b0mkz);_0_018n9okotaub.appendChild(_1_0dhu6w0v2qff);return _0_018n9okotaub;})(this));
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}