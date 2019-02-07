export default function (app) {
    let elements = (
        <div class="app-new-sidebar-menu">
            <input id="app-new-name" placeholder="Name" />
            <div class="app-interface-button" app-action="create_new">
                <span>
                    Create
                </span>
            </div>
        </div>
    );
    app.register_button(elements.children[1]);


    return elements;
}