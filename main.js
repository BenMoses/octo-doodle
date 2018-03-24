import React from 'react';
import ReactDOM from 'react-dom';

//import Menu from './menu.jsx';
//import Settings from './settings.jsx';
//import CharacterCreation from './CharacterCreation.jsx';
import CharacterBuilder from './CharacterBuilder.jsx';
import CharacterButton from './CharacterButton.jsx';
import UI from './UI.jsx';
import Game from './game.jsx';


class Container extends React.Component{
    constructor(props){
        super(props);


        this.state = {};
    }

    render(){

        return  <div id="container">
                    <Game />
                    <UI />
                </div>
    }
}

ReactDOM.render(<Container />,document.querySelector('#app'))