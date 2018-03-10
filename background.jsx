import React from 'react';
import ReactDOM from 'react-dom';
import StoryModule from './src/story.js';

class Background extends React.Component {
    constructor(props){
        super(props);
        this.story = StoryModule;
        
        
        this.state = {i: 0, currentStory : this.story[0]};
        this.handleClick = this.handleClick.bind(this);
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
        return <img onClick={this.handleClick}
        src = {'./src/images/'+this.state.currentStory.location}
        position ='absolute'
        left ='0'
        top ='0'
        width = '100%'
        height = '100%'
        margin = '0'
        padding = '0'
        overflow = 'hidden'
        object-fit = 'cover'
        />
    }
}

ReactDOM.render(<Background />,document.getElementById('background'))