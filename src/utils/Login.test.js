import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from "../components/Login";

describe('Login', () => {
    it('will match snapshot', () => {
        var component = render(<Login />);
        expect(component).toMatchSnapshot();
    });

    it('will display an error if the user and password do not match the records', () => {
        var component = render(<Login />);
        fireEvent.change(component.getByTestId("user-input"), { target: { value: 'tylermcginnis' } });
        fireEvent.change(component.getByTestId("password-input"), { target: { value: 'abc321' } });
        var submitButton = component.getByTestId("submit-button");
        fireEvent.click(submitButton);
        expect(component.getByTestId('error-message')).toBeInTheDocument();
    });
});