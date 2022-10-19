import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { history } from './../../router/history'
import App from './../../App';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));


describe("Testing Router ", () => {
    beforeEach(() => {
        history.push('/');
    });

    it("Should test useNavigaet router hook", () => {
        // mock push function
        // history.push = jest.fn();
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        )
        expect(history.location.pathname).toBe('/')
        expect(screen.getByText('Forgot password?')).toBeInTheDocument()
        fireEvent.click(screen.getByText('Forgot password?'))
        expect(screen.getByText('Reset Password')).toBeInTheDocument()
        expect(screen.getByText('Reset Password')).toBeInTheDocument()
    })
})