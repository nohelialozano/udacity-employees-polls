import * as React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import Login from "../components/Login";

describe('Login', () => {
    it('will match snapshot', async () => {
      let component;
  
      act(() => {
        component = render(
          <Router>
            <Login />
          </Router>
        );
      });
  
      await act(async () => {
        expect(component).toMatchSnapshot();
      });
    });

    /*it('will display an error if the user and password do not match the records', () => {
        var component = render(<Login />);
        fireEvent.change(component.getByTestId("user-input"), { target: { value: 'tylermcginnis' } });
        fireEvent.change(component.getByTestId("password-input"), { target: { value: 'abc321' } });
        var submitButton = component.getByTestId("submit-button");
        fireEvent.click(submitButton);
        expect(component.getByTestId('error-message')).toBeInTheDocument();
    });*/
});