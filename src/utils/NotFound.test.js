import * as React from 'react';
import NotFound from "../components/NotFound";
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('NotFound', () => {
    it('will find an element with the text 404 - Not Found!', async() => {
        let component;
        act(() => {
          component = render(<NotFound/>);
        });
        await waitFor(() => {
          expect(screen.getByText("404 - Not Found!")).toBeInTheDocument();
        });
    });
});