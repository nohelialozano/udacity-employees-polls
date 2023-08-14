import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Question from "./Question";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const id="xj352vofupe1dqz9emx13r";

  return (
    <div className="container">
      <Question id={id}/>
    </div>
)};

export default connect()(App);