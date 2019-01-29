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
        return (((function(){let _1 = document.createElement("DIV");_1.setAttribute("class",`app-preview-wrapper`);let _2 = document.createElement("DIV");_2.setAttribute("class",`app-preview-border`);let _3 = document.createElement("DIV");_3.setAttribute("class",`app-preview-preview`);let _4 = document.createElement("DIV");_4.setAttribute("class",`app-preview-image-wrapper`);let _5 = document.createElement("IMG");_5.setAttribute("src",src);_5.setAttribute("class",`app-preview-image`);_4.appendChild(_5);_3.appendChild(_4);let _6=document.createTextNode(`Presentation preview`);_3.appendChild(_6);_2.appendChild(_3);let _7 = document.createElement("DIV");_7.setAttribute("class",`app-preview-button-display-mask`);let _8 = document.createElement("DIV");_8.setAttribute("class",`app-preview-button-wrapper`);let _9 = document.createElement("DIV");_9.setAttribute("class",`app-interface-button`);_9.setAttribute("app-action",`open`);let _a = document.createElement("SPAN");let _b=document.createTextNode(`OPEN`);_a.appendChild(_b);_9.appendChild(_a);_8.appendChild(_9);let _c = document.createElement("HR");_c.setAttribute("class",`app-invisible`);_8.appendChild(_c);let _d = document.createElement("DIV");_d.setAttribute("class",`app-interface-button`);_d.setAttribute("app-action",`edit`);let _e = document.createElement("SPAN");let _f=document.createTextNode(`EDIT`);_e.appendChild(_f);_d.appendChild(_e);_8.appendChild(_d);_7.appendChild(_8);_2.appendChild(_7);_1.appendChild(_2);return _1;})()));
    }
    render() {
        //do stuff to make preview;
    }
}