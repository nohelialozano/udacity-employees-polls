import { connect } from "react-redux";
import { useState } from "react";
import QuestionList from "./QuestionList";

const Dashboard = (props) => {

  const [isToggle, setIsToggle] = useState(true);

  const toggleChange = ()=>{
    setIsToggle(!isToggle)
  }

  return (
    <div>
        <div>
            <input
                type="radio"
                value={true}
                name="toggle"
                checked={isToggle}
                onChange={toggleChange}
            />
            <label>New Questions </label>
            <input
                type="radio"
                value={false}
                name="toggle"
                onChange={toggleChange}
            />
            <label>Done </label>
        </div>

        {
            isToggle ? (<div className="section margin-top">
                <h3 className="center">New Questions</h3>
                <ul className="section-list">
                    {props.newQuestions.map((id) => (
                        <li key={id}>
                            <QuestionList id={id}/>
                        </li>
                    ))}
                </ul>
            </div>):
            (<div className="section margin-top">
                <h3 className="center">Done</h3>
                <ul className="section-list">
                    {props.doneQuestions.map((id) => (
                        <li key={id}>
                            <QuestionList id={id}/>
                        </li>
                    ))}
                </ul>
            </div>)
        }
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {

  let newQuestions = []; 
  let doneQuestions = []; 

  for (const question in questions){
    if (questions[question].optionOne.votes.includes(authedUser) || questions[question].optionTwo.votes.includes(authedUser)){
        doneQuestions = [...doneQuestions, questions[question].id]
    }else{
        newQuestions = [...newQuestions, questions[question].id]
    }
  }

  return {
    newQuestions: newQuestions.sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    doneQuestions: doneQuestions.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
};

export default connect(mapStateToProps)(Dashboard);