import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { _saveQuestion, _saveQuestionAnswer } from './_DATA.js';

describe('_DATA', () => {
    it('will verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed', 
    async() => {
        const optionOneText = "Option One";
        const optionTwoText = "Option Two";
        const author = "tylermcginnis";
        const result = await _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        });
        expect(result['id']).toBeDefined();
        expect(result['timestamp']).toBeDefined();
        expect(result['author']).toEqual('tylermcginnis');
        expect(result['optionOne']['text']).toEqual('Option One');
        expect(result['optionTwo']['text']).toEqual('Option Two');
    });

    it('will verify that an error is returned if incorrect data is passed to the function', 
    async() => {
        const optionOneText = "Option One";
        const optionTwoText = "Option Two";
        const author = null;
        const result = _saveQuestion({
            optionOneText,
            optionTwoText,
            author,
        });
        await expect(result).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });

    it('will verify that the saved question answer is returned and all expected fields are populated when correctly formatted data is passed', 
    async() => {
        const result = await _saveQuestionAnswer({
            authedUser: "tylermcginnis",
            qid: "6ni6ok3ym7mf1p33lnez",
            answer: "optionOne"
        });
        expect(result).toBeTruthy();
    });

    it('will verify that an error is returned if incorrect data is passed', 
    async() => {
        const result = _saveQuestionAnswer({
            authedUser: "tylermcginnis",
            qid: "6ni6ok3ym7mf1p33lnez",
            answer: null
        });
        await expect(result).rejects.toEqual('Please provide authedUser, qid, and answer');
    });
});