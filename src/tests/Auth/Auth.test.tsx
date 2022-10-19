import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthPage from '../../pages/Auth/Auth';
import { Provider } from 'react-redux';
import { store } from './../../app/store';

describe("Auth Page ", () => {
    it("Should Render MainAppBar Component ", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AuthPage />
                </MemoryRouter>
            </Provider>)
        expect(screen.getByRole('AppBar')).toBeInTheDocument()
    })
})