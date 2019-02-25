import util from "./../../select/js/util.jsx";
import html_parts from "./page.jsx";
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

        this.call_frame = () => { this.frame() };//a function that points to this.frame.
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
        this.id = window.location.search.replace("?", "");
        if (this.elements.app) this.state.is_initialized = true;
        util.api("GET", { id: this.id }, (result) => {
            console.log(result);
            this.presentation = result;
            this.init_page();
        });
    }
    init_page() {
        if (this.elements.body) {
            this.elements.body.appendChild(html_parts.headbar(this.presentation));
        } else {
            setTimeout(_ => this.init(), 100);
        }
    }
    button_press(type, event) {
        console.log(type, event);
        switch (type) {
            case EVENT_TYPES.new:
                this.elements.new_parent.appendChild(new_sidebar(this));
                document.querySelector(".app-new-button-wrapper").classList.add("app-new-button-vanish");
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
        element.addEventListener("mousedown", event => this.button_press(EVENT_TYPES[element.getAttribute("app-action")], event));
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