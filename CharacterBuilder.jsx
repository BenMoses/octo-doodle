import React from 'react';

module.exports = class CharacterBuilder extends React.Component {
    constructor(props){
        super(props);

        this.state={};
    }
    

//////Renderer
    render(){
        let mainMenuStyle;

        if(this.props.visible == true){
            mainMenuStyle = {
                                display:"block",
                                backgroundColor:"green",
                                textAlign:"center"
                            }

        }else{
            mainMenuStyle = {
                                display:"none",
                                backgroundColor:"green",
                                textAlign:"center"
                            }
        }


        return  <div className="MENU" style={mainMenuStyle}>
                    <p><b>This is your character creation page</b></p>
                    <p onClick={this.props.action}>Close the menu</p>
                </div>
        
    }
}

