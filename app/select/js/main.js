import presentation_preview from './presentation_preview.js';
import util from './../../util.js';
import ENUMS from "./../../enums.js";
const {EVENT_TYPES} = ENUMS;
class App{
    constructor(){
        this.self=this;
        this.state = {
            is_started:false,//is the app started, used so that this.start() is not called more than once.
            is_initialized:false,//is the app initialized, is set to true once dom can be loaded.
            DOM:{
                loaded:false,//is the dom loaded.
            }
        };
        this.elements = {
            body:document.body,
            app:document.getElementById("app"),
            buttons:[...document.querySelectorAll(`div[app-action]`)]
        };
        this.previews = [];
        this.call_frame=()=>{this.frame()};//a function that points to this.frame.
        
        util.api("PRESENTATIONS",{
            id:"aaaa-aaaaaaaa-aaaa-aaaa"
        },console.log);
    }
    add_preview(prev_src){
        let preview = null;
        this.previews.push(preview = new presentation_preview(prev_src));
        document.querySelector(".app-preview-region").appendChild(preview.element);
    }
    init(){
        this.elements = {
            body:document.body,
            app:document.getElementById("app"),
            buttons:[...document.querySelectorAll(`div[app-action]`)]
        };//try to initialize;
        this.elements.buttons.forEach(btn=>{
            btn.addEventListener("mousedown",event=>this.button_press(EVENT_TYPES[btn.getAttribute("app-action")],event));

        });
        if(this.elements.app)this.state.is_initialized=true;
    }
    button_press(type,event){
        console.log(type,event);
        switch(type){
            case EVENT_TYPES.new:
                alert("new");
            break;
        }
    }
    start(){
        if(this.state.is_started)throw new Error("app already started");
        this.frame();
        //tell the world that the app has started;
        console.log("%capp started","color:gold;background-color:gray");
    }
    frame(){
        requestAnimationFrame(this.call_frame);
        if(!this.state.is_initialized&&document.body){
            this.init();//if dom is loaded and the app is not initialized then initialize.
            return null;
        }else if(!this.state.is_initialized){
            return null;//if dom is not loaded and the app is not initialized then do not run app functions.
        }else{
            //all is good, run app functions.
        }
    }
}


let app = new App();
export default app;


//temp to add content for githubio
setTimeout(()=>{
for(var i = 0;i<10;i++){
    app.add_preview("about:blank");
}
},2000);
