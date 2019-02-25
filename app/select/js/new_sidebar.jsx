export default function (app) {
    let elements = (
        <div class="app-new-sidebar-menu">
            <div class="app-interface-button" app-action="create_new">
                <span>
                    Create
                </span>
            </div>
            <input id="app-new-name" placeholder="Name" />
            <textarea id="app-new-description" placeholder="Description" />
        </div>
    );
    app.register_button(elements.children[0]);


    return elements;
}