import React from 'react';

module.exports = class MainMenuButton extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        let cornerButtonsStyle = {display:"block"}

        return  <div id="home" style={cornerButtonsStyle}>
                    <i className="fa fa-home" onClick={this.props.action}></i>
                </div>
        
    }
}