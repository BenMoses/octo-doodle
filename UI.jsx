import React from 'react';
import ReactDOM from 'react-dom';

module.exports = class UI extends React.Component {
    constructor(props){
        super(props);

        this.state = {mainMenu:true, cornerButtons:false};
        this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this)
    }

//////Standard React functions
    componentDidMount(){

    }

    generateMainMenu(){

    }

    
    homeButton(){
        console.log('Home')
    }

    characterButton(){
        console.log('Character')
    }

    toggleMenuVisibility(e){
        this.setState(prevState =>({
            mainMenu: !prevState.mainMenu,
            cornerButtons: !prevState.cornerButtons
            }) 
        )
    }
    
    generateUI(){
        let ui = {};
        let cornerButtonsStyle;

        if(this.state.cornerButtons == true){
            cornerButtonsStyle =    {
                                        display:"block"
                                    }
        }else{
            cornerButtonsStyle =    {
                                        display:"none"
                                    }
        }

        ui.home =   <div id="home" style={cornerButtonsStyle}>
                    <i className="fa fa-home" onClick={this.toggleMenuVisibility}></i>
                    </div>

        ui.character =   <div id="character" style={cornerButtonsStyle}>
                    <i className="fa fa-user" onClick={this.characterButton}></i>       
                    </div>
        return ui;
    }


//////Renderer
    render(){
        let mainMenu, homeButton, characterButton, mainMenuStyle;


        if(this.state.mainMenu == true){
            mainMenuStyle = {
                                display:"block",
                                backgroundColor:"black",
                                textAlign:"center"
                            }

        }else{
            mainMenuStyle = {
                                display:"none",
                                backgroundColor:"black",
                                textAlign:"center"
                            }
        }

        mainMenu =  <div className="MENU" style={mainMenuStyle}>
                        <p><b>This is your menu</b></p>
                        <p onClick={this.toggleMenuVisibility} style={{cursor:"pointer"}}>Close the menu</p>
                    </div>

        let UI = this.generateUI();

        return  <div id="UI">
                    {UI.home}
                    {UI.character}
                    {mainMenu}
                </div>
        
    }
}

