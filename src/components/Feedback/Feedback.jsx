import { Component } from "react"

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    } 
    
    // handleClickGood = () => 
    //     this.setState((prevState) => ({ good: prevState.good +=1}))     

    // handleClickNeutral = () => 
    //     this.setState((prevState) => ({ neutral: prevState.neutral +=1}))    

    // handleClickBad = () => 
    //     this.setState((prevState) =>({ bad: prevState.bad +=1}))


        onLeaveFeedback = (e) =>{
            const name = e.target.name;
            this.setState((prevState) => ({ [name]: prevState[name] + 1}));
         }

        countTotalFeedback = () => {
            const { good, neutral, bad } = this.state;
            const result = good + neutral + bad;
            return result;
        }
        
        countPositiveFeedbackPercentage = () => {
            const { good, neutral, bad } = this.state;
            const result = good + neutral + bad;
            const percentGood =  good * 100 / result;
            return Math.round(percentGood);
        }

    render(){
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const propertyNames = Object.getOwnPropertyNames(this.state);
        const values = Object.values(this.state);
        
        return(
        <div>
            <h1>Please leave feedback</h1>
            <div>
                <button name='good' onClick={this.onLeaveFeedback}>Good</button>
                <button name='neutral' onClick={this.onLeaveFeedback}>Neutral</button>
                <button name='bad' onClick={this.onLeaveFeedback}>Bad</button>
            </div>
            <h2>Statistics</h2>
            {total === 0 ? <p>There is no feedback</p>: 
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive Feedback: { positivePercentage }%</li>
            </ul>
            }
        </div>
        
     ) }
}