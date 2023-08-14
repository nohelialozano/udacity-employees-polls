import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const QuestionList = (props) => {

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
          <span>{author}</span>
          <div>{formatDate(timestamp)}</div>
            <button className="btn">
                Show
            </button>
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

export default connect(mapStateToProps)(QuestionList);