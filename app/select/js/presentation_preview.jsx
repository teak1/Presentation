import util from "./util.jsx";
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
        let e = (<div class="app-preview-wrapper">
            <div class="app-preview-border">
                <div class="app-preview-preview">
                    <div class="app-preview-image-wrapper">
                        <img src={src} class="app-preview-image" />
                    </div>
                    Presentation preview
                </div>
                <div class="app-preview-button-display-mask">
                    <div class="app-preview-button-wrapper">
                        <div class="app-interface-button" app-action="open">
                            <span>
                                OPEN
                            </span>
                        </div>
                        <hr class="app-transparent" />
                        <div class="app-interface-button" app-action="edit">
                            <span>
                                EDIT
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
    render() {
        //do stuff to make preview;
    }
}