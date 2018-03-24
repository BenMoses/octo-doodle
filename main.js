import React from 'react';
import ReactDOM from 'react-dom';
import StoryModule from './src/story.js';

//import Menu from './menu.jsx';
//import Settings from './settings.jsx';
//import CharacterCreation from './CharacterCreation.jsx';
import CharacterBuilder from './CharacterBuilder.jsx';
import CharacterButton from './CharacterButton.jsx';
import MainMenu from './MainMenu.jsx';
import Settings from './Settings.jsx';
import MainMenuButton from './MainMenuButton.jsx';
import Game from './game.jsx';


class Container extends React.Component{
    constructor(props){
        super(props);


        this.state = {storyline: StoryModule, gameInit: true, characterCreator:false, mainMenu:true, settings:false};

        this.openCharacterCreator = this.openCharacterCreator.bind(this);
        this.closeCharacterCreator = this.closeCharacterCreator.bind(this);
        this.openMainMenu = this.openMainMenu.bind(this);
        this.closeMainMenu = this.closeMainMenu.bind(this);
        this.openSettings = this.openSettings.bind(this);
        this.closeSettings = this.closeSettings.bind(this);
    }
    
    openCharacterCreator(){
        this.setState({
            characterCreator: true,
        })
    }    
    closeCharacterCreator(){
        this.setState({
            characterCreator: false
        })
    }

    
    openMainMenu(){
        this.setState({
            mainMenu: true
        })
    }    
    closeMainMenu(){
        this.setState({
            mainMenu: false
        })
    }

    openSettings(){
        this.setState({
            settings: true
        })
    }

    closeSettings(){
        this.setState({
            settings:false
        })
    }

    render(){

        return  <div id="container">
            {/* Game:    */}
                    {this.state.gameInit ? <Game storyline={this.state.storyline}/> : null}
                    

            {/* Corner buttons    */}
                    {this.state.characterCreator ? null : <CharacterButton action={this.openCharacterCreator}/>}
                    {this.state.mainMenu ? null : <MainMenuButton action={this.openMainMenu}/>}
                    
            {/* Main Menu:    */}
                    {this.state.mainMenu ? <MainMenu openSettings={this.openSettings} openCharacterCreator={this.openCharacterCreator} closeMenu={this.closeMainMenu}/> : null}

            {/* Character Creator:    */}
                    {this.state.characterCreator ? <CharacterBuilder action={this.closeCharacterCreator}/> : null}
            
            
            {/* Settings:    */}
                    {this.state.settings ? <Settings close={this.closeSettings}/> : null}


                </div>
    }
}

ReactDOM.render(<Container />,document.querySelector('#app'))