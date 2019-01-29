/*JSX injection*/
function _JSX(parent, thing) {if(thing.constructor==Array)return thing.forEach(itm=>_JSX(parent,itm));if (thing.nodeType || thing.textContent) {parent.appendChild(thing);} else {parent.appendChild(document.createTextNode(thing.toString()));}}
/*begin user file*/
export default {
    EVENT_TYPES:{
        new:Symbol("NEW"),
        open:Symbol("OPEN"),
        delete:Symbol("DELETE")
    }
}