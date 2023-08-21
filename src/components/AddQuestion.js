import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
    const authedUser = useSelector((state) => state.authedUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [optionOneText, setoptionOneText] = useState("");
    const [optionTwoText, setoptionTwoText] = useState("");

    const handleChangeOptOne = (e) => {
        const text = e.target.value;
        setoptionOneText(text);
    }

    const handleChangeOptTwo = (e) => {
        const text = e.target.value;
        setoptionTwoText(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));

        setoptionOneText("");
        setoptionTwoText("");

        navigate("/");
    }

    return( 
        <div>
            <h3 className="center">Would You Rather</h3>
            <p className="center sub-title">Create Your Own Poll</p>
            <form className="add-question center" onSubmit={handleSubmit}>
                <p>First Option</p>
                <input placeholder="Option One" value={optionOneText} onChange={handleChangeOptOne} className="input"/>
                <p>Second Option</p>
                <input placeholder="Option Two" value={optionTwoText} onChange={handleChangeOptTwo} className="input"/>
                <button className="btn block" type="submit" disabled={optionOneText === "" || optionTwoText === ""}>
                    Submit
                </button>
            </form>
        </div>
    );
}
  
export default connect()(AddQuestion);