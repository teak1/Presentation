const _JSX = { attribute(e, n, v) { if (!v) return; if (v.constructor == Object) { for (let k in v) e[n][k] = v[k]; return; } e.setAttribute(n, v); }, append(e, c) { if (c == undefined) return; if (c.constructor == Array) return c.forEach((i) => _JSX.append(e, i)); if (c.nodeType || c.textContent) return e.appendChild(c); e.appendChild(document.createTextNode(c.toString())); } };
/*end of jsx code*/
import ALL from "./select/js/main.js";
import ALL from "./present/js/main.js";
import ALL from "./editor/js/main.js";