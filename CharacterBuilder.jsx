import React from 'react';

module.exports = class CharacterBuilder extends React.Component {
    constructor(props){
        super(props);

        this.state={};
    }
    

//////Renderer
    render(){
        let mainMenuStyle = {
            display:"block",
            backgroundColor:"#edb17f",
            textAlign:"center"
        }



        return  <div className="MENU" style={mainMenuStyle}>
                    <p><b>This is your character creation page</b></p>
                    <p onClick={this.props.action} style={{cursor:"pointer"}}>Close the menu</p>
                </div>
        
    }
}

