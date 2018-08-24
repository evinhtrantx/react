import React, { Component } from "react";
import MenuButton from './MenuButton.js';
import Menu from './Menu.js';

class MenuContainer extends Component {
    constructor(props,context){
        super(props,context);
        this.state ={
                visible:false
            }
        this.toogleMenu = this.toogleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }
    toogleMenu(){
        this.setState({visible: !this.state.visible})
    }
    handleMouseDown(evt){
        this.toogleMenu();
        evt.stopPropagation();
    }
    hideMenu(){
        this.setState({visible:false})
    }
  render() {
    return (
        <div id="menuContainer" onMouseDown={this.hideMenu}>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
                  menuVisibility={this.state.visible}/>
         </div>
        );
  }
}

export default MenuContainer;