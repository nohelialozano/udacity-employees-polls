import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Question = () => {
  
  const params = useParams();
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const question =  questions[params.id];
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [totalA, setTotalA] = useState(0);
  const [totalB, setTotalB] = useState(0);
  const navigate = useNavigate();

  const answer = (e, answer) => {
    e.preventDefault();
  
    dispatch(
      handleSaveQuestionAnswer({
        authedUser,
        qid: params.id,
        answer
      })
    );

    setDisabled(true);
    navigate("/");

  };

  useEffect(() => {
    if (question && (question.optionOne.votes.includes(authedUser) == true || question.optionTwo.votes.includes(authedUser) == true)){
      setDisabled(true);
      setTotalA(Math.trunc((question.optionOne.votes.length * 100) / (question.optionOne.votes.length + question.optionTwo.votes.length)));
      setTotalB(Math.trunc((question.optionTwo.votes.length * 100) / (question.optionOne.votes.length + question.optionTwo.votes.length)));
    }else{
      setDisabled(false);
    }
  }, []);

  if (question === undefined){
    return <NotFound />;
  }

  const {
    author,
    optionOne,
    optionTwo
  } = question;

  return (
      <div className="question-detail">
        <p className="center bold">Poll by {author}</p>
        <img src="../../user.png" className="avatar"/>
        <p className="center bold">Would You Rather</p>
        <div className="options">
          <div className="option">
            <span>{optionOne.text}</span>
          </div>
          <div className="option">
            <span>{optionTwo.text}</span>
          </div>
          
          <button disabled={disabled} className={question.optionOne.votes.includes(authedUser) ? "button-option selected" : "button-option"} onClick={(e) => answer(e, "optionOne")}>
            Click
          </button>
          <button disabled={disabled} className={question.optionTwo.votes.includes(authedUser) ? "button-option selected" : "button-option"} onClick={(e) => answer(e, "optionTwo")}>
            Click
          </button>

          {disabled === true && question.optionOne.votes.includes(authedUser) ? <div><p>{question.optionOne.votes.length} people voted for option A</p><p>{totalA}% of people voted this option</p></div> : null}
          {disabled === true && question.optionTwo.votes.includes(authedUser) ? <div><p>{question.optionTwo.votes.length} people voted for option B</p><p>{totalB}% of people voted this option</p></div> : null}
        </div>
      </div>
  );
};

export default Question;