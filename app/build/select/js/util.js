const _JSX = { attribute(e, n, v) { if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
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