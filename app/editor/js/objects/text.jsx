import config from "./../config.jsx";
import hiarchy from "./../HiarchyObject.jsx";
class Text {
    constructor() {
        this.element = (<div></div>);
        this.hiarchyObject = new hiarchy.Object({ name: "new text" });
        this.config = new config({
            settings: [
                { name: "text", inputs: [{ type: "text", value: "text" }] },
                { name: "text-color", inputs: [{ type: "color", value: "black" }] },
                { name: "transform", inputs: [{ type: "number", value: "0" }, { type: "number", value: "0" }, { type: "number", value: "0" }] },
                { name: "background-color", inputs: [{ "type": "color", "value": "transparent" }] }
            ], options: {}
        });
    }
}
export default Text;