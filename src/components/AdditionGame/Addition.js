import React from 'react';
import './Addition.css'

class Addition extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            score: 0,
            response: "",
            incorrect: false
        }
    }

    render(){
        if(this.state.score < 5){
            return this.renderProblem();
        }else{
            return this.renderWin();
        }
    }

    renderProblem() {
        return(

            <div className='AdditionContainer'>
                <h1>Addition Game</h1>
                <div className='AdditionData'>
                    <h1 className={this.state.incorrect ? 'incorrect' : ""}>
                    {this.state.num1} + {this.state.num2}</h1>
                    <input className={this.state.incorrect ? 'incorrect' : ""} 
                    onKeyPress={this.keyPress} 
                    onChange={this.updateResponse} 
                    value={this.state.response} /> 
                    <div className='Score'>
                        Score: {this.state.score}
                    </div>    
                </div>
            </div>
        );
    }

    renderWin(){
        return (
            <div className='win'>
                <h1>Congartulation You Win...! </h1>
                <h1>Your score is {this.state.score}</h1>    
            </div>
        )
    }

    keyPress = (event) => {
        if(event.key === "Enter"){
            const answer = parseInt(this.state.response);
            if(answer === this.state.num1 + this.state.num2){
                this.setState(state => ({
                    score: state.score + 1,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    response: "",
                    incorrect:false
                }));
            }else{
                this.setState(state => ({
                    response: "",
                    incorrect: true
                }));
            }
        }
    }

    updateResponse = (event) => {
        this.setState({
            response : event.target.value
        })
    }

}

export default Addition;