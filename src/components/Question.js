import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, redirect } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/questions";
import NotFound from "./NotFound";

const Question = () => {
  
  const params = useParams();
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const question =  questions[params.id];
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

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

  };

  useEffect(() => {
    if (question.optionOne.votes.includes(authedUser) == true || question.optionTwo.votes.includes(authedUser) == true){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
  }, []);

  if (question === undefined){
    //console.log("Question doesn't exist...");
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
        </div>
      </div>
  );
};

export default Question;