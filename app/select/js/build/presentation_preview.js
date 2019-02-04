/*JSX injection*/
function _JSX(parent, thing) {if(thing.constructor==Array)return thing.forEach(itm=>_JSX(parent,itm));if (thing.nodeType || thing.textContent) {parent.appendChild(thing);} else {parent.appendChild(document.createTextNode(thing.toString()));}}
/*begin user file*/
import util from './util.js';
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
        return (((function(){let _1_033100f9aea609 = document.createElement("DIV");_1_033100f9aea609.setAttribute("class",`app-preview-wrapper`);let _2_009ead0b6c7952 = document.createElement("DIV");_2_009ead0b6c7952.setAttribute("class",`app-preview-border`);let _3_03bc3512f8a647 = document.createElement("DIV");_3_03bc3512f8a647.setAttribute("class",`app-preview-preview`);let _4_0212cff1fe1cf9 = document.createElement("DIV");_4_0212cff1fe1cf9.setAttribute("class",`app-preview-image-wrapper`);let _5_0680ba6f2ed282 = document.createElement("IMG");_5_0680ba6f2ed282.setAttribute("src",src);_5_0680ba6f2ed282.setAttribute("class",`app-preview-image`);_4_0212cff1fe1cf9.appendChild(_5_0680ba6f2ed282);_3_03bc3512f8a647.appendChild(_4_0212cff1fe1cf9);let _6_09af7f6bd85fdf=document.createTextNode(`Presentation preview`);_3_03bc3512f8a647.appendChild(_6_09af7f6bd85fdf);_2_009ead0b6c7952.appendChild(_3_03bc3512f8a647);let _7_0ca85b75623701 = document.createElement("DIV");_7_0ca85b75623701.setAttribute("class",`app-preview-button-display-mask`);let _8_04fc9a6374b5b9 = document.createElement("DIV");_8_04fc9a6374b5b9.setAttribute("class",`app-preview-button-wrapper`);let _9_04995a36b4c0bb = document.createElement("DIV");_9_04995a36b4c0bb.setAttribute("class",`app-interface-button`);_9_04995a36b4c0bb.setAttribute("app-action",`open`);let _a_0862d3adc00dc8 = document.createElement("SPAN");let _b_0a522e74c25977=document.createTextNode(`OPEN`);_a_0862d3adc00dc8.appendChild(_b_0a522e74c25977);_9_04995a36b4c0bb.appendChild(_a_0862d3adc00dc8);_8_04fc9a6374b5b9.appendChild(_9_04995a36b4c0bb);let _c_03ca9ff45ff882 = document.createElement("HR");_c_03ca9ff45ff882.setAttribute("class",`app-invisible`);_8_04fc9a6374b5b9.appendChild(_c_03ca9ff45ff882);let _d_0be6531b5650d1 = document.createElement("DIV");_d_0be6531b5650d1.setAttribute("class",`app-interface-button`);_d_0be6531b5650d1.setAttribute("app-action",`edit`);let _e_0d3f49654bbc06 = document.createElement("SPAN");let _f_092f6eafc0a82=document.createTextNode(`EDIT`);_e_0d3f49654bbc06.appendChild(_f_092f6eafc0a82);_d_0be6531b5650d1.appendChild(_e_0d3f49654bbc06);_8_04fc9a6374b5b9.appendChild(_d_0be6531b5650d1);_7_0ca85b75623701.appendChild(_8_04fc9a6374b5b9);_2_009ead0b6c7952.appendChild(_7_0ca85b75623701);_1_033100f9aea609.appendChild(_2_009ead0b6c7952);return _1_033100f9aea609;})()));
    }
    render() {
        //do stuff to make preview;
    }
}