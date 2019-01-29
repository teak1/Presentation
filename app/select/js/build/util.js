/*JSX injection*/
function _JSX(parent, thing) {if(thing.constructor==Array)return thing.forEach(itm=>_JSX(parent,itm));if (thing.nodeType || thing.textContent) {parent.appendChild(thing);} else {parent.appendChild(document.createTextNode(thing.toString()));}}
/*begin user file*/
export default {
    make(template) {
        let parts = template.split(/[#.]/);
        let type = parts[0];
        let id = template.split(/#/)[1] ? parts[1] : null;
        let classes = id && parts.shift() && parts.shift() ? parts : null;
        let elt = document.createElement(type);
        id && elt.setAttribute("id", id);
        classes && elt.setAttribute("class", classes.join(" "));
        return elt;
    },
    api(type, args, cb) {
        console.log(`fetching api url: ${`/api/${type}/?${JSON.stringify(args)}`}`);
        let request = fetch(`/api/?${JSON.stringify({ ...args, ...{ "api-route": type } })}`).then(data => data.json());
        if (typeof cb == "function") {
            request.then(cb);
        }
        return request;
    }
}