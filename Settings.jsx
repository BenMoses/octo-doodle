import React from 'react';

module.exports = class Settings extends React.Component {
    constructor(props){
        super(props);

        this.state={};
    }
    

//////Renderer
    render(){
        let settingsStyle = {
            display:"block",
            backgroundColor:"black",
            textAlign:"center"
        }



        return  <div className="MENU" style={settingsStyle}>
                    <p><b>This is your settings page</b></p>
                    <p >Change volume:</p>
                    <p >Credits</p>
                    <p onClick={this.props.close} style={{cursor:"pointer"}}>Back</p>
                </div>
        
    }
}

