import { connect } from "react-redux";

const Question = (props) => {

  const {
    id,
    timestamp,
    author,
    optionOne,
    optionTwo
  } = props.question;

  return (
      <div className="question-list">
        <div>
          <img src="../../user.png" className="avatar"/>
          <span>{typeof props.question}</span>
        </div>
      </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question =  questions[id];

  return {
    authedUser,
    question: question,
  };
};

export default connect(mapStateToProps)(Question);