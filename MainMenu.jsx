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
            background:"radial-gradient(at 50% 50%,#edb17f,#edb17f)",
            textAlign:"center"
        }

        return  <div className="MENU" style={mainMenuStyle}>
                    <h3 onClick={this.props.closeMenu} style={{cursor:"pointer"}}>Rejoin Game</h3>
                    <h3 onClick={this.props.openCharacterCreator} style={{cursor:"pointer"}}>Character Creation</h3>
                    <h3 onClick={this.props.openSettings} style={{cursor:"pointer"}}>Settings</h3>
                    <h3 onClick={e =>{alert('I told you it wouldn\'t work, You cannot leave!')}} style={{cursor:"pointer", fontSize:"13px"}}>Close App (won't work on browsers)</h3>
                </div>
    }
}



