import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Question from "./Question";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import NotFound from "./NotFound";
import Login from "./Login";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
          {props.loading == true ? 
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="*" element={<Login />}/>
            </Routes>
            : (
            <div>
              <Nav />
              <Routes>
                <Route path="/" exact element={<Dashboard />}/>
                <Route path="/question/:id" element={<Question />}/>
                <Route path="/add" element={<AddQuestion />}/>
                <Route path="/leaderboard" element={<Leaderboard />}/>
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </div>
          )}
      </div>
    </Fragment>
)};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);