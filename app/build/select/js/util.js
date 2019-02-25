const _JSX = {attribute(el, name, val) {if (val.constructor == Object) {for (let k in val) {el[name][k] = val[k];}return;}el.setAttribute(name, val);},append(el, child) {if (child.constructor == Array) return item.forEach((i) => _JSX.append(el, i));if (child.nodeType || child.textContent) {el.appendChild(item);} else {el.appendChild(document.createTextNode(child.toString()));}}};
/*end of jsx code*/
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
        request.then((data) => { console.log(data); return data; })
        if (typeof cb == "function") {
            request.then(cb);
        }
        return request;
    }
}