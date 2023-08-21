import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

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
          <Link to={`/question/${id}`}>
            <button className="btn">
                Show
            </button>
          </Link>
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