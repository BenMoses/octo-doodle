import React from 'react';
import ReactDOM from 'react-dom';
import StoryModule from './src/story.js';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.story = StoryModule;
        
        
        this.state = {i: 0, currentStory : this.story[0]};
        this.handleClick = this.handleClick.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

//////Standard React functions
    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.setState(prevState =>({
            i: 0,
            currentStory: this.story[0]
        }))
    }
      
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }


//////App logic
    backgroundStyle(){
        return {
            backgroundImage : "url(./src/images/"+this.state.currentStory.location+")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 80%",
            backgroundSize: "cover"
        }
    }

    calculateCharacterPosition(){
        let ratio = window.innerHeight * 0.7 / 1120;
        let width = 800 * ratio;
        return width;
    }

    leftCharacterStyle(){
        return {
            position: 'absolute',
            height: window.innerHeight * 0.7,
            top: window.innerHeight * 0.3,
            left: 0

        }
    }

    rightCharacterStyle(){

        return {
            position: 'absolute',
            height: window.innerHeight * 0.7,
            transform: 'scaleX(-1)',
            top: window.innerHeight * 0.3,
            left: window.innerWidth - this.calculateCharacterPosition()
        }
    }
    
    updateWindowDimensions() {
        this.setState({});
    }

    handleClick(e){
        this.setState(prevState =>({

            i: prevState.i +1,
            currentStory: this.story[prevState.i+1]
        }))
    }

    generateComments(){
        let comments = {left: {}, right: {}, monologue: {}};
        let current = this.state.currentStory;
        let xOffset = (this.calculateCharacterPosition()/2)
        let yOffset = (window.innerHeight * 0.7) *0.8;
        if(current.leftComment != '' && current.leftComment != null && current.leftComment != undefined){
            comments.left = 
            <div className="leftComment" style={{backgroundColor: this.state.currentStory.leftEmotion, borderColor: this.state.currentStory.leftEmotion, left: xOffset, bottom: yOffset}}>
                <p>
                {this.state.currentStory.leftComment}
                </p>
            </div>
            
        }

        if(current.rightComment != '' && current.rightComment != null && current.rightComment != undefined){
            comments.right = 
            <div className="rightComment" style={{backgroundColor: this.state.currentStory.rightEmotion, borderColor: this.state.currentStory.rightEmotion, right: xOffset, bottom: yOffset}}>
                <p>
                {this.state.currentStory.rightComment}
                </p>
            </div>
        }

        if(current.monologue != '' && current.monologue != null && current.monologue != undefined){
            comments.monologue = 
            <div className="monologue">
                <p>
                {this.state.currentStory.monologue}
                </p>
            </div>
        }

        return comments
    }


//////Renderer
    render(){
        let left, right, leftComments, rightComments, monologue;
        let current = this.state.currentStory;
        if(current.leftCharacter != '' && current.leftCharacter != null && current.leftCharacter != undefined){
            left =  <img id="leftCharacter"
                    src={'./src/images/'+this.state.currentStory.leftCharacter+'.png'}
                    style= {this.leftCharacterStyle()}
                    />
        }

        
        if(current.rightCharacter != '' && current.rightCharacter != null && current.rightCharacter != undefined){
            right =  <img id="rightCharacter"
                    src={'./src/images/'+this.state.currentStory.rightCharacter+'.png'}
                    style= {this.rightCharacterStyle()}
                    />
        }

        let comments = this.generateComments();
        if(current.leftComment != '' && current.leftComment != null && current.leftComment != undefined){
            leftComments = comments.left;
        }
        if(current.rightComment != '' && current.rightComment != null && current.rightComment != undefined){
            rightComments = comments.right;
        }
        if(current.monologue != '' && current.monologue != null && current.monologue != undefined){
            monologue = comments.monologue;
        }

        return  <div id="container"
                onClick = {this.handleClick}>
                    <div id = 'game'
                        style= {this.backgroundStyle()}
                    />
                    {left}
                    {right}
                    {leftComments}
                    {rightComments}
                    {monologue}
                </div>
        
    }
}



ReactDOM.render(<Game />,document.getElementById('app'))