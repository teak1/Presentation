import util from './../../util.js';
export default class presentation_preview {
    constructor(id) {
        this.element = this.createElements(id);
        this.id = id;
        this.data = null;
        util.api("METADATA", { id })
            .then(data => this.setData(data));
    }
    setData(data) {
        if (data.name && data.description && data.type === "METADATA") {
            this.data = data;
            this.render();
        } else {
            throw new Error("unexpected data format for preview");
        }
    }
    createElements(src) {
        let _0 = document.createElement("DIV");
        _0.setAttribute("class", "app-preview-wrapper");
        let _1 = document.createTextNode("");
        _0.appendChild(_1);
        let _2 = document.createElement("DIV");
        _2.setAttribute("class", "app-preview-border");
        let _3 = document.createTextNode("");
        _2.appendChild(_3);
        let _4 = document.createElement("DIV");
        _4.setAttribute("class", "app-preview-preview");
        let _5 = document.createTextNode("");
        _4.appendChild(_5);
        let _6 = document.createElement("IMG");
        _6.setAttribute("src", src);
        _6.setAttribute("class", "app-preview-image");
        _4.appendChild(_6);
        let _7 = document.createTextNode("Presentation preview");
        _4.appendChild(_7);
        _2.appendChild(_4);
        let _8 = document.createTextNode("");
        _2.appendChild(_8);
        let _9 = document.createElement("DIV");
        _9.setAttribute("class", "app-preview-button-display-mask");
        let _a = document.createTextNode("");
        _9.appendChild(_a);
        let _b = document.createElement("DIV");
        _b.setAttribute("class", "app-preview-button-wrapper");
        let _c = document.createTextNode("");
        _b.appendChild(_c);
        let _d = document.createElement("DIV");
        _d.setAttribute("class", "app-interface-button");
        _d.setAttribute("app-action", "open");
        let _e = document.createTextNode("");
        _d.appendChild(_e);
        let _f = document.createElement("SPAN");
        let _10 = document.createTextNode("OPEN");
        _f.appendChild(_10);
        _d.appendChild(_f);
        let _11 = document.createTextNode("");
        _d.appendChild(_11);
        _b.appendChild(_d);
        let _12 = document.createTextNode("");
        _b.appendChild(_12);
        let _13 = document.createElement("HR");
        _13.setAttribute("class", "app-transparent");
        _b.appendChild(_13);
        let _14 = document.createTextNode("");
        _b.appendChild(_14);
        let _15 = document.createElement("DIV");
        _15.setAttribute("class", "app-interface-button");
        //_15.setAttribute("style", "--offset:30px;");
        _15.setAttribute("app-action", "edit");
        let _16 = document.createTextNode("");
        _15.appendChild(_16);
        let _17 = document.createElement("SPAN");
        let _18 = document.createTextNode("EDIT");
        _17.appendChild(_18);
        _15.appendChild(_17);
        let _19 = document.createTextNode("");
        _15.appendChild(_19);
        _b.appendChild(_15);
        let _1a = document.createTextNode("");
        _b.appendChild(_1a);
        _9.appendChild(_b);
        let _1b = document.createTextNode("");
        _9.appendChild(_1b);
        _2.appendChild(_9);
        let _1c = document.createTextNode("");
        _2.appendChild(_1c);
        _0.appendChild(_2);
        let _1d = document.createTextNode("");
        _0.appendChild(_1d);
        console.log
        return _0;
    }
    render() {
        //do stuff to make preview;
    }
}