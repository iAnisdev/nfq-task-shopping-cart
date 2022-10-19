import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Login from '../../pages/Auth/Login'

describe("Login Page", () => {
    it("Verify title to be in document tree", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByText('Sign in')).toBeInTheDocument()
    })

    it("Verify Username input to be in document tree ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)

        expect(screen.getByPlaceholderText('Username'))
    })

    it("Verify Password input to be in document tree ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)

        expect(screen.getByPlaceholderText('Password'))
    })

    it("Verify Sign in button to be in document tree ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByRole('button'))
    })

    it("Verify that forgot password link exist in document tree", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByText('Forgot password?')).toBeInTheDocument()
    })

    it("Verify that signup link exist in document tree", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByText(`Don't have an account? Sign Up`)).toBeInTheDocument()
    })
})