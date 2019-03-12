
import hiarchy from "./HiarchyObject.jsx";
function makeButton(path, cb) {
    let element = (<div class="app-button-static" app-action={cb}>
        <img src={path} width="50" height="50" ></img>
    </div>);
    app.register_button(element);
    return element;
}

export default {
    headbar(presentation) {
        return (
            <div>
                <div class="app-header">
                    {
                        makeButton("/assets/ico/png/back.png", "back")
                    }
                    <div class="app-title-wrapper">
                        <strong>{presentation.META.name.replace(/\\s/g, " ")}</strong>
                    </div>
                    {
                        makeButton("/assets/ico/png/settings.png", "toggle-settings")
                    }
                </div>
                <div class="app-content">
                    <div class="hiarchy">
                        {new hiarchy.Folder("test", [new hiarchy.Folder("world").element, new hiarchy.Folder("bbbb", [new hiarchy.Object({}).element]).element]).element}
                    </div>
                    <div class="object-select">
                    </div>
                    <div class="timeline">
                    </div>
                    <div class="properties">
                    </div>
                    <div class="preview"></div>
                </div>
            </div>

        );
    }
}
/*
* attribution <div>Icons made by <a href="https://www.flaticon.com/packs/multimedia-collection" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/