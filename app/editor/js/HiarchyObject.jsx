class Folder {
    constructor(name, children) {
        this.name = name;
        this.button0;
        this.button1;
        this.button2;
        this.element = (<div class="hiarchy-folder hiarchy-object">
            <div class="app-hidexoverflow">
                {this.button0 = this.createButton("↓", () => this.toggleChildVisible())}
                {this.button1 = this.createButton("X", () => { console.log("remove element", this); })}
                {this.button2 = this.createButton("↕", (event) => { this.move(event) })}
                {this.name = this.createName(name)}
            </div>
            <div class="hiarchy-folder-children">
                {children}</div>
        </div>);
        this.hidden = false;
        this.name.addEventListener("blur", () => {
            this.name.innerText = this.name.innerText.replace(/[\n\r]/g, " ");
        });
    }
    createName(name) {
        return (<span class="hiarchy-folder-name" contentEditable="true">{name}</span>);
    }
    createButton(text, cb) {
        let element = (<span class="hiarchy-hide-button">{text}</span>);
        element.addEventListener("click", cb);
        return element;
    }
    toggleChildVisible(state) {
        this.hidden = !this.hidden;
        if (state != undefined) {
            this.hidden = state;
        }
        this.element.getElementsByClassName("hiarchy-folder-children")[0].hidden = this.hidden;
        if (!this.hidden) {
            // this.element.children[0].innerText = "↓";
            this.button0.innerText = "↓";
        } else {
            // this.element.children[0].innerText = "→";
            this.button0.innerText = "→";
        }
    }
}
class object {
    constructor({ name }) {
        this.name = name;
        this.element = (<div class="hiarchy-folder hiarchy-object">
            {this.createButton("X", console.log)}
            <input class="hiarchy-item-name" type="text" value={name} />
        </div>);
    }
    createButton(text, cb) {
        let element = (<div class="hiarchy-hide-button">{text}</div>);
        element.addEventListener("click", cb);
        return element;
    }
}
export default {
    Folder,
    Object: object
}