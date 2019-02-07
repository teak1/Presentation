const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/
import presentation_preview from "./presentation_preview.js";
import util from "./util.js";
import ENUMS from "./enums.js";
import new_sidebar from "./new_sidebar.js";
const { EVENT_TYPES } = ENUMS;
class App {
    constructor() {
        this.self = this;
        this.state = {
            is_started: false,//is the app started, used so that this.start() is not called more than once.
            is_initialized: false,//is the app initialized, is set to true once dom can be loaded.
            DOM: {
                loaded: false,//is the dom loaded.
            }
        };
        this.elements = {
            body: document.body,
            app: document.getElementById("app"),
            buttons: [...document.querySelectorAll(`div[app-action]`)]
        };
        this.previews = [];
        this.call_frame = () => { this.frame() };//a function that points to this.frame.

        util.api("PRESENTATIONS", {}, (data) => { data.items.forEach(_ => this.add_preview(_)); });
    }
    add_preview(prev_id) {
        let preview = null;
        this.previews.push(preview = new presentation_preview(prev_id, element => document.querySelector(".app-preview-region").appendChild(element)));
    }
    init() {
        this.elements = {
            body: document.body,
            app: document.getElementById("app"),
            buttons: [...document.querySelectorAll(`div[app-action]`)],
            new_parent: document.querySelector(".app-new-interface-parent")
        };//try to initialize;
        this.elements.buttons.forEach(btn => {
            btn.addEventListener("mousedown", event => this.button_press(EVENT_TYPES[btn.getAttribute("app-action")], event));

        });
        if (this.elements.app) this.state.is_initialized = true;
    }
    button_press(type, event) {
        console.log(type, event);
        switch (type) {
            case EVENT_TYPES.new:
                this.elements.new_parent.appendChild(new_sidebar());
                break;
        }
    }
    start() {
        if (this.state.is_started) throw new Error("app already started");
        this.frame();
        //tell the world that the app has started;
        console.log("%capp started", "color:gold;background-color:gray");
    }
    frame() {
        requestAnimationFrame(this.call_frame);
        if (!this.state.is_initialized && document.body) {
            this.init();//if dom is loaded and the app is not initialized then initialize.
            return null;
        } else if (!this.state.is_initialized) {
            return null;//if dom is not loaded and the app is not initialized then do not run app functions.
        } else {
            //all is good, run app functions.
        }
    }
}


let app = new App();
console.log(app);
export default app;

function test() {
    return ((function(){
let _0_0eb9o8z1pnu = document.createElement("div");
return _0_0eb9o8z1pnu;})())
}