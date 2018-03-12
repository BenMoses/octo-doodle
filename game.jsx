import React from 'react';
import ReactDOM from 'react-dom';
import StoryModule from './src/story.js';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.story = StoryModule;
        
        
        this.state = {i: 0, currentStory : this.story[0]};
        this.handleClick = this.handleClick.bind(this);
    }

    backgroundStyle(){
        return {
        backgroundImage : "url(./src/images/"+this.state.currentStory.location+")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 80%",
        backgroundSize: "cover"
        }
    }

    leftCharacterStyle(){
        return {

        }
    }

    componentDidMount(){
        this.setState(prevState =>({
            i: 0,
            currentStory: this.story[0]
        }))
    }

    handleClick(e){
        this.setState(prevState =>({

            i: prevState.i +1,
            currentStory: this.story[prevState.i+1]
        }))
    }

    render(){
        return <div id="container">
        <div id = 'game'
        onClick = {this.handleClick}
        style= {this.backgroundStyle()}
        />
        <img id="leftCharacter"
        />
        <img id="rightCharacter"
        />
        </div>
        
    }
}



ReactDOM.render(<Game />,document.getElementById('app'))