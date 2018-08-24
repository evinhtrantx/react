'use strict';
import React,{Component} from 'react';
class ClickComponent extends Component{
    constructor(pros){
        super(pros)
        this.alert = this.alert.bind(this);
    }
    alert(){
        window.alert('test');
    }
    render(){
        return (
            <div onClick={this.alert} id="clickComponentSpace">
                click component
             </div>
        )
    }
}
export default ClickComponent;