import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './../../app/store';
import Login from './../../pages/Auth/Login'

describe("Login Page", () => {
    it("Should Render Login Page and verify title to be in document tree", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByText('Sign in')).toBeInTheDocument()
    })

    it("Should Render Login Page and verify Username input to be in document tree ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)

        expect(screen.getByPlaceholderText('Username'))
    })

    it("Should Render Login Page and verify Password input to be in document tree ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)

        expect(screen.getByPlaceholderText('Password'))
    })

    it("Should Render Login Page and verify Sign in button to be in document tree ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByRole('button'))
    })

    it("Should Render Login Page and verify that forgot password link exist in document tree", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByText('Forgot password?')).toBeInTheDocument()
    })

    it("Should Render Login Page and verify that signup link exist in document tree", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByText(`Don't have an account? Sign Up`)).toBeInTheDocument()
    })
})