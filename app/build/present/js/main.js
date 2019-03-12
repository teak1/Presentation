const _JSX = { attribute(e, n, v) { if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
import util from "./../../select/js/util.js";
import RenderComponents from "./parts.js";
console.log(RenderComponents);
const EVENT_TYPES = {
    back: Symbol("back"),
    "toggle-settings": Symbol("toggle-settings")
}
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
        this.timeStamp = 0;
        this.lastTime = performance.now();;
        this.startTime = performance.now();
        this.call_frame = () => { this.frame() };//a function that points to this.frame.
    }
    init() {
        this.elements = {
            body: document.body,
            app: document.getElementById("app")
        };//try to initialize;
        this.id = window.location.search.replace("?", "");
        if (this.elements.app) this.state.is_initialized = true;
        util.api("GET", { id: this.id }, (result) => {
            console.log(result);
            this.presentation = result;
            document.getElementsByTagName("title")[0].innerText = this.presentation.META.name.replace(/\\s/g, " ");
            this.init_page();
        });
    }
    init_page() {
        document.querySelector("#app-loading").classList.add("load-hidden");
        setTimeout(() => {
            let e = document.querySelector("#app-loading");
            e.parentElement.removeChild(e);
            this.elements.app.classList.add("app-visible");
            // this.elements.app.setAttribute("style", "");

            let objects = this.presentation.PRESENTATION.data.objects;
            let bgColor = this.presentation.PRESENTATION.bgColor;
            if (bgColor) document.body.setAttribute("style", "--conf-bg:" + bgColor);
            let Components = [];
            for (let i = 0; i < objects.length; i++) {
                let obj = objects[i];
                console.log(obj);
                let c = new RenderComponents[obj.type](obj);
                Components.push(c);
                document.querySelector("#app>#components").appendChild(c.element);
            }
            this.Components = Components;
        }, 1000);
    }
    button_press(type, event) {
        console.log(type, event);
        switch (type) {
            case EVENT_TYPES.back:
                history.back();
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
            let dif = performance.now();
            dif -= this.lastTime;
            this.lastTime = performance.now();
            this.timeStamp += dif;
            document.getElementById("debug").innerText = this.timeStamp;
        }
    }
}


let app = new App();
console.log(app);
export default app;