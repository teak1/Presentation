const _JSX = { attribute(e, n, v) { if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
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
            buttons: [...document.querySelectorAll(`div[app-action]`)],
            new_parent: document.querySelector(".app-new-interface-parent")
        };
        this.previews = [];
        this.call_frame = () => { this.frame() };//a function that points to this.frame.
        this.to_load = 0;
        this.loaded = 0;
        util.api("PRESENTATIONS", {}, (data) => { this.to_load++; data.items.forEach(_ => { this.add_preview(_); }) });
        if (this.to_load == 0) {
            document.getElementById("app-loading").setAttribute("style", "opacity:0;transition:1s;");
            setTimeout(() => {
                document.getElementById("app").setAttribute("style", "opacity:1;transition:1s;");
            }, 1000);
        }
    }
    add_preview(prev_id) {
        let preview = null;
        this.previews.push(preview = new presentation_preview(prev_id, element => {
            this.loaded++; document.querySelector(".app-preview-region").appendChild(element);
            if (this.to_load == this.loaded) {
                document.getElementById("app-loading").setAttribute("style", "opacity:0;transition:1s;");
                setTimeout(() => {
                    document.getElementById("app").setAttribute("style", "opacity:1;transition:1s;");
                }, 1000);
            }
        }, this));
    }
    init() {
        this.elements = {
            body: document.body,
            app: document.getElementById("app"),
            buttons: [...document.querySelectorAll(`div[app-action]`)],
            new_parent: document.querySelector(".app-new-interface-parent")
        };//try to initialize;
        this.elements.buttons.forEach(btn => {
            this.register_button(btn);

        });
        if (this.elements.app) this.state.is_initialized = true;
    }
    button_press(type, event) {
        console.log(type, event);
        let id = "";
        switch (type) {
            case EVENT_TYPES.new:
                this.elements.new_parent.appendChild(new_sidebar(this));
                document.querySelector(".app-new-button-wrapper").classList.add("app-new-button-vanish");
                break;
            case EVENT_TYPES.edit:
                id = event.currentTarget.getAttribute("target-presentation");
                history.pushState({}, "Presentations", window.location.href);
                window.location.replace(window.location.href + "edit?" + id);
                break;
            case EVENT_TYPES.create_new:
                let name = document.querySelector("#app-new-name").value.replace(/\s/g, "\\s");
                let desc = document.querySelector("#app-new-description").value.replace(/\s/g, "\\s");
                if (name.trim() != "") {
                    util.api("MAKE_NEW", { name, desc }, res => {
                        history.pushState({}, "Presentations", window.location.href);
                        window.location.replace(window.location.href + "edit?" + res.id);
                    });
                }
                break;
            case EVENT_TYPES.open:
                id = event.currentTarget.getAttribute("target-presentation");
                history.pushState({}, "Presentations", window.location.href);
                window.location.replace(window.location.href + "present?" + id);
                break;
            case EVENT_TYPES.delete:
                id = event.currentTarget.getAttribute("target-presentation");
                util.api("DELETE", { id }, function () { window.location.reload() });
                break;
            default:
                console.log("--Unhandled button event--");
                console.log(type);
                console.log(event);
                console.log("--------------------------");
                break;
        }
    }
    register_button(element) {
        element.addEventListener("mousedown", event => {
            this.button_press(EVENT_TYPES[element.getAttribute("app-action")], event);
        });
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