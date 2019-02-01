/*JSX injection*/
function _JSX(parent, thing) { if (thing.constructor == Array) return thing.forEach(itm => _JSX(parent, itm)); if (thing.nodeType || thing.textContent) { parent.appendChild(thing); } else { parent.appendChild(document.createTextNode(thing.toString())); } }
/*begin user file*/
import util from './util.js';
export default class presentation_preview {
    constructor(id, cb) {
        this.element = null;
        this.cb = cb;
        this.id = id;
        this.data = null;
        util.api("METADATA", { id })
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
        return (((function () { let _1_09b230c878c439 = document.createElement("DIV"); _1_09b230c878c439.setAttribute("class", `app-preview-wrapper`); let _2_07c3dd934eb5a = document.createElement("DIV"); _2_07c3dd934eb5a.setAttribute("class", `app-preview-border`); let _3_0bf230a485dd41 = document.createElement("DIV"); _3_0bf230a485dd41.setAttribute("class", `app-preview-preview`); let _4_0c742d306dad25 = document.createElement("DIV"); _4_0c742d306dad25.setAttribute("class", `app-preview-image-wrapper`); let _5_062fcf52ee6dba = document.createElement("IMG"); _5_062fcf52ee6dba.setAttribute("src", src); _5_062fcf52ee6dba.setAttribute("class", `app-preview-image`); _4_0c742d306dad25.appendChild(_5_062fcf52ee6dba); _3_0bf230a485dd41.appendChild(_4_0c742d306dad25); let _6_0a714825bd361b = document.createTextNode(`Presentation preview`); _3_0bf230a485dd41.appendChild(_6_0a714825bd361b); _2_07c3dd934eb5a.appendChild(_3_0bf230a485dd41); let _7_0927fc68d648b9 = document.createElement("DIV"); _7_0927fc68d648b9.setAttribute("class", `app-preview-button-display-mask`); let _8_05f327ce10574e = document.createElement("DIV"); _8_05f327ce10574e.setAttribute("class", `app-preview-button-wrapper`); let _9_0383f58e7b3fbf = document.createElement("DIV"); _9_0383f58e7b3fbf.setAttribute("class", `app-interface-button`); _9_0383f58e7b3fbf.setAttribute("app-action", `open`); let _a_00de3ae64d436c = document.createElement("SPAN"); let _b_0e1f1a9ea90d61 = document.createTextNode(`OPEN`); _a_00de3ae64d436c.appendChild(_b_0e1f1a9ea90d61); _9_0383f58e7b3fbf.appendChild(_a_00de3ae64d436c); _8_05f327ce10574e.appendChild(_9_0383f58e7b3fbf); let _c_02c4f1acb06f95 = document.createElement("HR"); _c_02c4f1acb06f95.setAttribute("class", `app-invisible`); _8_05f327ce10574e.appendChild(_c_02c4f1acb06f95); let _d_0013f8d6fc7f4f = document.createElement("DIV"); _d_0013f8d6fc7f4f.setAttribute("class", `app-interface-button`); _d_0013f8d6fc7f4f.setAttribute("app-action", `edit`); let _e_04c04df07ab3af = document.createElement("SPAN"); let _f_04fc773f86974 = document.createTextNode(`EDIT`); _e_04c04df07ab3af.appendChild(_f_04fc773f86974); _d_0013f8d6fc7f4f.appendChild(_e_04c04df07ab3af); _8_05f327ce10574e.appendChild(_d_0013f8d6fc7f4f); _7_0927fc68d648b9.appendChild(_8_05f327ce10574e); _2_07c3dd934eb5a.appendChild(_7_0927fc68d648b9); _1_09b230c878c439.appendChild(_2_07c3dd934eb5a); return _1_09b230c878c439; })()));
    }
    render() {
        //do stuff to make preview;
    }
}