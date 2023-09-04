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
    const positivePercentage = Math.round(good * 100 / result);
    const options = Object.keys({good, neutral, bad})

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
       }
   
    return(
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
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





