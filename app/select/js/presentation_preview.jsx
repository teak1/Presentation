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
        if (data.META && data.META.name && data.META.description && data.META.type === "METADATA") {
            this.data = data.META;
            this.data.query = data.query;
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
                    <h1 class="app-preview-text">{this.data.name}</h1>
                </div>
                <div class="app-preview-button-display-mask">
                    <div class="app-preview-button-wrapper">
                        <div class="app-interface-button" app-action="open" target-presentation={this.data.query.id}>
                            <span>
                                OPEN
                            </span>
                        </div>
                        <hr class="app-transparent" />
                        <div class="app-interface-button" app-action="edit" target-presentation={this.data.query.id}>
                            <span>
                                EDIT
                            </span>
                        </div>
                        <hr class="app-transparent" />
                        <div class="app-interface-button" app-action="delete" target-presentation={this.data.query.id} style="--offset:40px;">
                            <span>
                                DELETE
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
        [...e.querySelectorAll(".app-interface-button")].forEach(el => app.register_button(el));

        return e;
    }
}