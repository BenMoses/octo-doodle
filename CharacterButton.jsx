import React from 'react';

module.exports = class CharacterButton extends React.Component {
    constructor(props){
        super(props);

        this.state={};
    }
    

//////Renderer
    render(){
        let cornerButtonsStyle;

        if(this.props.visible == true){
            cornerButtonsStyle =    {
                                        display:"block"
                                    }
        }else{
            cornerButtonsStyle =    {
                                        display:"none"
                                    }
        }


        return  <div id="character" style={cornerButtonsStyle}>
                    <i className="fa fa-user" onClick={this.props.action}></i>       
                </div>
        
    }
}

