import React from 'react';


module.exports = class MainMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        let mainMenuStyle;
        
        mainMenuStyle = {
            display:"block",
            backgroundColor:"black",
            textAlign:"center"
        }

        return  <div className="MENU" style={mainMenuStyle}>
                    <p><b>This is your menu</b></p>
                    <p onClick={this.props.action} style={{cursor:"pointer"}}>Close the menu</p>
                </div>
    }
}



