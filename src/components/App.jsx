import { useState } from "react"
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const  App = () =>{
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const result = good + neutral + bad;
    const positivePercentage = Math.round(good * 100 / result)

    // const countTotalFeedback = () => {
    //     // const { good, neutral, bad } = this.state;
    //     const result = good + neutral + bad;
    //     return result;
    // }

    const onLeaveFeedback = (evt) =>{
        const {name} = evt.target;
        
        switch(name){
            case 'good':
                setGood(prevState => prevState + 1);
                break;
                case 'neutral':
                    setNeutral(prevState => prevState + 1) ;
                    break;
                    case 'bad':
                        setBad(prevState => prevState + 1)
                        break;

                        default:
                            return;


        }

        // this.setState((prevState) => ({ [option]: prevState[option] + 1}));
     }

    //  const countPositiveFeedbackPercentage = () => {
    //     // const { good, neutral, bad } = this.state;
    //     const result = good + neutral + bad;
    //     const percentGood =  good * 100 / result;
    //     return Math.round(percentGood);
    // }


    return(
        <div>
        <Section title="Please leave feedback">
            <FeedbackOptions options={[ good, neutral, bad ]} onLeaveFeedback={onLeaveFeedback}/>
          </Section>  
                  
          {result === 0 ?(
          <Notification message="There is no feedback "/>) : (
            <Section title="Statistics">
              <Statistics good={good} neutral={neutral} bad={bad} total={result} positivePercentage={positivePercentage}/>
              </Section>
     ) }

</div>
    )
}







// import { Component } from "react"
// import { Statistics } from "./Statistics/Statistics";
// import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
// import { Section } from "./Section/Section";
// import { Notification } from "./Notification/Notification";

// export class App extends Component {          
//     state = {
//       good: 0,
//       neutral: 0,
//       bad: 0
//     }   

//       onLeaveFeedback = (evt) =>{
//           const option = evt.target.name;
//           this.setState((prevState) => ({ [option]: prevState[option] + 1}));
//        }

//       countTotalFeedback = () => {
//           const { good, neutral, bad } = this.state;
//           const result = good + neutral + bad;
//           return result;
//       }
      
//       countPositiveFeedbackPercentage = () => {
//           const { good, neutral, bad } = this.state;
//           const result = good + neutral + bad;
//           const percentGood =  good * 100 / result;
//           return Math.round(percentGood);
//       }

//   render(){
//       const { good, neutral, bad } = this.state;
//       const total = this.countTotalFeedback();
//       const positivePercentage = this.countPositiveFeedbackPercentage();
//       const propertyNames = Object.getOwnPropertyNames(this.state);
//       const onLeaveFeedback = this.onLeaveFeedback;
            
//       return(
//       <div>
//           <Section title="Please leave feedback">
//             <FeedbackOptions options={propertyNames} onLeaveFeedback={onLeaveFeedback}/>
//           </Section>
          
//           {total === 0 ?
//           <Notification message="There is no feedback "/> :
//           <Section title="Statistics">
//               <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
//            </Section>
//           }
//       </div>      
//    )}    
// };