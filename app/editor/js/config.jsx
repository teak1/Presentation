function createInput(option) {
    return (<input type={option.type} value={option.value}></input>);
}
function createOptionsInputs(options) {
    return (
        <span>
            {options.inputs.map(createInput)}
        </span>
    );
}
function createSettingDom(setting) {
    return (<div>
        <label>{setting.name || "ERR"}</label>
        {createOptionsInputs(setting)}
    </div>);
}
class Config {
    constructor({ settings, options, }) {
        this.settings = settings;
        this.options = options;
        this.renderSettings();
    }
    renderSettings() {
        this.element = (
            <div>
                {Object.keys(this.settings).map(name => {
                    let setting = this.settings[name];
                    return createSettingDom(setting);
                })}
            </div>
        )
    }
}
export default Config;