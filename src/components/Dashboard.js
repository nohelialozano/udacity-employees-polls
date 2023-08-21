import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const Dashboard = (props) => {
  return (
    <div>
        <div className="section">
            <h3 className="center">New Questions</h3>
            <ul className="section-list">
                {props.newQuestions.map((id) => (
                    <li key={id}>
                        <QuestionList id={id}/>
                    </li>
                ))}
            </ul>
        </div>
        <div className="section margin-top">
            <h3 className="center">Done</h3>
            <ul className="section-list">
                {props.doneQuestions.map((id) => (
                    <li key={id}>
                        <QuestionList id={id}/>
                    </li>
                ))}
            </ul>
        </div>
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
    newQuestions,
    doneQuestions
  };
};

export default connect(mapStateToProps)(Dashboard);