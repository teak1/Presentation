import util from './../../util.js';
export default class presentation_preview{
    constructor(id){
        this.element = util.make(`div#${id}.presentation-preview-container`);
        this.id=id;
        this.data = null;
        util.api("METADATA",{id})
        .then(data=>this.setData(data));
    }
    setData(data){
        if(data.name&&data.description&&data.type==="METADATA"){
            this.data=data;
            this.render();
        }else{
            throw new Error("unexpected data format for preview");
        }
    }
    render(){
        //do stuff to make preview;
    }
}