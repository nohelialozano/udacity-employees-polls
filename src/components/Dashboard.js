import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <div>
      <h3 className="center">New Questions</h3>
      {props.newQuestions.author}
      <ul className="dashboard-list">
        {/*props.newQuestions.map((id) => (
          <li key={id}>
           ID: {id}
          </li>
        ))*/}
      </ul>
      <h3 className="center">Done</h3>
      {props.doneQuestions}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {

  const newQuestions = Object.keys(questions)
                             .map((key) => { 
                                const object = questions[key];
                                //Do stuff
                             });

  const doneQuestions = "DONE CHAO";
  console.log(questions);

  return {
    newQuestions,
    doneQuestions
  };
};

export default connect(mapStateToProps)(Dashboard);